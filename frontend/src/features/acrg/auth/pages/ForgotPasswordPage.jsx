import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgotPasswordSchema } from '@/schemas'
import { useForgotPassword } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Mail } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function ForgotPasswordPage() {
  const navigate = useNavigate()
  const { mutate: forgotPassword, isPending } = useForgotPassword()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = (data) => {
    forgotPassword(data.email)
  }

  return (
    <div className="w-full max-w-md">
      <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Forgot Password?</CardTitle>
          <CardDescription className="text-white/70">
            Enter your email to receive a password reset link
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              icon={Mail}
              error={errors.email?.message}
              {...register('email')}
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
              Send Reset Link
            </Button>

            <p className="text-center text-sm text-white/70">
              Remember your password?{' '}
              <Link to="/auth/login" className="text-primary-400 hover:text-primary-300 font-medium">
                Sign in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
