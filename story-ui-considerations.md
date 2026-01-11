# CampusIQ Design System - Story UI AI Considerations

This file provides guidance for AI when generating Storybook stories. The component library is comprehensive and MUST be used for all generated stories.

## CRITICAL RULES

1. **ALWAYS use components from the CampusIQ component library** - Never generate raw HTML or inline styles
2. **ALWAYS use Tailwind CSS classes** - Never use inline `style={{}}` objects
3. **ALWAYS import from `@/components/[component-name]/[component-name]`** - This is the standard import pattern
4. **NEVER generate custom HTML elements when a component exists** - Use the design system components below

## Component Library Overview

**Library Name**: CampusIQ Component Library
**Import Path Pattern**: `@/components/[component-name]/[component-name]`
**Framework**: React 19 + TypeScript 5.9
**Styling**: Tailwind CSS v4 with CSS custom properties
**UI Primitives**: Radix UI for accessibility
**Variant Management**: Class Variance Authority (CVA)

---

## Available Components (MUST USE THESE)

### Feedback & Alerts

#### Alert
**Import**: `import { Alert, AlertTitle, AlertDescription } from '@/components/alert/alert'`
**Variants**: `default` | `destructive` | `success` | `informational` | `warning`
**Usage**: Dismissible notifications, status messages, feedback
```tsx
<Alert variant="success">
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>
```

#### Badge
**Import**: `import { Badge } from '@/components/badge/badge'`
**Variants**: `default` | `secondary` | `destructive` | `outline`
**Usage**: Status indicators, tags, labels

#### Progress
**Import**: `import { Progress } from '@/components/progress/progress'`
**Props**: `value` (0-100)

#### Skeleton
**Import**: `import { Skeleton } from '@/components/skeleton/skeleton'`
**Usage**: Loading placeholders

#### Sonner (Toast)
**Import**: `import { Toaster } from '@/components/sonner/sonner'`
**Usage**: Toast notifications

---

### Buttons & Actions

#### Button
**Import**: `import { Button } from '@/components/button/button'`
**Variants**: `default` | `destructive` | `outline` | `secondary` | `ghost` | `link`
**Sizes**: `default` | `sm` | `lg` | `icon` | `icon-sm` | `icon-lg`
```tsx
<Button variant="destructive" size="sm">Delete</Button>
```

#### Toggle
**Import**: `import { Toggle } from '@/components/toggle/toggle'`
**Variants**: `default` | `outline`

#### Toggle Group
**Import**: `import { ToggleGroup, ToggleGroupItem } from '@/components/toggle-group/toggle-group'`

---

### Cards & Containers

#### Card
**Import**: `import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from '@/components/card/card'`
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
    <CardAction><Button variant="ghost" size="icon"><MoreVertical /></Button></CardAction>
  </CardHeader>
  <CardContent>Main content here</CardContent>
  <CardFooter>Footer content</CardFooter>
</Card>
```

#### Accordion
**Import**: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/accordion/accordion'`

#### Collapsible
**Import**: `import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/collapsible/collapsible'`

#### Tabs
**Import**: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/tabs/tabs'`

---

### Form Components

#### Input
**Import**: `import { Input } from '@/components/input/input'`
**Props**: All standard input props

#### Textarea
**Import**: `import { Textarea } from '@/components/textarea/textarea'`

#### Label
**Import**: `import { Label } from '@/components/label/label'`

#### Checkbox
**Import**: `import { Checkbox } from '@/components/checkbox/checkbox'`

#### Switch
**Import**: `import { Switch } from '@/components/switch/switch'`

#### Radio Group
**Import**: `import { RadioGroup, RadioGroupItem } from '@/components/radio-group/radio-group'`

#### Select
**Import**: `import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectSeparator } from '@/components/select/select'`
```tsx
<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

#### Slider
**Import**: `import { Slider } from '@/components/slider/slider'`

#### Form (with React Hook Form)
**Import**: `import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/form/form'`

#### Input OTP
**Import**: `import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from '@/components/input-otp/input-otp'`

#### Date Picker
**Import**: `import { DatePicker } from '@/components/date-picker/date-picker'`

