import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg font-medium ring-offset-secondary-50 dark:ring-offset-secondary-950 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary-600 text-white hover:bg-primary-700 dark:hover:bg-primary-500',
        secondary: 'bg-secondary-200 text-secondary-900 hover:bg-secondary-300 dark:bg-secondary-800 dark:text-secondary-100 dark:hover:bg-secondary-700',
        destructive: 'bg-danger-600 text-white hover:bg-danger-700 dark:hover:bg-danger-500',
        outline: 'border-2 border-secondary-300 bg-transparent hover:bg-secondary-100 dark:border-secondary-700 dark:hover:bg-secondary-900',
        ghost: 'hover:bg-secondary-100 dark:hover:bg-secondary-900',
        gradient: 'bg-gradient-primary text-white hover:shadow-lg hover:shadow-primary-500/50',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const Button = forwardRef(
  ({ className, variant, size, isLoading, disabled, children, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </button>
  )
)

Button.displayName = 'Button'

export default Button
