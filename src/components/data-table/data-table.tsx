import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table"
import { Checkbox } from "@/components/checkbox"
import { DataTableColumnHeader, type SortDirection } from "./data-table-column-header"
import { DataTablePagination } from "./data-table-pagination"

/**
 * Column definition for DataTable
 */
export interface DataTableColumn<TData> {
  /** Unique identifier for the column */
  id: string
  /** Display header text */
  header: string
  /** Key in data object to access value, or custom accessor function */
  accessorKey?: keyof TData
  /** Custom accessor function for complex data access */
  accessorFn?: (row: TData) => unknown
  /** Enable sorting for this column */
  sortable?: boolean
  /** Enable hiding for this column */
  hideable?: boolean
  /** Custom cell renderer */
  cell?: (value: unknown, row: TData, index: number) => React.ReactNode
  /** Header className */
  headerClassName?: string
  /** Cell className */
  cellClassName?: string
  /** Alignment */
  align?: "left" | "center" | "right"
}

/**
 * Sorting state
 */
export interface SortingState {
  id: string
  desc: boolean
}

/**
 * DataTable props
 */
interface DataTableProps<TData extends { id: string | number }>
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Data to display */
  data: TData[]
  /** Column definitions */
  columns: DataTableColumn<TData>[]
  /** Enable row selection */
  selectable?: boolean
  /** Selected row IDs (controlled) */
  selectedRows?: Set<string | number>
  /** Callback when selection changes */
  onSelectionChange?: (selectedRows: Set<string | number>) => void
  /** Enable pagination */
  paginated?: boolean
  /** Items per page (default: 10) */
  pageSize?: number
  /** Page size options */
  pageSizeOptions?: number[]
  /** Loading state */
  loading?: boolean
  /** Empty state message */
  emptyMessage?: string
  /** Caption for accessibility */
  caption?: string
  /** Show column visibility controls */
  showColumnVisibility?: boolean
}

