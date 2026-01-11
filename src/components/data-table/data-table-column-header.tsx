import * as React from "react"
import { ArrowDownIcon, ArrowUpIcon, ArrowUpDownIcon, EyeOffIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu"

export type SortDirection = "asc" | "desc" | null

interface DataTableColumnHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  sortable?: boolean
  sortDirection?: SortDirection
  onSort?: (direction: SortDirection) => void
  hideable?: boolean
  onHide?: () => void
}

function DataTableColumnHeader({
  className,
  title,
  sortable = false,
  sortDirection,
  onSort,
  hideable = false,
  onHide,
  ...props
}: DataTableColumnHeaderProps) {
  if (!sortable && !hideable) {
    return (
      <div className={cn("flex items-center space-x-2", className)} {...props}>
        <span>{title}</span>
      </div>
    )
  }

  const handleSort = (direction: SortDirection) => {
    onSort?.(direction)
  }

  // Simple sortable header without dropdown (keyboard accessible)
  if (sortable && !hideable) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className={cn("-ml-3 h-8 data-[state=open]:bg-accent", className)}
        onClick={() => {
          if (sortDirection === null) {
            handleSort("asc")
          } else if (sortDirection === "asc") {
            handleSort("desc")
          } else {
            handleSort(null)
          }
        }}
        aria-label={`Sort by ${title}${sortDirection === "asc" ? ", ascending" : sortDirection === "desc" ? ", descending" : ""}`}
        data-slot="data-table-column-header"
      >
        <span>{title}</span>
        {sortDirection === "desc" ? (
          <ArrowDownIcon className="ml-2 size-4" />
        ) : sortDirection === "asc" ? (
          <ArrowUpIcon className="ml-2 size-4" />
        ) : (
          <ArrowUpDownIcon className="ml-2 size-4" />
        )}
      </Button>
    )
  }

  // Full dropdown for sortable + hideable columns
  return (
    <div className={cn("flex items-center space-x-2", className)} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
            data-slot="data-table-column-header"
          >
            <span>{title}</span>
            {sortDirection === "desc" ? (
              <ArrowDownIcon className="ml-2 size-4" />
            ) : sortDirection === "asc" ? (
              <ArrowUpIcon className="ml-2 size-4" />
            ) : (
              <ArrowUpDownIcon className="ml-2 size-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => handleSort("asc")}>
            <ArrowUpIcon className="mr-2 size-3.5 text-muted-foreground/70" />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSort("desc")}>
            <ArrowDownIcon className="mr-2 size-3.5 text-muted-foreground/70" />
            Desc
          </DropdownMenuItem>
          {sortDirection !== null && (
            <DropdownMenuItem onClick={() => handleSort(null)}>
              <ArrowUpDownIcon className="mr-2 size-3.5 text-muted-foreground/70" />
              Clear
            </DropdownMenuItem>
          )}
          {hideable && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onHide}>
                <EyeOffIcon className="mr-2 size-3.5 text-muted-foreground/70" />
                Hide
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export { DataTableColumnHeader }
