import { cn } from '@/utils/cn'

export const EmptyState = ({ icon: Icon, title, description, action, className }) => (
  <div className={cn('flex flex-col items-center justify-center py-12 px-4', className)}>
    {Icon && <Icon className="h-16 w-16 text-secondary-300 dark:text-secondary-700 mb-4" />}
    {title && <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">{title}</h3>}
    {description && <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-2 text-center max-w-md">{description}</p>}
    {action && <div className="mt-6">{action}</div>}
  </div>
)

export const ErrorState = ({ title = 'Error', description, action, retry }) => (
  <div className="flex flex-col items-center justify-center py-12 px-4">
    <svg className="h-16 w-16 text-danger-400 dark:text-danger-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">{title}</h3>
    {description && <p className="text-sm text-secondary-500 dark:text-secondary-400 mt-2 text-center max-w-md">{description}</p>}
    {retry && (
      <button
        onClick={retry}
        className="mt-6 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
      >
        Try Again
      </button>
    )}
  </div>
)

export default EmptyState
