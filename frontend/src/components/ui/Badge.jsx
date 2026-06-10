import { cn } from '@/utils/cn'

export const Badge = ({ variant = 'default', className, ...props }) => {
  const variants = {
    default: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
    secondary: 'bg-secondary-100 text-secondary-800 dark:bg-secondary-800 dark:text-secondary-200',
    destructive: 'bg-danger-100 text-danger-800 dark:bg-danger-900 dark:text-danger-200',
    success: 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-200',
    warning: 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200',
    outline: 'border border-primary-300 text-primary-900 dark:border-primary-700 dark:text-primary-100',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export default Badge
