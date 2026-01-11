import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'
import { Label } from '@/components/label/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'

const meta: Meta<typeof Sheet> = {
  title: 'Components/Overlay/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Sheet

Extends the Dialog component to display content that complements the main content of the screen. Built on Radix UI Dialog primitive.

### When to Use
- Side panels for editing content
- Navigation drawers on desktop
- Settings or configuration panels
- Detail views that slide in from the side
- Quick actions without leaving context
- Mobile-friendly off-canvas menus

### When NOT to Use
- For simple confirmations (use AlertDialog)
- For brief messages (use Toast or Alert)
- When content should be modal-blocking (consider Dialog)
- For content that needs to persist across navigation

### Accessibility
- Manages focus when opened and closed
- Traps focus within the sheet
- Closes on Escape key press
- Provides proper ARIA attributes
- Includes close button for keyboard users
- Screen reader announces sheet opening

### Positions
- **right** (default): Slides in from right edge
- **left**: Slides in from left edge
- **top**: Slides down from top
- **bottom**: Slides up from bottom
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
type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you are done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="sheet-name" className="text-right">
              Name
            </Label>
            <Input id="sheet-name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="sheet-username" className="text-right">
              Username
            </Label>
            <Input id="sheet-username" defaultValue="@johndoe" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const FromLeft: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open from Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>
            Browse through different sections of the app.
          </SheetDescription>
        </SheetHeader>
        <nav className="grid gap-2 py-4">
          <a href="#" className="rounded-lg p-3 hover:bg-accent">Dashboard</a>
          <a href="#" className="rounded-lg p-3 hover:bg-accent">Courses</a>
          <a href="#" className="rounded-lg p-3 hover:bg-accent">Students</a>
          <a href="#" className="rounded-lg p-3 hover:bg-accent">Reports</a>
          <a href="#" className="rounded-lg p-3 hover:bg-accent">Settings</a>
        </nav>
      </SheetContent>
    </Sheet>
  ),
}

export const FromTop: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open from Top</Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-auto">
        <SheetHeader>
          <SheetTitle>Announcement</SheetTitle>
          <SheetDescription>
            Important system notification
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Scheduled maintenance will occur on Sunday, January 15th from 2:00 AM to 4:00 AM EST.
            Some services may be temporarily unavailable during this time.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Dismiss</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const FromBottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open from Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-auto">
        <SheetHeader>
          <SheetTitle>Cookie Preferences</SheetTitle>
          <SheetDescription>
            Manage your cookie settings here.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Essential Cookies</p>
              <p className="text-xs text-muted-foreground">Required for the site to function</p>
            </div>
            <span className="text-sm text-muted-foreground">Always on</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Analytics Cookies</p>
              <p className="text-xs text-muted-foreground">Help us improve the site</p>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button>Save preferences</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const AllSides: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Right</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Side</SheetTitle>
            <SheetDescription>This sheet slides in from the right.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Side</SheetTitle>
            <SheetDescription>This sheet slides in from the left.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Top</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Side</SheetTitle>
            <SheetDescription>This sheet slides in from the top.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Side</SheetTitle>
            <SheetDescription>This sheet slides in from the bottom.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Create New User</Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Create User</SheetTitle>
          <SheetDescription>
            Add a new user to your organization. All fields are required.
          </SheetDescription>
        </SheetHeader>
        <form className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" placeholder="John" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" placeholder="Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <select
              id="role"
              className="h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-ring"
            >
              <option value="student">Student</option>
              <option value="instructor">Instructor</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
        </form>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button type="submit">Create User</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const ControlledState: Story = {
  render: function ControlledSheet() {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(true)}>
            Open Sheet
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close Sheet
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Sheet is currently: <strong>{open ? 'Open' : 'Closed'}</strong>
        </p>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Controlled Sheet</SheetTitle>
              <SheetDescription>
                This sheet is controlled by external state. Use the buttons
                or the close button to toggle.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                You can programmatically control this sheet from external
                components, making it useful for complex workflows.
              </p>
            </div>
            <SheetFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    )
  },
}

export const NestedActions: Story = {
  render: function NestedActionsSheet() {
    const [open, setOpen] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState<string | null>(null)

    const items = [
      { id: '1', name: 'Project Alpha', status: 'Active' },
      { id: '2', name: 'Project Beta', status: 'Pending' },
      { id: '3', name: 'Project Gamma', status: 'Complete' },
    ]

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>View Projects</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Projects</SheetTitle>
            <SheetDescription>
              Select a project to view details.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4 space-y-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item.id)}
                className={`w-full flex items-center justify-between rounded-lg border p-3 text-left hover:bg-accent ${
                  selectedItem === item.id ? 'border-primary bg-accent' : ''
                }`}
              >
                <span className="font-medium">{item.name}</span>
                <span className="text-sm text-muted-foreground">{item.status}</span>
              </button>
            ))}
          </div>
          {selectedItem && (
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="text-sm font-medium">Selected Project</p>
              <p className="text-sm text-muted-foreground">
                {items.find((i) => i.id === selectedItem)?.name}
              </p>
            </div>
          )}
          <SheetFooter className="mt-4">
            <Button
              variant="outline"
              onClick={() => {
                setSelectedItem(null)
                setOpen(false)
              }}
            >
              Cancel
            </Button>
            <Button
              disabled={!selectedItem}
              onClick={() => {
                setOpen(false)
              }}
            >
              Open Project
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
}
