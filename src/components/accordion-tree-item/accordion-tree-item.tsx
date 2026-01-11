import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronRight, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const accordionTreeItemVariants = cva(
  "group flex w-full flex-col text-sm transition-all border-b border-border",
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
    "flex w-full items-center gap-1.5 rounded-md py-2.5 text-left text-sm font-medium",
    "text-foreground transition-colors outline-none cursor-pointer",
    "hover:bg-accent/10",
    "focus-visible:ring-[3px] focus-visible:ring-ring/40 focus-visible:bg-accent/10",
    "disabled:pointer-events-none disabled:opacity-60 disabled:cursor-not-allowed",
  ].join(" "),
  {
    variants: {
      state: {
        Default: "",
        Hover: "bg-accent/10",
        Focus: "ring-[3px] ring-ring/40 bg-accent/10",
        Disabled: "opacity-60 pointer-events-none cursor-not-allowed",
      },
      active: {
        true: "px-2",
        false: "px-1",
      },
    },
    defaultVariants: {
      state: "Default",
      active: false,
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
        className={cn(triggerVariants({ state, active }))}
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
        <div className="flex flex-col gap-1.5 pl-6 pr-2 pb-4 pt-1">
          {contentText && (
            <p className="text-sm text-foreground">{contentText}</p>
          )}
          {hasSlot && children && (
            <div className="mt-1">{children}</div>
          )}
        </div>
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  )
}

export { AccordionTreeItem, accordionTreeItemVariants, triggerVariants }
