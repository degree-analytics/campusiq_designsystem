import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './input'
import { Label } from '@/components/label/label'

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Input

The Input component provides a single-line text field for user data entry. It supports various input types and states to handle different data formats and validation scenarios.

Within CampusIQ, inputs are used for search fields, form data entry, configuration settings, threshold values, and filtering interfaces.

### When to Use

- When collecting short-form text data (names, emails, numbers, search queries)
- When users need to enter specific values like thresholds, capacities, or identifiers
- When filtering or searching through data sets
- When configuring settings that require text or numeric input

### When NOT to Use

- When collecting multi-line text content (use Textarea instead)
- When users need to select from predefined options (use Select or RadioGroup)
- When toggling between two states (use Switch or Checkbox)
- When entering sensitive one-time codes (use InputOTP)

### Input Types

| Type | Use Case |
|------|----------|
| **text** | General text input (default) |
| **email** | Email addresses with built-in validation |
| **password** | Masked password entry |
| **number** | Numeric values with increment/decrement |
| **search** | Search queries with clear affordance |
| **tel** | Phone numbers |
| **url** | Web addresses |
| **file** | File upload selector |

### States

- **Default**: Ready for input
- **Focused**: Active input state with focus ring
- **Disabled**: Non-interactive, visually muted
- **Invalid**: Error state with red border and ring

### Content Guidelines

- Always pair inputs with visible labels for context
- Use placeholder text to show expected format, not as a label replacement
- Provide helper text for complex input requirements
- Show validation errors clearly with descriptive messages

### Accessibility

- **Labeling**: Always associate a Label component with htmlFor/id pairing
- **Keyboard**: Full keyboard support for navigation and input
- **Screen readers**: Announce label, placeholder, and error states
- **Invalid state**: Uses aria-invalid for assistive technology communication
- **Required fields**: Mark with required attribute and visual indicator
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url', 'file'],
      description: 'The type of input field',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input and prevents interaction',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when empty',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Inputs should always be paired with a Label for accessibility.',
      },
    },
  },
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter your email address',
    type: 'email',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
}

export const DisabledWithValue: Story = {
  args: {
    disabled: true,
    defaultValue: 'Disabled with value',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
}

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
}

export const File: Story = {
  args: {
    type: 'file',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'Default value',
  },
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Invalid input',
  },
  parameters: {
    docs: {
      description: {
        story: 'Invalid state is indicated with aria-invalid and styled with a red border.',
      },
    },
  },
}

export const AllTypes: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="text">Text</Label>
        <Input type="text" id="text" placeholder="Text input" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email-type">Email</Label>
        <Input type="email" id="email-type" placeholder="email@example.com" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="password-type">Password</Label>
        <Input type="password" id="password-type" placeholder="Password" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="number-type">Number</Label>
        <Input type="number" id="number-type" placeholder="0" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="file-type">File</Label>
        <Input type="file" id="file-type" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Various input types demonstrating different data entry scenarios.',
      },
    },
  },
}
