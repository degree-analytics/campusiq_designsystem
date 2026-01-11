import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'
import { Label } from '@/components/label/label'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

const meta: Meta<typeof Popover> = {
  title: 'Components/Overlay/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Popover

Displays rich content in a portal, triggered by a button. Built on Radix UI Popover primitive.

### When to Use
- Displaying additional options or settings
- Filter and sort controls
- Color pickers and date pickers
- User profile quick menus
- Form inputs that need more space
- Any interactive content that should appear on demand

### When NOT to Use
- For simple text hints (use Tooltip instead)
- For non-interactive preview content (use HoverCard)
- For confirmations or alerts (use AlertDialog)
- When content should persist (use Sheet or Dialog)

### Accessibility
- Focuses first focusable element when opened
- Traps focus within the popover
- Closes on Escape key press
- Proper ARIA attributes for trigger and content
- Returns focus to trigger on close
- Supports keyboard navigation

### Positioning
- Automatically positions to avoid viewport edges
- Supports alignment: start, center, end
- Configurable offset from trigger
- Collision detection with viewport boundaries
        `,
      },
    },
  },
  argTypes: {
    defaultOpen: {
      control: 'boolean',
      description: 'The default open state when uncontrolled',
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const AlignStart: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Align Start</Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64">
        <p className="text-sm">
          This popover is aligned to the start of the trigger element.
        </p>
      </PopoverContent>
    </Popover>
  ),
}

export const AlignEnd: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Align End</Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-64">
        <p className="text-sm">
          This popover is aligned to the end of the trigger element.
        </p>
      </PopoverContent>
    </Popover>
  ),
}

export const WithSideOffset: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">With Offset</Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={12} className="w-64">
        <p className="text-sm">
          This popover has a larger offset from the trigger element (12px).
        </p>
      </PopoverContent>
    </Popover>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="h-10 w-10 rounded-full p-0">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-primary-foreground">
            JD
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              JD
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
          <div className="border-t pt-4">
            <nav className="grid gap-1">
              <a href="#" className="block rounded p-2 text-sm hover:bg-accent">
                Profile Settings
              </a>
              <a href="#" className="block rounded p-2 text-sm hover:bg-accent">
                Notifications
              </a>
              <a href="#" className="block rounded p-2 text-sm text-destructive hover:bg-accent">
                Sign Out
              </a>
            </nav>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const ColorPicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-32 justify-start gap-2">
          <div className="h-4 w-4 rounded bg-blue-500" />
          <span>Blue</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto">
        <div className="grid grid-cols-5 gap-2">
          {[
            'bg-red-500',
            'bg-orange-500',
            'bg-yellow-500',
            'bg-green-500',
            'bg-blue-500',
            'bg-indigo-500',
            'bg-purple-500',
            'bg-pink-500',
            'bg-gray-500',
            'bg-black',
          ].map((color) => (
            <button
              key={color}
              className={`h-8 w-8 rounded-md ${color} ring-offset-background hover:ring-2 hover:ring-ring hover:ring-offset-2`}
            />
          ))}
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const FilterOptions: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <span>Filter</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <h4 className="font-medium leading-none">Filters</h4>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="active" className="h-4 w-4 rounded border-gray-300" />
              <Label htmlFor="active">Show active only</Label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="completed" className="h-4 w-4 rounded border-gray-300" />
              <Label htmlFor="completed">Show completed</Label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="archived" className="h-4 w-4 rounded border-gray-300" />
              <Label htmlFor="archived">Show archived</Label>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" size="sm">Reset</Button>
            <Button size="sm">Apply</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const OpenByDefault: Story = {
  render: () => (
    <Popover defaultOpen>
      <PopoverTrigger asChild>
        <Button variant="outline">Open by Default</Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <p className="text-sm">
          This popover opens automatically when the component mounts.
        </p>
      </PopoverContent>
    </Popover>
  ),
}
