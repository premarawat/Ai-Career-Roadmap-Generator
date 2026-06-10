import { cn } from '@/utils/cn'

export const Table = ({ className, ...props }) => (
  <div className="w-full overflow-x-auto">
    <table className={cn('w-full text-sm', className)} {...props} />
  </div>
)

export const TableHead = ({ className, ...props }) => (
  <thead className={cn('bg-secondary-100 dark:bg-secondary-800 border-b-2 border-secondary-200 dark:border-secondary-700', className)} {...props} />
)

export const TableBody = ({ className, ...props }) => (
  <tbody className={cn('divide-y divide-secondary-200 dark:divide-secondary-800', className)} {...props} />
)

export const TableHeader = ({ className, ...props }) => (
  <th className={cn('px-6 py-3 text-left font-semibold text-secondary-900 dark:text-secondary-100', className)} {...props} />
)

export const TableRow = ({ className, ...props }) => (
  <tr className={cn('hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors', className)} {...props} />
)

export const TableCell = ({ className, ...props }) => (
  <td className={cn('px-6 py-4 text-secondary-900 dark:text-secondary-100', className)} {...props} />
)

export default Table