#### Combobox / Command
**Import**: `import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from '@/components/command/command'`

---

### Dialogs & Overlays

#### Dialog
**Import**: `import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/dialog/dialog'`

#### Alert Dialog
**Import**: `import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel } from '@/components/alert-dialog/alert-dialog'`

#### Sheet
**Import**: `import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@/components/sheet/sheet'`

#### Drawer
**Import**: `import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from '@/components/drawer/drawer'`

#### Popover
**Import**: `import { Popover, PopoverTrigger, PopoverContent } from '@/components/popover/popover'`

#### Hover Card
**Import**: `import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/hover-card/hover-card'`

#### Tooltip
**Import**: `import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/tooltip/tooltip'`

---

### Navigation

#### Navigation Menu
**Import**: `import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/navigation-menu/navigation-menu'`

#### Breadcrumb
**Import**: `import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/breadcrumb/breadcrumb'`

#### Pagination
**Import**: `import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from '@/components/pagination/pagination'`

#### Menubar
**Import**: `import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut } from '@/components/menubar/menubar'`

#### Dropdown Menu
**Import**: `import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuGroup } from '@/components/dropdown-menu/dropdown-menu'`

#### Context Menu
**Import**: `import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator } from '@/components/context-menu/context-menu'`

#### Sidebar
**Import**: `import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/sidebar/sidebar'`

---

### Data Display

#### Table
**Import**: `import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from '@/components/table/table'`

#### Data Table
**Import**: `import { DataTable } from '@/components/data-table/data-table'`
**Usage**: Advanced table with sorting, filtering, pagination

#### Avatar
**Import**: `import { Avatar, AvatarImage, AvatarFallback } from '@/components/avatar/avatar'`

#### Calendar
**Import**: `import { Calendar } from '@/components/calendar/calendar'`

#### Carousel
**Import**: `import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/carousel/carousel'`

#### Chart
**Import**: `import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/chart/chart'`

---

### Layout & Utilities

#### Separator
**Import**: `import { Separator } from '@/components/separator/separator'`
**Props**: `orientation="horizontal" | "vertical"`

#### Scroll Area
**Import**: `import { ScrollArea, ScrollBar } from '@/components/scroll-area/scroll-area'`

#### Aspect Ratio
**Import**: `import { AspectRatio } from '@/components/aspect-ratio/aspect-ratio'`

#### Resizable
**Import**: `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/resizable/resizable'`

---

## Icons

Icons are available from `lucide-react`:
```tsx
import { CheckCircle, AlertTriangle, XCircle, Info, X, MoreVertical, ChevronDown } from 'lucide-react';
```

---

## Semantic Color System

Use semantic variants for meaningful user feedback:

| Context | Recommended Variant | Use Case |
|---------|---------------------|----------|
| Primary actions | `default` | Main CTA buttons |
| Secondary actions | `secondary` | Alternative actions |
| Dangerous actions | `destructive` | Delete, remove, cancel |
| Success states | `success` | Confirmations, completed |
| Warning states | `warning` | Caution, attention needed |
| Informational | `informational` | Tips, info, neutral alerts |

---

## Layout Patterns (Use Tailwind Classes)

```tsx
// Grid layouts
<div className="grid grid-cols-2 gap-4">...</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">...</div>

// Flex layouts
<div className="flex items-center gap-4">...</div>
<div className="flex flex-col gap-4">...</div>

// Spacing
<div className="space-y-4">...</div>
<div className="p-4">...</div>
```

---

## Story Structure Template

```tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ComponentName } from '@/components/component-name/component-name';

const meta = {
  title: 'Generated/DescriptiveTitle',
  component: ComponentName,
  parameters: {
    layout: 'centered', // or 'padded' for larger layouts
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Props here
  },
};
```

---

## PROHIBITED (NEVER DO)

- Inline styles (`style={{}}`)
- Raw HTML divs when a component exists
- Custom CSS classes not from Tailwind
- Bootstrap, Bulma, or other CSS frameworks
- Using `class` instead of `className`
- Creating custom button/card/alert implementations
- Hardcoded colors instead of semantic variants
