import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './label'
import { Input } from '@/components/input/input'
import { Checkbox } from '@/components/checkbox/checkbox'

const meta: Meta<typeof Label> = {
  title: 'Components/Form/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Label

The Label component provides accessible text labels for form controls. It is essential for associating descriptive text with inputs, checkboxes, and other form elements.

Within CampusIQ, labels are used throughout all form interfaces to provide clear, accessible identification for input fields, checkboxes, radio buttons, and other interactive controls.

### When to Use

- When any form control needs an accessible label
- When describing the purpose of an input field
- When indicating required fields or optional badges
- When providing context for checkbox or radio options

### When NOT to Use

- For decorative text that doesn't label a control
- For button text (use Button component)
- For section headings (use heading elements)
- For helper text (use FormDescription or plain text)

### Label Association

Labels must be properly associated with their controls:
- Use \`htmlFor\` on Label matching the control's \`id\`
- Or wrap the control inside the Label element

### Styling Patterns

- **Required fields**: Add \`<span className="text-destructive">*</span>\`
- **Optional fields**: Add \`(optional)\` text in muted style
- **Disabled state**: Apply \`opacity-50\` or use peer selector

### Content Guidelines

- Keep labels concise but descriptive
- Use sentence case for labels
- Avoid ending with colons (unless required by design system)
- Place labels consistently (above inputs, beside checkboxes)

### Accessibility

- **Association**: Always use htmlFor/id pairing for controls
- **Screen readers**: Labels are announced when focusing controls
- **Visibility**: Labels should be visible, not hidden (avoid placeholder-only labels)
- **Touch targets**: Clicking labels focuses associated controls
- **Peer styling**: Use CSS peer selectors for disabled state styling
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The text content of the label',
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    children: 'Label',
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Standard label-input pairing with htmlFor/id association.',
      },
    },
  },
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label positioned after checkbox with proper association.',
      },
    },
  },
}

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="required-email">
        Email <span className="text-destructive">*</span>
      </Label>
      <Input type="email" id="required-email" placeholder="Email" required />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Required field indicator using destructive color asterisk.',
      },
    },
  },
}

export const WithDescription: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="username" />
      <p className="text-muted-foreground text-sm">
        This is your public display name.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label with helper text below the input for additional context.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="disabled-input" className="peer-disabled:opacity-50">
        Disabled
      </Label>
      <Input id="disabled-input" placeholder="Disabled" disabled className="peer" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Label styling responds to disabled input state using CSS peer selectors.',
      },
    },
  },
}

export const WithOptionalBadge: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="optional-field">
        Phone Number{' '}
        <span className="text-muted-foreground text-xs font-normal">(optional)</span>
      </Label>
      <Input type="tel" id="optional-field" placeholder="+1 (555) 000-0000" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Optional field indicator using muted text styling.',
      },
    },
  },
}

export const MultipleLabels: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="first-name">First Name</Label>
        <Input id="first-name" placeholder="John" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="last-name">Last Name</Label>
        <Input id="last-name" placeholder="Doe" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="label-email">Email</Label>
        <Input type="email" id="label-email" placeholder="john@example.com" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple labeled fields in a form layout.',
      },
    },
  },
}
