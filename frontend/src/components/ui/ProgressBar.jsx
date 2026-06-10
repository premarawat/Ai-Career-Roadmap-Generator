import { cn } from '@/utils/cn'

export const ProgressBar = ({ value = 0, variant = 'default', label, className }) => {
  const variants = {
    default: 'bg-primary-600',
    success: 'bg-success-600',
    warning: 'bg-warning-600',
    danger: 'bg-danger-600',
  }

  const clampedValue = Math.min(Math.max(value, 0), 100)

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <div className="flex justify-between mb-2 text-sm">
          <span className="font-medium text-secondary-900 dark:text-secondary-100">
            {label}
          </span>
          <span className="text-secondary-600 dark:text-secondary-400">{clampedValue}%</span>
        </div>
      )}
      <div className="w-full bg-secondary-200 dark:bg-secondary-800 rounded-full h-2 overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-300', variants[variant])}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
