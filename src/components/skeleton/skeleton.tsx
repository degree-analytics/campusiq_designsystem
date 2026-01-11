import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn(
        "bg-muted animate-pulse rounded-md motion-reduce:animate-none motion-reduce:bg-muted/70",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
