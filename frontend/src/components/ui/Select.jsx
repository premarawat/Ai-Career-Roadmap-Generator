import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

const Select = forwardRef(
  ({ className, error, label, required, disabled, children, ...props }, ref) => (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-secondary-900 dark:text-secondary-100 mb-2">
          {label}
          {required && <span className="text-danger-600 ml-1">*</span>}
        </label>
      )}
      <select
        ref={ref}
        disabled={disabled}
        className={cn(
          'w-full px-4 py-2.5 rounded-lg border-2 border-secondary-200 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-secondary-100 focus:border-primary-500 focus:outline-none transition-colors dark:border-secondary-700 cursor-pointer',
          error && 'border-danger-500 focus:border-danger-500',
          disabled && 'bg-secondary-100 dark:bg-secondary-800 cursor-not-allowed opacity-50',
          className
        )}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="mt-1 text-sm text-danger-600 dark:text-danger-400">{error}</p>
      )}
    </div>
  )
)

Select.displayName = 'Select'

export default Select
