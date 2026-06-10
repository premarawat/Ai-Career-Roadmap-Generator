import { cn } from '@/utils/cn'

const SkeletonLoader = ({ className, ...props }) => (
  <div
    className={cn(
      'animate-pulse rounded-lg bg-secondary-200 dark:bg-secondary-800',
      className
    )}
    {...props}
  />
)

export const SkeletonCard = () => (
  <div className="space-y-4 p-6">
    <SkeletonLoader className="h-6 w-2/3" />
    <SkeletonLoader className="h-4 w-full" />
    <SkeletonLoader className="h-4 w-5/6" />
  </div>
)

export const SkeletonTable = ({ rows = 5, columns = 4 }) => (
  <div className="space-y-2">
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="flex gap-4">
        {Array.from({ length: columns }).map((_, j) => (
          <SkeletonLoader key={j} className="flex-1 h-10" />
        ))}
      </div>
    ))}
  </div>
)

export default SkeletonLoader
