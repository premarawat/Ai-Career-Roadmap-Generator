import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/schemas'
import { useRegister } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import { Mail, Lock, User } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

export default function RegisterPage() {
  const navigate = useNavigate()
  const { mutate: register, isPending } = useRegister()
  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data) => {
    register(data, {
      onSuccess: () => {
        navigate('/auth/verify-email')
      },
    })
  }

  return (
    <div className="w-full max-w-md">
      <Card className="backdrop-blur-lg bg-white/10 dark:bg-secondary-900/50 border-white/20 dark:border-secondary-800/50">
        <CardHeader>
          <CardTitle className="text-3xl text-white">Create Account</CardTitle>
          <CardDescription className="text-white/70">
            Start your career roadmap journey today
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="John"
                error={errors.firstName?.message}
                {...registerField('firstName')}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                error={errors.lastName?.message}
                {...registerField('lastName')}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>

            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              icon={Mail}
              error={errors.email?.message}
              {...registerField('email')}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />

            <Select
              label="I am a"
              error={errors.role?.message}
              {...registerField('role')}
              className="bg-white/10 border-white/20 text-white"
            >
              <option value="">Select role</option>
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </Select>

            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              error={errors.password?.message}
              {...registerField('password')}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
              error={errors.confirmPassword?.message}
              {...registerField('confirmPassword')}
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
              Create Account
            </Button>

            <p className="text-center text-sm text-white/70">
              Already have an account?{' '}
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
