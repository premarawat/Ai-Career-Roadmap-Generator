import { useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm, useFieldArray } from 'react-hook-form'
import { profileAPI } from '@/services/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { Plus, Trash2, ArrowLeft, Save } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export default function EditProfilePage() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  // Fetch existing profile
  const { data: response, isLoading: isProfileLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => profileAPI.get(),
  })

  const { register, control, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      education: [],
      skills: [],
      experience: [],
      certifications: [],
      interests: '',
    }
  })

  // Dynamic Array Handlers
  const { fields: educationFields, append: appendEdu, remove: removeEdu } = useFieldArray({
    control,
    name: 'education'
  })

  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: 'skills'
  })

  const { fields: experienceFields, append: appendExp, remove: removeExp } = useFieldArray({
    control,
    name: 'experience'
  })

  const { fields: certificationFields, append: appendCert, remove: removeCert } = useFieldArray({
    control,
    name: 'certifications'
  })

  // Pre-fill form when profile data loads
  useEffect(() => {
    if (response?.data?.data) {
      const profile = response.data.data
      setValue('education', profile.education || [])
      setValue('skills', profile.skills || [])
      setValue('experience', profile.experience || [])
      
      // Map certification earnedAt date to ISO string for inputs
      const certs = (profile.certifications || []).map(c => ({
        ...c,
        earnedAt: c.earnedAt ? new Date(c.earnedAt).toISOString().split('T')[0] : ''
      }))
      setValue('certifications', certs)
      
      setValue('interests', (profile.interests || []).join(', '))
    }
  }, [response, setValue])

  const { mutate: updateProfile, isPending: isSaving } = useMutation({
    mutationFn: (data) => profileAPI.update(data),
    onSuccess: () => {
      toast.success('Profile updated successfully!')
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      navigate('/profile')
    },
    onError: (error) => {
      toast.error(error.response?.data?.error?.message || 'Failed to update profile')
    }
  })

  const onSubmit = (data) => {
    // Process comma-separated interests into an array
    const formattedInterests = data.interests
      ? data.interests.split(',').map(item => item.trim()).filter(Boolean)
      : []

    // Ensure startYear is a number
    const formattedEdu = (data.education || []).map(edu => ({
      ...edu,
      startYear: Number(edu.startYear),
      endYear: edu.endYear ? Number(edu.endYear) : undefined
    }))

    const payload = {
      ...data,
      education: formattedEdu,
      interests: formattedInterests
    }

    updateProfile(payload)
  }

  if (isProfileLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={() => navigate('/profile')}>
          Back to Profile
        </Button>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
          Edit Career Profile
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Education Section */}
        <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
          <CardHeader className="flex flex-row justify-between items-center border-b border-white/10">
            <CardTitle className="text-white text-lg font-semibold">Education History</CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={() => appendEdu({ institution: '', degree: '', field: '', startYear: new Date().getFullYear() })}
            >
              Add Education
            </Button>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {educationFields.length === 0 ? (
              <p className="text-white/40 text-sm text-center py-4">No education details added yet.</p>
            ) : (
              educationFields.map((field, idx) => (
                <div key={field.id} className="relative p-4 border border-white/10 rounded-lg bg-white/5 space-y-4">
                  <button
                    type="button"
                    onClick={() => removeEdu(idx)}
                    className="absolute top-2 right-2 text-danger-500 hover:text-danger-400 transition-colors p-1"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Institution"
                      required
                      placeholder="University name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      {...register(`education.${idx}.institution`, { required: true })}
                    />
                    <Input
                      label="Degree"
                      required
                      placeholder="e.g. B.S., M.S."
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      {...register(`education.${idx}.degree`, { required: true })}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Input
                      label="Field of Study"
                      required
                      placeholder="e.g. Computer Science"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      {...register(`education.${idx}.field`, { required: true })}
                    />
                    <Input
                      label="Start Year"
                      type="number"
                      required
                      className="bg-white/10 border-white/20 text-white"
                      {...register(`education.${idx}.startYear`, { required: true, valueAsNumber: true })}
                    />
                    <Input
                      label="End Year (Optional)"
                      type="number"
                      className="bg-white/10 border-white/20 text-white"
                      {...register(`education.${idx}.endYear`, { valueAsNumber: true })}
                    />
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Experience Section */}
        <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
          <CardHeader className="flex flex-row justify-between items-center border-b border-white/10">
            <CardTitle className="text-white text-lg font-semibold">Experience History</CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={() => appendExp({ company: '', role: '', duration: '', description: '' })}
            >
              Add Experience
            </Button>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {experienceFields.length === 0 ? (
              <p className="text-white/40 text-sm text-center py-4">No experience details added yet.</p>
            ) : (
              experienceFields.map((field, idx) => (
                <div key={field.id} className="relative p-4 border border-white/10 rounded-lg bg-white/5 space-y-4">
                  <button
                    type="button"
                    onClick={() => removeExp(idx)}
                    className="absolute top-2 right-2 text-danger-500 hover:text-danger-400 transition-colors p-1"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Input
                      label="Company"
                      required
                      placeholder="Company name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      {...register(`experience.${idx}.company`, { required: true })}
                    />
                    <Input
                      label="Role / Title"
                      required
                      placeholder="e.g. Frontend Intern"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      {...register(`experience.${idx}.role`, { required: true })}
                    />
                    <Input
                      label="Duration"
                      required
                      placeholder="e.g. 6 months, 2 years"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      {...register(`experience.${idx}.duration`, { required: true })}
                    />
                  </div>

                  <Input
                    label="Description"
                    placeholder="Brief description of your key achievements and duties"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    {...register(`experience.${idx}.description`)}
                  />
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
          <CardHeader className="flex flex-row justify-between items-center border-b border-white/10">
            <CardTitle className="text-white text-lg font-semibold">Skills Inventory</CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={() => appendSkill({ name: '', level: 'beginner' })}
            >
              Add Skill
            </Button>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {skillFields.length === 0 ? (
              <p className="text-white/40 text-sm text-center py-4">No skills cataloged yet.</p>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {skillFields.map((field, idx) => (
                  <div key={field.id} className="flex gap-2 items-end p-3 border border-white/10 rounded-lg bg-white/5 relative">
                    <Input
                      label="Skill Name"
                      required
                      placeholder="e.g. React, Python"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      {...register(`skills.${idx}.name`, { required: true })}
                    />
                    <Select
                      label="Level"
                      className="bg-secondary-800 border-white/20 text-white"
                      {...register(`skills.${idx}.level`, { required: true })}
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </Select>
                    <button
                      type="button"
                      onClick={() => removeSkill(idx)}
                      className="text-danger-500 hover:text-danger-400 p-2.5"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Certifications Section */}
        <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
          <CardHeader className="flex flex-row justify-between items-center border-b border-white/10">
            <CardTitle className="text-white text-lg font-semibold">Certifications</CardTitle>
            <Button
              type="button"
              variant="outline"
              size="sm"
              icon={Plus}
              onClick={() => appendCert({ name: '', issuer: '', earnedAt: '' })}
            >
              Add Certification
            </Button>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {certificationFields.length === 0 ? (
              <p className="text-white/40 text-sm text-center py-4">No certifications listed yet.</p>
            ) : (
              certificationFields.map((field, idx) => (
                <div key={field.id} className="relative p-4 border border-white/10 rounded-lg bg-white/5 space-y-4">
                  <button
                    type="button"
                    onClick={() => removeCert(idx)}
                    className="absolute top-2 right-2 text-danger-500 hover:text-danger-400 transition-colors p-1"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>

                  <div className="grid md:grid-cols-3 gap-4">
                    <Input
                      label="Certificate Name"
                      required
                      placeholder="e.g. AWS Solutions Architect"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      {...register(`certifications.${idx}.name`, { required: true })}
                    />
                    <Input
                      label="Issuer"
                      required
                      placeholder="e.g. Amazon Web Services"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      {...register(`certifications.${idx}.issuer`, { required: true })}
                    />
                    <Input
                      label="Earned Date"
                      type="date"
                      required
                      className="bg-white/10 border-white/20 text-white"
                      {...register(`certifications.${idx}.earnedAt`, { required: true })}
                    />
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Interests Section */}
        <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
          <CardHeader>
            <CardTitle className="text-white text-lg font-semibold">Interests & Tech Domains</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Input
              label="Interests (comma-separated)"
              placeholder="e.g. AI Engineering, Front-end Web, Systems Programming"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
              {...register('interests')}
              helpText="Separate multiple interests with commas"
            />
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button variant="outline" type="button" onClick={() => navigate('/profile')}>
            Cancel
          </Button>
          <Button variant="gradient" type="submit" icon={Save} isLoading={isSaving} disabled={isSaving}>
            Save Changes
          </Button>
        </div>

      </form>
    </div>
  )
}
