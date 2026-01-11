import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { RadioGroup, RadioGroupItem } from './radio-group'
import { Label } from '@/components/label/label'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## RadioGroup

The RadioGroup component provides a set of mutually exclusive options where only one can be selected at a time. It presents all options visibly, making it ideal when comparison between choices is important.

Within CampusIQ, radio groups are used for notification preferences, view mode selections, data display options, and any scenario requiring a single choice from a small set of visible options.

### When to Use

- When users must select exactly one option from a set
- When there are 2-5 options that benefit from being visible
- When users need to compare options before selecting
- When the default choice should be clearly indicated

### When NOT to Use

- When users can select multiple options (use Checkbox group)
- When there are more than 5-7 options (use Select for space efficiency)
- When toggling a single binary setting (use Switch)
- When options are dynamically generated or very long (use Select)

### Layout Options

- **Vertical (default)**: Standard stacked layout for forms
- **Horizontal**: Side-by-side layout for compact spaces using flex

### States

- **Unselected**: Default state, no option chosen
- **Selected**: One option is active with filled indicator
- **Focused**: Keyboard focus with visible ring
- **Disabled**: Non-interactive, visually muted (can apply to group or individual items)
- **Invalid**: Error state with red styling

### Content Guidelines

- Always include a group label or legend for context
- Keep option labels concise and scannable
- Consider adding descriptions for complex options
- Place the most common or recommended option first

### Accessibility

- **Keyboard navigation**: Arrow keys move selection, Tab moves to next control
- **Screen readers**: Announce group label, option label, and selection state
- **Grouping**: Use fieldset/legend semantics for screen reader context
- **Invalid state**: Uses aria-invalid for error communication
- **Focus indicator**: Visible focus ring on active option
        `,
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the entire radio group',
    },
    defaultValue: {
      control: 'text',
      description: 'Initial selected value for uncontrolled usage',
    },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use defaultValue to pre-select an option.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-one" />
        <Label htmlFor="disabled-one" className="opacity-50">
          Option One
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-two" />
        <Label htmlFor="disabled-two" className="opacity-50">
          Option Two
        </Label>
      </div>
    </RadioGroup>
  ),
}

export const SingleItemDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="single-one" />
        <Label htmlFor="single-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="single-two" disabled />
        <Label htmlFor="single-two" className="opacity-50">
          Option Two (Disabled)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="single-three" />
        <Label htmlFor="single-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual radio items can be disabled while keeping others interactive.',
      },
    },
  },
}

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" className="flex gap-6">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="h-one" />
        <Label htmlFor="h-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="h-two" />
        <Label htmlFor="h-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="h-three" />
        <Label htmlFor="h-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use flex layout for horizontal arrangement in compact spaces.',
      },
    },
  },
}

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="all">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="all" id="all" className="mt-1" />
        <div className="grid gap-1">
          <Label htmlFor="all">All new messages</Label>
          <p className="text-muted-foreground text-sm">
            Get notified when you receive any new message.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="mentions" id="mentions" className="mt-1" />
        <div className="grid gap-1">
          <Label htmlFor="mentions">Direct messages and mentions</Label>
          <p className="text-muted-foreground text-sm">
            Only get notified for direct messages and @mentions.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="none" id="none" className="mt-1" />
        <div className="grid gap-1">
          <Label htmlFor="none">Nothing</Label>
          <p className="text-muted-foreground text-sm">
            Turn off all notifications.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add descriptions to help users understand complex options.',
      },
    },
  },
}

export const Invalid: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="invalid-one" aria-invalid />
        <Label htmlFor="invalid-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="invalid-two" aria-invalid />
        <Label htmlFor="invalid-two">Option Two</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Invalid state is indicated with aria-invalid for form validation.',
      },
    },
  },
}

/**
 * Interactive radio group with controlled state.
 */
export const Interactive: Story = {
  render: function InteractiveRadioGroup() {
    const [value, setValue] = React.useState('comfortable')

    return (
      <div className="space-y-4">
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="int-r1" />
            <Label htmlFor="int-r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="int-r2" />
            <Label htmlFor="int-r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="int-r3" />
            <Label htmlFor="int-r3">Compact</Label>
          </div>
        </RadioGroup>
        <p className="text-sm text-muted-foreground">
          Selected: {value}
        </p>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive radio group with controlled state. Click options to see the selection update.',
      },
    },
  },
}

/**
 * Interactive notification preferences demonstrating real-world usage.
 */
export const InteractiveNotificationPreferences: Story = {
  render: function InteractiveNotificationPreferences() {
    const [preference, setPreference] = React.useState('all')

    const preferenceDescriptions: Record<string, string> = {
      all: 'You will receive notifications for all new messages.',
      mentions: 'You will only receive notifications for direct messages and @mentions.',
      none: 'You will not receive any notifications.',
    }

    return (
      <div className="w-[320px] space-y-4">
        <div className="space-y-1">
          <h4 className="text-sm font-medium">Notification Preferences</h4>
          <p className="text-sm text-muted-foreground">
            Choose how you want to be notified.
          </p>
        </div>
        <RadioGroup value={preference} onValueChange={setPreference}>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="all" id="pref-all" className="mt-1" />
            <div className="grid gap-1">
              <Label htmlFor="pref-all">All new messages</Label>
              <p className="text-muted-foreground text-sm">
                Get notified for every new message.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="mentions" id="pref-mentions" className="mt-1" />
            <div className="grid gap-1">
              <Label htmlFor="pref-mentions">Direct messages and mentions</Label>
              <p className="text-muted-foreground text-sm">
                Only get notified for DMs and @mentions.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="none" id="pref-none" className="mt-1" />
            <div className="grid gap-1">
              <Label htmlFor="pref-none">Nothing</Label>
              <p className="text-muted-foreground text-sm">
                Turn off all notifications.
              </p>
            </div>
          </div>
        </RadioGroup>
        <div className="rounded-md bg-muted p-3">
          <p className="text-sm">{preferenceDescriptions[preference]}</p>
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive notification preferences showing real-world usage with controlled state and dynamic feedback.',
      },
    },
  },
}
