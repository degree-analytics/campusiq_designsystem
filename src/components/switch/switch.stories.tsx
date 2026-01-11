import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Switch } from './switch'
import { Label } from '@/components/label/label'

const meta: Meta<typeof Switch> = {
  title: 'Components/Form/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Switch

The Switch component provides a toggle control for binary on/off settings. It offers immediate visual feedback and is commonly used for settings that take effect instantly.

Within CampusIQ, switches are used for enabling/disabling notifications, toggling features, activating/deactivating alerts, and any setting with immediate effect.

### When to Use

- When toggling a single setting on or off
- When the change takes effect immediately without form submission
- When the on/off states are clearly understood
- When used in settings panels or configuration interfaces

### When NOT to Use

- When the setting requires form submission to apply (use Checkbox)
- When selecting from multiple options (use RadioGroup or Select)
- When multiple items can be selected (use Checkbox group)
- When the binary choice isn't intuitive as on/off

### States

- **Off**: Default unchecked state, thumb on left
- **On**: Checked state, thumb on right with accent color
- **Disabled Off**: Non-interactive unchecked state
- **Disabled On**: Non-interactive checked state
- **Focused**: Keyboard focus with visible ring

### Layout Patterns

- **Inline with label**: Switch next to label for simple settings
- **With description**: Switch with label and helper text for context
- **Settings list**: Multiple switches in a structured list layout

### Content Guidelines

- Labels should clearly describe what the switch controls
- Use active voice for labels (e.g., "Enable notifications" not "Notifications enabled")
- Keep labels concise but descriptive
- Consider adding description text for complex settings

### Accessibility

- **Keyboard**: Space or Enter to toggle, Tab to navigate
- **Screen readers**: Announce label and on/off state
- **Labeling**: Always associate with a Label using htmlFor/id
- **Focus indicator**: Visible focus ring for keyboard navigation
- **State announcement**: State change is announced to assistive technology
        `,
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Controlled checked state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the switch and prevents interaction',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state for uncontrolled usage',
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
  parameters: {
    docs: {
      description: {
        story: 'Switches should always be paired with a Label for accessibility.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: 'Add description text to provide additional context for the setting.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: 'Common pattern for settings pages with multiple toggle options.',
      },
    },
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="grid gap-4">
      <div className="flex items-center space-x-2">
        <Switch id="state-off" />
        <Label htmlFor="state-off">Off</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="state-on" defaultChecked />
        <Label htmlFor="state-on">On</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="state-disabled-off" disabled />
        <Label htmlFor="state-disabled-off" className="opacity-50">Disabled Off</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="state-disabled-on" disabled defaultChecked />
        <Label htmlFor="state-disabled-on" className="opacity-50">Disabled On</Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All switch states for visual QA: off, on, disabled off, and disabled on.',
      },
    },
  },
}

/**
 * Interactive switch with controlled state demonstrating proper usage with React state management.
 */
export const Interactive: Story = {
  render: function InteractiveSwitch() {
    const [enabled, setEnabled] = React.useState(false)

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="interactive-switch"
            checked={enabled}
            onCheckedChange={setEnabled}
          />
          <Label htmlFor="interactive-switch">
            Enable dark mode
          </Label>
        </div>
        <p className="text-sm text-muted-foreground">
          Dark mode is {enabled ? 'enabled' : 'disabled'}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive switch with controlled state. Toggle to see the state update in real-time.',
      },
    },
  },
}

/**
 * Interactive settings panel with multiple controlled switches.
 */
export const InteractiveSettingsPanel: Story = {
  render: function InteractiveSettingsPanel() {
    const [settings, setSettings] = React.useState({
      marketing: false,
      security: true,
      updates: true,
    })

    const updateSetting = (key: keyof typeof settings) => {
      setSettings((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    return (
      <div className="w-[320px] space-y-4">
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="interactive-marketing">Marketing emails</Label>
            <p className="text-muted-foreground text-sm">
              Receive emails about new products.
            </p>
          </div>
          <Switch
            id="interactive-marketing"
            checked={settings.marketing}
            onCheckedChange={() => updateSetting('marketing')}
          />
        </div>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="interactive-security">Security emails</Label>
            <p className="text-muted-foreground text-sm">
              Receive security alerts.
            </p>
          </div>
          <Switch
            id="interactive-security"
            checked={settings.security}
            onCheckedChange={() => updateSetting('security')}
          />
        </div>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="interactive-updates">Product updates</Label>
            <p className="text-muted-foreground text-sm">
              Receive product update emails.
            </p>
          </div>
          <Switch
            id="interactive-updates"
            checked={settings.updates}
            onCheckedChange={() => updateSetting('updates')}
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Enabled: {Object.entries(settings).filter(([, v]) => v).map(([k]) => k).join(', ') || 'none'}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive settings panel with multiple controlled switches demonstrating real-world usage.',
      },
    },
  },
}
