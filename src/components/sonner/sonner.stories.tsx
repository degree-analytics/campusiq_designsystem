import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'
import { Button } from '@/components/button/button'
import { Toaster } from './sonner'

const meta: Meta<typeof Toaster> = {
  title: 'Components/Feedback/Toast',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast('Event has been created')}
    >
      Show Toast
    </Button>
  ),
}

export const Success: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.success('Changes saved successfully')}
    >
      Show Success Toast
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.error('Something went wrong')}
    >
      Show Error Toast
    </Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.warning('Please review before continuing')}
    >
      Show Warning Toast
    </Button>
  ),
}

export const Info: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.info('New update available')}
    >
      Show Info Toast
    </Button>
  ),
}

export const Loading: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        const toastId = toast.loading('Uploading file...')
        setTimeout(() => {
          toast.success('Upload complete!', { id: toastId })
        }, 2000)
      }}
    >
      Show Loading Toast
    </Button>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Event Created', {
          description: 'Your event "Team Meeting" has been scheduled for Monday at 10 AM.',
        })
      }
    >
      Toast with Description
    </Button>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('File deleted', {
          description: 'The file has been moved to trash.',
          action: {
            label: 'Undo',
            onClick: () => toast.success('File restored'),
          },
        })
      }
    >
      Toast with Action
    </Button>
  ),
}

export const WithCancel: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Sending email...', {
          cancel: {
            label: 'Cancel',
            onClick: () => toast.error('Email cancelled'),
          },
        })
      }
    >
      Toast with Cancel
    </Button>
  ),
}

export const Promise: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        const myPromise = new Promise<{ name: string }>((resolve) =>
          setTimeout(() => resolve({ name: 'Report.pdf' }), 2000)
        )
        toast.promise(myPromise, {
          loading: 'Generating report...',
          success: (data) => `${data.name} has been generated!`,
          error: 'Failed to generate report',
        })
      }}
    >
      Promise Toast
    </Button>
  ),
}

export const CustomDuration: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('This toast lasts 10 seconds', {
          duration: 10000,
        })
      }
    >
      Long Duration Toast
    </Button>
  ),
}

export const Persistent: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('This toast will not auto-dismiss', {
          duration: Infinity,
          action: {
            label: 'Dismiss',
            onClick: () => {},
          },
        })
      }
    >
      Persistent Toast
    </Button>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast('Default notification')}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success('Success!')}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error('Error occurred')}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning('Warning!')}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info('Information')}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.loading('Loading...')}>
        Loading
      </Button>
    </div>
  ),
}

export const RichContent: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast(
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium">Payment successful</p>
              <p className="text-xs text-muted-foreground">
                Your order #12345 has been confirmed.
              </p>
            </div>
          </div>
        )
      }
    >
      Rich Content Toast
    </Button>
  ),
}
