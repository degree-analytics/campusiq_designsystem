import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from './separator'

const meta: Meta = {
  title: 'Components/Layout/Separator',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <h4 className="font-medium">Section One</h4>
        <p className="text-sm text-muted-foreground">
          Some content for the first section.
        </p>
      </div>
      <Separator />
      <div>
        <h4 className="font-medium">Section Two</h4>
        <p className="text-sm text-muted-foreground">
          Some content for the second section.
        </p>
      </div>
      <Separator />
      <div>
        <h4 className="font-medium">Section Three</h4>
        <p className="text-sm text-muted-foreground">
          Some content for the third section.
        </p>
      </div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-10 items-center space-x-4">
      <span className="text-sm font-medium">Home</span>
      <Separator orientation="vertical" />
      <span className="text-sm font-medium">Products</span>
      <Separator orientation="vertical" />
      <span className="text-sm font-medium">About</span>
      <Separator orientation="vertical" />
      <span className="text-sm font-medium">Contact</span>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="w-[350px] rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">Order Summary</h4>
        <span className="text-sm text-muted-foreground">#12345</span>
      </div>
      <Separator className="my-4" />
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Product A</span>
          <span>$29.99</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Product B</span>
          <span>$49.99</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>Product C</span>
          <span>$19.99</span>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>$99.97</span>
      </div>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-background px-2 text-xs text-muted-foreground uppercase">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 rounded border px-4 py-2 text-sm">
          Google
        </button>
        <button className="flex-1 rounded border px-4 py-2 text-sm">
          GitHub
        </button>
      </div>
    </div>
  ),
}

export const FormSections: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <div>
        <h3 className="text-lg font-medium">Personal Information</h3>
        <p className="text-sm text-muted-foreground">
          Update your personal details here.
        </p>
      </div>
      <Separator />
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded border px-3 py-2 text-sm"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-medium">Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Customize your experience.
        </p>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">Email notifications</p>
          <p className="text-xs text-muted-foreground">
            Receive emails about your activity
          </p>
        </div>
        <input type="checkbox" />
      </div>
    </div>
  ),
}
