import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'
import { Label } from '@/components/label/label'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './drawer'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Overlay/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Drawer

A panel that slides in from the edge of the screen. Built on Vaul for smooth, gesture-driven interactions.

### When to Use
- Mobile-friendly navigation menus
- Quick actions that do not require a full page
- Shopping cart overlays
- Filter panels for search results
- Form inputs that appear on demand
- Secondary content that supports the main view

### When NOT to Use
- For critical information that must be seen (use inline content)
- Complex multi-step workflows (use full pages or wizards)
- When a modal dialog is more appropriate
- Desktop-first interfaces where Sheet is preferred

### Accessibility
- Focuses the first focusable element when opened
- Traps focus within the drawer when open
- Closes on Escape key press
- Provides proper ARIA dialog role
- Supports touch gestures for closing
- Respects reduced motion preferences

### Directions
- **bottom** (default): Slides up from bottom, ideal for mobile
- **top**: Slides down from top
- **left**: Slides in from left side
- **right**: Slides in from right side
        `,
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'The direction the drawer slides in from',
    },
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you are done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="drawer-name">Name</Label>
              <Input id="drawer-name" defaultValue="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="drawer-email">Email</Label>
              <Input id="drawer-email" type="email" defaultValue="john@example.com" />
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const FromTop: Story = {
  render: () => (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <Button variant="outline">Open from Top</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>
            You have 3 new notifications.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <div className="space-y-2">
            <div className="rounded-lg border p-3">
              <p className="text-sm font-medium">New message from John</p>
              <p className="text-xs text-muted-foreground">2 minutes ago</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-sm font-medium">Your order has shipped</p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-sm font-medium">Welcome to CampusIQ!</p>
              <p className="text-xs text-muted-foreground">Yesterday</p>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Dismiss all</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const FromLeft: Story = {
  render: () => (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button variant="outline">Open from Left</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Navigation</DrawerTitle>
          <DrawerDescription>
            Browse through different sections.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <nav className="space-y-2">
            <a href="#" className="block rounded-lg p-3 hover:bg-accent">
              Dashboard
            </a>
            <a href="#" className="block rounded-lg p-3 hover:bg-accent">
              Courses
            </a>
            <a href="#" className="block rounded-lg p-3 hover:bg-accent">
              Students
            </a>
            <a href="#" className="block rounded-lg p-3 hover:bg-accent">
              Settings
            </a>
          </nav>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const FromRight: Story = {
  render: () => (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline">Open from Right</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
          <DrawerDescription>
            You have 2 items in your cart.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 flex-1">
          <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-lg border p-3">
              <div className="h-12 w-12 rounded bg-muted" />
              <div className="flex-1">
                <p className="text-sm font-medium">Product Name</p>
                <p className="text-xs text-muted-foreground">$29.99</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border p-3">
              <div className="h-12 w-12 rounded bg-muted" />
              <div className="flex-1">
                <p className="text-sm font-medium">Another Product</p>
                <p className="text-xs text-muted-foreground">$49.99</p>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Checkout ($79.98)</Button>
          <DrawerClose asChild>
            <Button variant="outline">Continue Shopping</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Add New Task</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create New Task</DrawerTitle>
          <DrawerDescription>
            Add a new task to your to-do list.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="task-title">Task Title</Label>
              <Input id="task-title" placeholder="Enter task title..." />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="task-description">Description</Label>
              <textarea
                id="task-description"
                className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Add details..."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="task-due">Due Date</Label>
              <Input id="task-due" type="date" />
            </div>
          </form>
        </div>
        <DrawerFooter>
          <Button type="submit">Create Task</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
}

export const ControlledState: Story = {
  render: function ControlledDrawer() {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(true)}>
            Open Drawer
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close Drawer
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Drawer is currently: <strong>{open ? 'Open' : 'Closed'}</strong>
        </p>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Controlled Drawer</DrawerTitle>
              <DrawerDescription>
                This drawer is controlled by external state. Use the buttons
                or swipe gestures to toggle.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                You can programmatically control this drawer from external
                components, making it useful for complex mobile workflows.
              </p>
            </div>
            <DrawerFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    )
  },
}

export const SnapPoints: Story = {
  render: function SnapPointsDrawer() {
    const [open, setOpen] = React.useState(false)
    const [snap, setSnap] = React.useState<number | string | null>(0.5)

    return (
      <Drawer
        open={open}
        onOpenChange={setOpen}
        snapPoints={[0.25, 0.5, 1]}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
      >
        <DrawerTrigger asChild>
          <Button variant="outline">Open with Snap Points</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Snap Points</DrawerTitle>
            <DrawerDescription>
              This drawer snaps to different heights. Try dragging it.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <div className="flex gap-2 mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSnap(0.25)}
              >
                25%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSnap(0.5)}
              >
                50%
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSnap(1)}
              >
                100%
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Current snap point: {typeof snap === 'number' ? `${snap * 100}%` : snap}
            </p>
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border p-3">
                <p className="text-sm font-medium">Recent Activity</p>
                <p className="text-xs text-muted-foreground">Your latest updates will appear here</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-sm font-medium">Quick Actions</p>
                <p className="text-xs text-muted-foreground">Common tasks you can perform</p>
              </div>
              <div className="rounded-lg border p-3">
                <p className="text-sm font-medium">Settings</p>
                <p className="text-xs text-muted-foreground">Customize your experience</p>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Done</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  },
}
