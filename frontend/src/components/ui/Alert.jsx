import { cn } from '@/utils/cn'

export const AlertCircle = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export const Alert = ({ variant = 'default', title, description, className, ...props }) => {
  const variants = {
    default: 'bg-primary-50 dark:bg-primary-950 border-l-4 border-primary-500 text-primary-900 dark:text-primary-100',
    destructive: 'bg-danger-50 dark:bg-danger-950 border-l-4 border-danger-500 text-danger-900 dark:text-danger-100',
    success: 'bg-success-50 dark:bg-success-950 border-l-4 border-success-500 text-success-900 dark:text-success-100',
    warning: 'bg-warning-50 dark:bg-warning-950 border-l-4 border-warning-500 text-warning-900 dark:text-warning-100',
  }

  return (
    <div className={cn('rounded-lg p-4', variants[variant], className)} {...props}>
      <div className="flex gap-3">
        <AlertCircle />
        <div className="flex-1">
          {title && <h3 className="font-medium text-sm">{title}</h3>}
          {description && <p className="text-sm opacity-90 mt-1">{description}</p>}
        </div>
      </div>
    </div>
  )
}

export default Alert
