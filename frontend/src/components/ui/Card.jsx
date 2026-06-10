import { cn } from '@/utils/cn'

export const Card = ({ className, ...props }) => (
  <div
    className={cn(
      'rounded-lg border border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-secondary-100 shadow-sm',
      className
    )}
    {...props}
  />
)

export const CardHeader = ({ className, ...props }) => (
  <div
    className={cn('flex flex-col space-y-1.5 p-6 border-b border-secondary-200 dark:border-secondary-800', className)}
    {...props}
  />
)

export const CardTitle = ({ className, ...props }) => (
  <h2 className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
)

export const CardDescription = ({ className, ...props }) => (
  <p className={cn('text-sm text-secondary-500 dark:text-secondary-400', className)} {...props} />
)

export const CardContent = ({ className, ...props }) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
)

export const CardFooter = ({ className, ...props }) => (
  <div
    className={cn('flex items-center p-6 pt-0 border-t border-secondary-200 dark:border-secondary-800', className)}
    {...props}
  />
)

export default Card
