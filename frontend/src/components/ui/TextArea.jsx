import { forwardRef } from 'react'
import { cn } from '@/utils/cn'

const TextArea = forwardRef(
  (
    {
      className,
      error,
      label,
      helpText,
      required,
      disabled,
      maxLength,
      ...props
    },
    ref
  ) => {
    const hasValue = props.value || props.defaultValue
    const charCount = hasValue?.length || 0

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-secondary-900 dark:text-secondary-100 mb-2">
            {label}
            {required && <span className="text-danger-600 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            disabled={disabled}
            maxLength={maxLength}
            className={cn(
              'w-full px-4 py-2.5 rounded-lg border-2 border-secondary-200 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-secondary-100 placeholder:text-secondary-400 dark:placeholder:text-secondary-600 focus:border-primary-500 focus:outline-none transition-colors dark:border-secondary-700 resize-none',
              error && 'border-danger-500 focus:border-danger-500',
              disabled && 'bg-secondary-100 dark:bg-secondary-800 cursor-not-allowed opacity-50',
              className
            )}
            rows={4}
            {...props}
          />
        </div>
        <div className="flex justify-between items-start mt-1">
          <div>
            {error && (
              <p className="text-sm text-danger-600 dark:text-danger-400">{error}</p>
            )}
            {helpText && !error && (
              <p className="text-sm text-secondary-500 dark:text-secondary-400">
                {helpText}
              </p>
            )}
          </div>
          {maxLength && (
            <span className="text-xs text-secondary-400 dark:text-secondary-600">
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea
