import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/schemas'
import { useLogin } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Mail, Lock } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function LoginPage() {
  const navigate = useNavigate()
  const { mutate: login, isPending } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const getRoleDashboard = (role) => {
    const roleMap = {
      student: '/dashboard/student',
      mentor: '/dashboard/mentor',
      placement_officer: '/dashboard/placement',
      admin: '/dashboard/admin',
    }
    return roleMap[role] ?? '/dashboard/student'
  }

  const onSubmit = (data) => {
    login(data, {
      onSuccess: () => {
        const user = JSON.parse(localStorage.getItem('user') || '{}')
        navigate(getRoleDashboard(user?.role))
      },
    })
  }

  return (
    <div className="w-full max-w-md">
      <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Welcome Back</CardTitle>
          <CardDescription className="text-white/70">
            Sign in to your AI Career Roadmap account
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
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              error={errors.password?.message}
              {...register('password')}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-white/70 cursor-pointer">
                <input type="checkbox" className="rounded" />
                Remember me
              </label>
              <Link to="/auth/forgot-password" className="text-primary-400 hover:text-primary-300">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              className="w-full text-white"
              isLoading={isPending}
              disabled={isPending}
            >
              Sign In
            </Button>

            <p className="text-center text-sm text-white/70">
              Don't have an account?{' '}
              <Link to="/auth/register" className="text-primary-400 hover:text-primary-300 font-medium">
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
