import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronRight, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const accordionTreeItemVariants = cva(
  "group flex w-full flex-col rounded-md text-sm transition-all",
  {
    variants: {
      state: {
        Default: "",
        Hover: "",
        Focus: "",
        Disabled: "opacity-60 pointer-events-none",
      },
    },
    defaultVariants: {
      state: "Default",
    },
  }
)

const triggerVariants = cva(
  [
    "flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm font-medium",
    "text-foreground transition-colors outline-none",
    "hover:bg-accent",
    "focus-visible:ring-[3px] focus-visible:ring-ring/40",
    "disabled:pointer-events-none disabled:opacity-60",
  ].join(" "),
  {
    variants: {
      state: {
        Default: "",
        Hover: "bg-accent",
        Focus: "ring-[3px] ring-ring/40",
        Disabled: "opacity-60 pointer-events-none",
      },
    },
    defaultVariants: {
      state: "Default",
    },
  }
)

export interface AccordionTreeItemProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>,
      "open" | "onOpenChange"
    >,
    VariantProps<typeof accordionTreeItemVariants> {
  /** Optional React node for leading icon */
  icon?: React.ReactNode
  /** Label text for the tree node trigger */
  triggerText: string
  /** Description text displayed when expanded */
  contentText?: string
  /** Whether to show the leading icon (default: true) */
  leadingIcon?: boolean
  /** Whether to include a content slot area for custom content */
  hasSlot?: boolean
  /** Expanded/collapsed state */
  active?: boolean
  /** Callback when the active state changes */
  onActiveChange?: (active: boolean) => void
  /** Visual state of the component */
  state?: "Default" | "Hover" | "Focus" | "Disabled"
  /** Custom content to render in the slot area */
  children?: React.ReactNode
}

function AccordionTreeItem({
  className,
  icon,
  triggerText,
  contentText,
  leadingIcon = true,
  hasSlot = false,
  active = false,
  onActiveChange,
  state = "Default",
  children,
  ...props
}: AccordionTreeItemProps) {
  const isDisabled = state === "Disabled"
  const ChevronIcon = active ? ChevronDown : ChevronRight

  return (
    <CollapsiblePrimitive.Root
      data-slot="accordion-tree-item"
      open={active}
      onOpenChange={onActiveChange}
      disabled={isDisabled}
      className={cn(accordionTreeItemVariants({ state, className }))}
      {...props}
    >
      <CollapsiblePrimitive.Trigger
        data-slot="accordion-tree-item-trigger"
        className={cn(triggerVariants({ state }))}
        disabled={isDisabled}
      >
        <ChevronIcon
          className="size-4 shrink-0 text-muted-foreground transition-transform duration-200"
          aria-hidden="true"
        />
        {leadingIcon && icon && (
          <span className="flex size-4 shrink-0 items-center justify-center text-muted-foreground">
            {icon}
          </span>
        )}
        <span className="flex-1 truncate">{triggerText}</span>
      </CollapsiblePrimitive.Trigger>

      <CollapsiblePrimitive.Content
        data-slot="accordion-tree-item-content"
        className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      >
        <div className="pl-8 pr-2 pb-2">
          {contentText && (
            <p className="text-sm text-muted-foreground">{contentText}</p>
          )}
          {hasSlot && children && (
            <div className="mt-2">{children}</div>
          )}
        </div>
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  )
}

export { AccordionTreeItem, accordionTreeItemVariants, triggerVariants }
