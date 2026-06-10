import { useForm } from 'react-hook-form'
import { useVerifyEmail } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { useNavigate } from 'react-router-dom'

export default function EmailVerificationPage() {
  const navigate = useNavigate()
  const { mutate: verifyEmail, isPending } = useVerifyEmail()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    verifyEmail(data.code, {
      onSuccess: () => {
        navigate('/dashboard/student')
      },
    })
  }

  return (
    <div className="w-full max-w-md">
      <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Verify Email</CardTitle>
          <CardDescription className="text-white/70">
            Enter the 6-digit code sent to your email
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Verification Code"
              placeholder="000000"
              maxLength={6}
              error={errors.code?.message}
              {...register('code', { required: 'Code is required' })}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-center text-2xl tracking-widest"
            />

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full text-white"
              isLoading={isPending}
              disabled={isPending}
            >
              Verify Email
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
