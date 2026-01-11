import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select"

interface DataTablePaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current page index (0-based) */
  pageIndex: number
  /** Number of items per page */
  pageSize: number
  /** Total number of items */
  totalItems: number
  /** Number of selected rows (optional) */
  selectedCount?: number
  /** Available page size options */
  pageSizeOptions?: number[]
  /** Callback when page changes */
  onPageChange: (pageIndex: number) => void
  /** Callback when page size changes */
  onPageSizeChange: (pageSize: number) => void
  /** Show row selection count */
  showSelectedCount?: boolean
}

function DataTablePagination({
  className,
  pageIndex,
  pageSize,
  totalItems,
  selectedCount = 0,
  pageSizeOptions = [10, 20, 30, 40, 50],
  onPageChange,
  onPageSizeChange,
  showSelectedCount = true,
  ...props
}: DataTablePaginationProps) {
  const pageCount = Math.ceil(totalItems / pageSize)
  const canGoPrevious = pageIndex > 0
  const canGoNext = pageIndex < pageCount - 1

  const startItem = pageIndex * pageSize + 1
  const endItem = Math.min((pageIndex + 1) * pageSize, totalItems)

  return (
    <div
      data-slot="data-table-pagination"
      className={cn(
        "flex flex-col items-center justify-between gap-4 px-2 sm:flex-row",
        className
      )}
      {...props}
    >
      <div className="flex-1 text-sm text-muted-foreground">
        {showSelectedCount && selectedCount > 0 ? (
          <span>
            {selectedCount} of {totalItems} row(s) selected.
          </span>
        ) : (
          <span>
            Showing {startItem} to {endItem} of {totalItems} results
          </span>
        )}
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium whitespace-nowrap">Rows per page</p>
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => {
              onPageSizeChange(Number(value))
              onPageChange(0) // Reset to first page when changing page size
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((size) => (
                <SelectItem key={size} value={`${size}`}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {pageIndex + 1} of {pageCount || 1}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => onPageChange(0)}
            disabled={!canGoPrevious}
            aria-label="Go to first page"
          >
            <ChevronsLeftIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => onPageChange(pageIndex - 1)}
            disabled={!canGoPrevious}
            aria-label="Go to previous page"
          >
            <ChevronLeftIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => onPageChange(pageIndex + 1)}
            disabled={!canGoNext}
            aria-label="Go to next page"
          >
            <ChevronRightIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => onPageChange(pageCount - 1)}
            disabled={!canGoNext}
            aria-label="Go to last page"
          >
            <ChevronsRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { DataTablePagination }
