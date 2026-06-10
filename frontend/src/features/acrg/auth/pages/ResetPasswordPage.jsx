import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema } from '@/schemas'
import { useResetPassword } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Lock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function ResetPasswordPage() {
  const { token } = useParams()
  const navigate = useNavigate()
  const { mutate: resetPassword, isPending } = useResetPassword()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit = (data) => {
    resetPassword(
      { token, password: data.password },
      {
        onSuccess: () => {
          navigate('/auth/login')
        },
      }
    )
  }

  return (
    <div className="w-full max-w-md">
      <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Reset Password</CardTitle>
          <CardDescription className="text-white/70">
            Enter your new password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="New Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              error={errors.password?.message}
              {...register('password')}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              error={errors.confirmPassword?.message}
              {...register('confirmPassword')}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full text-white"
              isLoading={isPending}
              disabled={isPending}
            >
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
