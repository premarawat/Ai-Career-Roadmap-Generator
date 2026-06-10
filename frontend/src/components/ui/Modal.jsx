import { cn } from '@/utils/cn'

export const Modal = ({ isOpen, onClose, title, children, size = 'md', className }) => {
  if (!isOpen) return null

  const sizes = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        className={cn(
          'bg-white dark:bg-secondary-900 rounded-lg shadow-lg max-h-[90vh] overflow-auto',
          sizes[size],
          'w-full mx-4',
          className
        )}
      >
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-secondary-200 dark:border-secondary-800">
            <h2 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-secondary-500 hover:text-secondary-900 dark:hover:text-secondary-100"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export default Modal
