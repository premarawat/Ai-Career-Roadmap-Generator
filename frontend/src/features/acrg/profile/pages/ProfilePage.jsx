import { useQuery } from '@tanstack/react-query'
import { profileAPI } from '@/services/api'
import { useAuthStore } from '@/store/authStore'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { EmptyState } from '@/components/ui/EmptyState'
import Skeleton from '@/components/ui/Skeleton'
import Badge from '@/components/ui/Badge'
import { Edit, User, GraduationCap, Briefcase, Award, Heart } from 'lucide-react'

export default function ProfilePage() {
  const { user: currentUser } = useAuthStore()

  const { data: response, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: () => profileAPI.get(),
  })

  const profile = response?.data?.data

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-28" />
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <Skeleton className="h-64 lg:col-span-1" />
          <Skeleton className="h-96 lg:col-span-2" />
        </div>
      </div>
    )
  }

  const userFullName = currentUser 
    ? `${currentUser.firstName} ${currentUser.lastName}` 
    : 'User Profile'

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-secondary-100">
          Career Profile
        </h1>
        <Button icon={Edit} href="/profile/edit">
          Edit Profile
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - User Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
            <CardContent className="p-6 text-center">
              <div className="h-24 w-24 bg-primary-600 rounded-full mx-auto flex items-center justify-center border-4 border-white/20">
                <User className="h-12 w-12 text-white" />
              </div>
              <h2 className="text-xl font-semibold mt-4 text-white">
                {userFullName}
              </h2>
              <p className="text-white/60 capitalize mt-1">
                {currentUser?.role || 'User'}
              </p>
              <p className="text-white/50 text-sm mt-1">
                {currentUser?.email}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {!profile ? (
            <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
              <CardContent className="p-8">
                <EmptyState
                  title="Profile is Empty"
                  description="Complete your career profile with education, skills, and experience to unlock AI planning recommendations."
                  action={
                    <Button variant="gradient" href="/profile/edit">
                      Complete Profile Now
                    </Button>
                  }
                />
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Education */}
              <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
                <CardHeader className="flex flex-row items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary-400" />
                  <CardTitle className="text-white text-lg">Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profile.education?.length === 0 ? (
                    <p className="text-white/50 text-sm">No education history added.</p>
                  ) : (
                    profile.education.map((edu, idx) => (
                      <div key={idx} className="border-l-2 border-primary-500 pl-4 py-1">
                        <h4 className="font-semibold text-white text-base">
                          {edu.degree} in {edu.field}
                        </h4>
                        <p className="text-white/70 text-sm">{edu.institution}</p>
                        <p className="text-white/50 text-xs mt-1">
                          {edu.startYear} — {edu.endYear || 'Present'}
                        </p>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Briefcase className="h-6 w-6 text-primary-400" />
                  <CardTitle className="text-white text-lg">Experience</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profile.experience?.length === 0 ? (
                    <p className="text-white/50 text-sm">No experience history added.</p>
                  ) : (
                    profile.experience.map((exp, idx) => (
                      <div key={idx} className="border-l-2 border-secondary-500 pl-4 py-1">
                        <h4 className="font-semibold text-white text-base">
                          {exp.role}
                        </h4>
                        <p className="text-white/70 text-sm">{exp.company}</p>
                        <p className="text-white/50 text-xs mt-1">{exp.duration}</p>
                        {exp.description && (
                          <p className="text-white/70 text-sm mt-2 leading-relaxed">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>

              {/* Skills */}
              <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
                <CardHeader className="flex flex-row items-center gap-2">
                  <User className="h-6 w-6 text-primary-400" />
                  <CardTitle className="text-white text-lg">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  {profile.skills?.length === 0 ? (
                    <p className="text-white/50 text-sm">No skills cataloged.</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, idx) => (
                        <Badge key={idx} variant="primary" className="text-xs capitalize">
                          {skill.name} • <span className="opacity-75">{skill.level}</span>
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Award className="h-6 w-6 text-primary-400" />
                  <CardTitle className="text-white text-lg">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {profile.certifications?.length === 0 ? (
                    <p className="text-white/50 text-sm">No certifications listed.</p>
                  ) : (
                    profile.certifications.map((cert, idx) => (
                      <div key={idx} className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-white text-sm">{cert.name}</h4>
                          <p className="text-white/60 text-xs">{cert.issuer}</p>
                        </div>
                        <span className="text-white/40 text-xs">
                          {new Date(cert.earnedAt).toLocaleDateString()}
                        </span>
                      </div>
                    ))
                  )}
                </CardContent>
              </Card>

              {/* Interests */}
              <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
                <CardHeader className="flex flex-row items-center gap-2">
                  <Heart className="h-6 w-6 text-primary-400" />
                  <CardTitle className="text-white text-lg">Interests & Domains</CardTitle>
                </CardHeader>
                <CardContent>
                  {profile.interests?.length === 0 ? (
                    <p className="text-white/50 text-sm">No interests declared.</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
