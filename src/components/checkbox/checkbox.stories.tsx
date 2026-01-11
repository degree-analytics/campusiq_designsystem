import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './checkbox'
import { Label } from '@/components/label/label'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Checkbox

The Checkbox component provides a control that allows users to select one or more options from a set, or to toggle a single option on or off.

Within CampusIQ, checkboxes are used for multi-select filters, accepting terms and conditions, enabling/disabling features, and selecting multiple items from lists.

### When to Use

- When users can select multiple options from a list
- When a single option can be toggled on or off independently
- When accepting terms, conditions, or agreements
- When enabling or disabling features in settings

### When NOT to Use

- When only one option can be selected from a list (use RadioGroup)
- When toggling a setting with immediate effect (use Switch)
- When selecting from a large number of options (use Select with multi-select)
- When the choice is binary with clear on/off semantics (consider Switch)

### States

- **Unchecked**: Default state, option not selected
- **Checked**: Option is selected, shows checkmark
- **Indeterminate**: Partial selection (for parent/child relationships)
- **Disabled**: Non-interactive, visually muted
- **Focused**: Keyboard focus with visible ring
- **Invalid**: Error state with red styling

### Content Guidelines

- Always pair checkboxes with visible labels
- Keep labels concise and action-oriented
- For groups, use a fieldset with legend for context
- Place related checkboxes in logical groups

### Accessibility

- **Labeling**: Always associate a Label with htmlFor/id pairing
- **Keyboard**: Space to toggle, Tab to navigate between checkboxes
- **Screen readers**: Announce label and checked state
- **Grouping**: Use fieldset and legend for related checkbox groups
- **Invalid state**: Uses aria-invalid for error communication
- **Focus indicator**: Visible focus ring for keyboard navigation
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
      description: 'Disables the checkbox and prevents interaction',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Initial checked state for uncontrolled usage',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {},
}

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
}

export const Unchecked: Story = {
  args: {
    defaultChecked: false,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes should always be paired with a Label for accessibility.',
      },
    },
  },
}

export const WithLabelChecked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-checked" defaultChecked />
      <Label htmlFor="terms-checked">Accept terms and conditions</Label>
    </div>
  ),
}

export const WithLabelDisabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms-disabled" disabled />
      <Label htmlFor="terms-disabled" className="opacity-50">
        Accept terms and conditions
      </Label>
    </div>
  ),
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Invalid state is indicated with aria-invalid for form validation.',
      },
    },
  },
}

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="grid gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="option-1" />
        <Label htmlFor="option-1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option-2" defaultChecked />
        <Label htmlFor="option-2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="option-3" />
        <Label htmlFor="option-3">Option 3</Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple checkboxes allow users to select multiple options from a set.',
      },
    },
  },
}

export const WithDescription: Story = {
  render: () => (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms-desc" />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor="terms-desc">Accept terms and conditions</Label>
        <p className="text-muted-foreground text-sm">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add description text to provide additional context for the checkbox option.',
      },
    },
  },
}
