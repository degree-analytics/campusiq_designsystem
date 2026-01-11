import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Button } from '@/components/button/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog'

const meta: Meta<typeof AlertDialog> = {
  title: 'Components/Feedback/AlertDialog',
  component: AlertDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Alert Dialog

A modal dialog that interrupts the user with important content and expects a response. Alert dialogs are used for critical confirmations that require explicit user action.

### When to Use
- For destructive actions that cannot be undone (delete, remove permanently)
- When user confirmation is required before proceeding with an action
- For critical decisions that may have significant consequences
- To interrupt workflows that require immediate attention

### When NOT to Use
- For non-critical information (use Alert or Toast instead)
- For simple confirmations that do not have significant consequences
- When the user can easily undo the action
- For forms or complex data entry (use Dialog instead)

### Accessibility
- Focus is trapped within the dialog when open
- Pressing Escape closes the dialog (if allowed by configuration)
- Screen readers announce the dialog title and description
- Action buttons are clearly labeled with their intent
- Implements WAI-ARIA dialog pattern with proper roles
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const DeleteConfirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete your account? All of your data will
            be permanently removed. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">
            Yes, delete my account
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const SaveChanges: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Save Changes</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Save Changes?</AlertDialogTitle>
          <AlertDialogDescription>
            You have unsaved changes. Would you like to save them before
            leaving?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Discard</AlertDialogCancel>
          <AlertDialogAction>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const LogoutConfirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">Log Out</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Log out of your account?</AlertDialogTitle>
          <AlertDialogDescription>
            You will be signed out of your account on this device. You can sign
            back in at any time.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Stay signed in</AlertDialogCancel>
          <AlertDialogAction>Log out</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const OpenByDefault: Story = {
  render: () => (
    <AlertDialog defaultOpen>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Welcome!</AlertDialogTitle>
          <AlertDialogDescription>
            This dialog opens automatically when the component mounts.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Got it</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}

export const ControlledState: Story = {
  render: function ControlledAlertDialog() {
    const [open, setOpen] = React.useState(false)
    const [action, setAction] = React.useState<string | null>(null)

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setOpen(true)}>
            Open Alert Dialog
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Close Alert Dialog
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Dialog is currently: <strong>{open ? 'Open' : 'Closed'}</strong>
        </p>
        {action && (
          <p className="text-sm text-muted-foreground">
            Last action: <strong>{action}</strong>
          </p>
        )}
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Controlled Alert Dialog</AlertDialogTitle>
              <AlertDialogDescription>
                This alert dialog is controlled by external state. Clicking the
                action buttons will update the state and close the dialog.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setAction('Cancelled')}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => setAction('Confirmed')}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    )
  },
}

export const AsyncConfirmation: Story = {
  render: function AsyncConfirmationDialog() {
    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [deleted, setDeleted] = React.useState(false)

    const handleDelete = async () => {
      setLoading(true)
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setLoading(false)
      setDeleted(true)
      setOpen(false)
    }

    return (
      <div className="flex flex-col items-center gap-4">
        {deleted ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-green-800">
            <p className="text-sm font-medium">Item deleted successfully!</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-2"
              onClick={() => setDeleted(false)}
            >
              Reset Demo
            </Button>
          </div>
        ) : (
          <AlertDialog open={open} onOpenChange={setOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Item</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  item from the database.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
                <Button
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={loading}
                >
                  {loading ? 'Deleting...' : 'Delete'}
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    )
  },
}
