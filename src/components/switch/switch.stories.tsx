import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './switch'
import { Label } from '@/components/label/label'

const meta: Meta<typeof Switch> = {
  title: 'Components/Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    defaultChecked: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {},
}

export const On: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Off: Story = {
  args: {
    defaultChecked: false,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledOn: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
}

export const WithLabelOn: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode-on" defaultChecked />
      <Label htmlFor="airplane-mode-on">Airplane Mode</Label>
    </div>
  ),
}

export const WithLabelDisabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode-disabled" disabled />
      <Label htmlFor="airplane-mode-disabled" className="opacity-50">
        Airplane Mode
      </Label>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex items-start space-x-2">
      <Switch id="notifications" className="mt-0.5" />
      <div className="grid gap-1">
        <Label htmlFor="notifications">Push Notifications</Label>
        <p className="text-muted-foreground text-sm">
          Receive push notifications for new messages and updates.
        </p>
      </div>
    </div>
  ),
}

export const SettingsList: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="marketing">Marketing emails</Label>
          <p className="text-muted-foreground text-sm">
            Receive emails about new products and features.
          </p>
        </div>
        <Switch id="marketing" />
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="security">Security emails</Label>
          <p className="text-muted-foreground text-sm">
            Receive emails about your account security.
          </p>
        </div>
        <Switch id="security" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="updates" className="opacity-50">
            Product updates
          </Label>
          <p className="text-muted-foreground text-sm opacity-50">
            Receive emails about product updates.
          </p>
        </div>
        <Switch id="updates" disabled />
      </div>
    </div>
  ),
}
