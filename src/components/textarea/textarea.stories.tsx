import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from './textarea'
import { Label } from '@/components/label/label'

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Textarea

The Textarea component provides a multi-line text input field for longer-form content entry. It supports resizing and various states for handling extended text input scenarios.

Within CampusIQ, textareas are used for description fields, notes, comments, detailed configuration explanations, and any content requiring multiple lines of text.

### When to Use

- When collecting multi-line text content (descriptions, notes, comments)
- When users need to provide detailed explanations or feedback
- When the expected input exceeds a single line of text
- When formatting or line breaks are meaningful to the content

### When NOT to Use

- When collecting single-line data (use Input instead)
- When users need rich text formatting (use a rich text editor)
- When selecting from predefined options (use Select or RadioGroup)
- When the content has a strict single-line format like email or URL

### Sizing

The Textarea can be configured with:
- **rows**: Set the visible number of text rows
- **resize**: CSS resize property controls user resizing (default allows vertical resize)

### States

- **Default**: Ready for input with subtle border
- **Focused**: Active input state with focus ring
- **Disabled**: Non-interactive, visually muted
- **Invalid**: Error state with red border and ring

### Content Guidelines

- Always pair textareas with visible labels for context
- Use placeholder text sparingly; prefer helper text for format guidance
- Consider character limits and display remaining count if applicable
- Provide clear validation feedback for required or format errors

### Accessibility

- **Labeling**: Always associate a Label component with htmlFor/id pairing
- **Keyboard**: Full keyboard support including Tab navigation
- **Screen readers**: Announce label, placeholder, character count, and error states
- **Invalid state**: Uses aria-invalid for assistive technology communication
- **Resize**: Ensure resize handle is accessible and keyboard-operable
        `,
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea and prevents interaction',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when empty',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
    },
  },
}

export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Textareas should always be paired with a Label for accessibility.',
      },
    },
  },
}

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Enter a detailed description...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
}

export const DisabledWithValue: Story = {
  args: {
    disabled: true,
    defaultValue: 'This textarea is disabled and has a value.',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'This is some default text that appears in the textarea.',
  },
}

export const Invalid: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Invalid content',
  },
  parameters: {
    docs: {
      description: {
        story: 'Invalid state is indicated with aria-invalid and styled with a red border.',
      },
    },
  },
}

export const WithRows: Story = {
  args: {
    rows: 6,
    placeholder: 'This textarea has 6 rows',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the rows prop to control the initial visible height.',
      },
    },
  },
}

export const WithLabelAndDescription: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us a little bit about yourself" />
      <p className="text-muted-foreground text-sm">
        You can @mention other users and organizations.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Add helper text below the textarea to provide additional context or formatting guidance.',
      },
    },
  },
}
