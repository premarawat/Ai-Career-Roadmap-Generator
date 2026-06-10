import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

const Input = forwardRef(
  (
    {
      className,
      type = 'text',
      error,
      icon: Icon,
      label,
      helpText,
      required,
      disabled,
      ...props
    },
    ref
  ) => (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-secondary-900 dark:text-secondary-100 mb-2">
          {label}
          {required && <span className="text-danger-600 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-400 dark:text-secondary-600 pointer-events-none" />
        )}
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          className={cn(
            'w-full px-4 py-2.5 rounded-lg border-2 border-secondary-200 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-secondary-100 placeholder:text-secondary-400 dark:placeholder:text-secondary-600 focus:border-primary-500 focus:outline-none transition-colors dark:border-secondary-700',
            Icon && 'pl-10',
            error && 'border-danger-500 focus:border-danger-500',
            disabled && 'bg-secondary-100 dark:bg-secondary-800 cursor-not-allowed opacity-50',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-danger-600 dark:text-danger-400">{error}</p>
      )}
      {helpText && !error && (
        <p className="mt-1 text-sm text-secondary-500 dark:text-secondary-400">
          {helpText}
        </p>
      )}
    </div>
  )
)

Input.displayName = 'Input'

export default Input