function DataTable<TData extends { id: string | number }>({
  className,
  data,
  columns,
  selectable = false,
  selectedRows: controlledSelectedRows,
  onSelectionChange,
  paginated = true,
  pageSize: initialPageSize = 10,
  pageSizeOptions = [10, 20, 30, 40, 50],
  loading = false,
  emptyMessage = "No results.",
  caption,
  showColumnVisibility = false,
  ...props
}: DataTableProps<TData>) {
  // Sorting state
  const [sorting, setSorting] = React.useState<SortingState | null>(null)

  // Column visibility state
  const [hiddenColumns, setHiddenColumns] = React.useState<Set<string>>(new Set())

  // Pagination state
  const [pageIndex, setPageIndex] = React.useState(0)
  const [pageSize, setPageSize] = React.useState(initialPageSize)

  // Selection state (internal or controlled)
  const [internalSelectedRows, setInternalSelectedRows] = React.useState<Set<string | number>>(
    new Set()
  )
  const selectedRows = controlledSelectedRows ?? internalSelectedRows
  const setSelectedRows = onSelectionChange ?? setInternalSelectedRows

  // Get cell value helper
  const getCellValue = React.useCallback(
    (row: TData, column: DataTableColumn<TData>): unknown => {
      if (column.accessorFn) {
        return column.accessorFn(row)
      }
      if (column.accessorKey) {
        return row[column.accessorKey]
      }
      return null
    },
    []
  )

  // Sort data
  const sortedData = React.useMemo(() => {
    if (!sorting) return data

    const column = columns.find((col) => col.id === sorting.id)
    if (!column) return data

    return [...data].sort((a, b) => {
      const aValue = getCellValue(a, column)
      const bValue = getCellValue(b, column)

      // Handle null/undefined
      if (aValue == null && bValue == null) return 0
      if (aValue == null) return sorting.desc ? -1 : 1
      if (bValue == null) return sorting.desc ? 1 : -1

      // Compare values
      let comparison = 0
      if (typeof aValue === "string" && typeof bValue === "string") {
        comparison = aValue.localeCompare(bValue)
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        comparison = aValue - bValue
      } else {
        comparison = String(aValue).localeCompare(String(bValue))
      }

      return sorting.desc ? -comparison : comparison
    })
  }, [data, sorting, columns, getCellValue])

  // Paginate data
  const paginatedData = React.useMemo(() => {
    if (!paginated) return sortedData
    const start = pageIndex * pageSize
    const end = start + pageSize
    return sortedData.slice(start, end)
  }, [sortedData, paginated, pageIndex, pageSize])

  // Reset page when data changes
  React.useEffect(() => {
    setPageIndex(0)
  }, [data.length, pageSize])

  // Visible columns
  const visibleColumns = React.useMemo(
    () => columns.filter((col) => !hiddenColumns.has(col.id)),
    [columns, hiddenColumns]
  )

  // Handle sort
  const handleSort = (columnId: string, direction: SortDirection) => {
    if (direction === null) {
      setSorting(null)
    } else {
      setSorting({ id: columnId, desc: direction === "desc" })
    }
    setPageIndex(0) // Reset to first page on sort
  }

  // Get sort direction for a column
  const getSortDirection = (columnId: string): SortDirection => {
    if (sorting?.id !== columnId) return null
    return sorting.desc ? "desc" : "asc"
  }

  // Handle column visibility
  const handleHideColumn = (columnId: string) => {
    setHiddenColumns((prev) => new Set([...prev, columnId]))
  }

  // Handle row selection
  const handleSelectRow = (rowId: string | number, checked: boolean) => {
    const newSelectedRows = new Set(selectedRows)
    if (checked) {
      newSelectedRows.add(rowId)
    } else {
      newSelectedRows.delete(rowId)
    }
    setSelectedRows(newSelectedRows)
  }

  // Handle select all
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = paginatedData.map((row) => row.id)
      setSelectedRows(new Set(allIds))
    } else {
      setSelectedRows(new Set())
    }
  }

  // Check if all visible rows are selected
  const allSelected = paginatedData.length > 0 && paginatedData.every((row) => selectedRows.has(row.id))
  const someSelected = paginatedData.some((row) => selectedRows.has(row.id)) && !allSelected

  // Alignment class
  const getAlignmentClass = (align?: "left" | "center" | "right") => {
    switch (align) {
      case "center":
        return "text-center"
      case "right":
        return "text-right"
      default:
        return "text-left"
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, rowIndex: number) => {
    const rowElements = document.querySelectorAll('[data-slot="data-table-row"]')

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault()
        if (rowIndex < rowElements.length - 1) {
          (rowElements[rowIndex + 1] as HTMLElement)?.focus()
        }
        break
      case "ArrowUp":
        event.preventDefault()
        if (rowIndex > 0) {
          (rowElements[rowIndex - 1] as HTMLElement)?.focus()
        }
        break
      case " ":
      case "Enter":
        if (selectable) {
          event.preventDefault()
          const row = paginatedData[rowIndex]
          handleSelectRow(row.id, !selectedRows.has(row.id))
        }
        break
    }
  }

  return (
    <div
      data-slot="data-table"
      className={cn("w-full space-y-4", className)}
      {...props}
    >
      {/* Column visibility controls */}
      {showColumnVisibility && hiddenColumns.size > 0 && (
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground">Hidden columns:</span>
          {Array.from(hiddenColumns).map((columnId) => {
            const column = columns.find((c) => c.id === columnId)
            return (
              <button
                key={columnId}
                onClick={() => {
                  setHiddenColumns((prev) => {
                    const next = new Set(prev)
                    next.delete(columnId)
                    return next
                  })
                }}
                className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-1 text-xs hover:bg-muted/80"
              >
                {column?.header ?? columnId}
                <span className="sr-only">Show column</span>
              </button>
            )
          })}
        </div>
      )}

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          {caption && (
            <caption className="sr-only">{caption}</caption>
          )}
          <TableHeader>
            <TableRow>
              {selectable && (
                <TableHead className="w-[50px]">
                  <Checkbox
                    checked={allSelected ? true : someSelected ? "indeterminate" : false}
                    onCheckedChange={(checked) => handleSelectAll(checked === true)}
                    aria-label="Select all rows"
                  />
                </TableHead>
              )}
              {visibleColumns.map((column) => (
                <TableHead
                  key={column.id}
                  className={cn(
                    getAlignmentClass(column.align),
                    column.headerClassName
                  )}
                >
                  {column.sortable ? (
                    <DataTableColumnHeader
                      title={column.header}
                      sortable={column.sortable}
                      sortDirection={getSortDirection(column.id)}
                      onSort={(direction) => handleSort(column.id, direction)}
                      hideable={column.hideable && showColumnVisibility}
                      onHide={() => handleHideColumn(column.id)}
                    />
                  ) : (
                    column.header
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={visibleColumns.length + (selectable ? 1 : 0)}
                  className="h-24 text-center"
                >
                  <div className="flex items-center justify-center">
                    <div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  </div>
                </TableCell>
              </TableRow>
            ) : paginatedData.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={visibleColumns.length + (selectable ? 1 : 0)}
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((row, rowIndex) => (
                <TableRow
                  key={row.id}
                  data-slot="data-table-row"
                  data-state={selectedRows.has(row.id) ? "selected" : undefined}
                  tabIndex={0}
                  onKeyDown={(e) => handleKeyDown(e, rowIndex)}
                  className="focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                >
                  {selectable && (
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.has(row.id)}
                        onCheckedChange={(checked) =>
                          handleSelectRow(row.id, checked === true)
                        }
                        aria-label={`Select row ${row.id}`}
                      />
                    </TableCell>
                  )}
                  {visibleColumns.map((column) => {
                    const value = getCellValue(row, column)
                    return (
                      <TableCell
                        key={column.id}
                        className={cn(
                          getAlignmentClass(column.align),
                          column.cellClassName
                        )}
                      >
                        {column.cell
                          ? column.cell(value, row, rowIndex)
                          : value != null
                            ? String(value)
                            : null}
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {paginated && (
        <DataTablePagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalItems={sortedData.length}
          selectedCount={selectedRows.size}
          pageSizeOptions={pageSizeOptions}
          onPageChange={setPageIndex}
          onPageSizeChange={setPageSize}
          showSelectedCount={selectable}
        />
      )}
    </div>
  )
}

export { DataTable }
