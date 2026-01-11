import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/button/button'
import { Input } from '@/components/input/input'
import { Label } from '@/components/label/label'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Feedback/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Dialog

A window overlaid on the primary content, rendering content in a layer above the page. Dialogs are used for tasks that require user interaction without leaving the current context.

### When to Use
- For forms and data entry that require focused attention
- To display detailed information or previews
- For multi-step workflows within a single context
- When content needs to be displayed without navigating away

### When NOT to Use
- For simple confirmations (use Alert Dialog instead)
- For transient notifications (use Toast instead)
- For content that should remain accessible while browsing (use Sheet or Drawer)
- When the dialog content is the primary focus of the page

### Accessibility
- Focus is automatically moved to the dialog when opened
- Focus is trapped within the dialog while open
- Pressing Escape closes the dialog
- Screen readers announce the dialog title
- Close button includes accessible label for screen readers
- Implements WAI-ARIA dialog pattern
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@johndoe" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read and accept our terms of service.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            By using our service, you agree to our terms and conditions.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Decline</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Accept</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const SimpleConfirmation: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Subscribe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe to Newsletter</DialogTitle>
          <DialogDescription>
            Enter your email to receive updates about our products.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Subscribe</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const LargeContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Privacy Policy</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            Last updated: January 2024
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <section>
            <h4 className="font-semibold mb-2">1. Information We Collect</h4>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </section>
          <section>
            <h4 className="font-semibold mb-2">2. How We Use Your Information</h4>
            <p className="text-sm text-muted-foreground">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit.
            </p>
          </section>
          <section>
            <h4 className="font-semibold mb-2">3. Data Security</h4>
            <p className="text-sm text-muted-foreground">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>
          </section>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>I Understand</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const OpenByDefault: Story = {
  render: () => (
    <Dialog defaultOpen>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome Back!</DialogTitle>
          <DialogDescription>
            This dialog opens automatically to greet you.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Continue</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const ControlledState: Story = {
  render: function ControlledDialog() {
    const [open, setOpen] = React.useState(false)

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(true)}>
            Open Dialog
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close Dialog
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Dialog is currently: <strong>{open ? 'Open' : 'Closed'}</strong>
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Controlled Dialog</DialogTitle>
              <DialogDescription>
                This dialog is controlled by external state. Use the buttons above
                or the close button to toggle.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    )
  },
}

export const WithFormValidation: Story = {
  render: function FormValidationDialog() {
    const [open, setOpen] = React.useState(false)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [error, setError] = React.useState('')

    const handleSubmit = () => {
      if (!name.trim()) {
        setError('Name is required')
        return
      }
      if (!email.trim() || !email.includes('@')) {
        setError('Valid email is required')
        return
      }
      setError('')
      setOpen(false)
      setName('')
      setEmail('')
    }

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Open Form Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Account</DialogTitle>
            <DialogDescription>
              Fill in your details to create a new account.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="form-name">Name</Label>
              <Input
                id="form-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="form-email">Email</Label>
              <Input
                id="form-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
              />
            </div>
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Create Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  },
}
