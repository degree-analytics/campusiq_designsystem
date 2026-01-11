import type { Meta, StoryObj } from '@storybook/react'
import { Mail, Loader2, ChevronRight, Plus, Download, Check, ExternalLink } from 'lucide-react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'Components/Form/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Button

The Button component provides interactive controls that trigger actions, submit forms, or navigate users through the platform, using visual hierarchy and semantic styling to communicate importance and intent.

Within CampusIQ, buttons enable users to execute operations such as saving configurations, exporting reports, applying filters, confirming decisions, and navigating between views.

### When to Use

- When users need to trigger an action such as saving zone configurations, exporting utilization reports, or applying dashboard filters
- When submitting forms for settings changes, threshold adjustments, or data entry workflows
- When confirming or canceling operations in dialogs and modal interactions
- When providing navigation actions that feel more actionable than standard links, such as "View Report" or "Explore Building"

### When NOT to Use

- When the action is purely navigational within text content—use Link component or inline text links instead
- When displaying status or metadata—use Badge component for non-interactive labeling
- When the action is toggling a binary state—use Switch or Toggle component instead
- When providing options in a menu—use DropdownMenu with MenuItem components instead

### Variants

| Variant | Use Case |
|---------|----------|
| **Default** | Primary actions (Save, Submit, Confirm) |
| **Secondary** | Secondary actions alongside primary buttons |
| **Destructive** | Dangerous actions (Delete, Remove, Cancel subscription) |
| **Success** | Positive confirmations (Approved, Complete, Saved successfully) |
| **Warning** | Caution actions (Proceed with care, Approaching limit) |
| **Informational** | Neutral information actions (Learn more, View details) |
| **Outline** | Less prominent actions, often paired with default buttons |
| **Ghost** | Tertiary actions, toolbar buttons, icon-only actions |
| **Link** | Navigation that looks like a text link but has button behavior |

### Sizes

| Size | Use Case |
|------|----------|
| **default** | Standard buttons in forms and dialogs |
| **sm** | Compact UI, table actions, dense layouts |
| **lg** | Hero sections, prominent CTAs |
| **icon** | Icon-only buttons (36x36px) |
| **icon-sm** | Small icon-only buttons (32x32px) |
| **icon-lg** | Large icon-only buttons (40x40px) |

### Content Guidelines

- Button text should use action verbs: "Save", "Export", "Apply", "Delete", "View"
- Keep labels concise (1–3 words) for clarity in dense interfaces
- Use icons to reinforce meaning, especially for common actions (download, add, edit, delete)
- Consider whether destructive actions warrant a confirmation dialog before execution

### Accessibility

- **Keyboard interaction**: Tab to focus; Enter or Space to activate; Disabled buttons should not receive focus
- **Focus management**: Focus ring visible in Focus state; focus should remain predictable after activation
- **Screen reader**: Should announce button label and state (disabled, loading)
- **Loading state**: Should prevent double-submission and announce progress to assistive technology
- **Icon-only buttons**: Must have accessible labels via aria-label or visually hidden text
- **Destructive buttons**: Should be clearly identified as such through labeling, not just color
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'success', 'warning', 'informational', 'outline', 'ghost', 'link'],
      description: 'Visual style variant that communicates the button\'s importance and intent',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: 'Button size for different UI contexts',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button and prevents interaction',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child element (useful for custom link components)',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

export const Informational: Story = {
  args: {
    variant: 'informational',
    children: 'Informational',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    children: <Mail className="size-4" />,
  },
}

export const IconSmall: Story = {
  args: {
    size: 'icon-sm',
    children: <Mail className="size-4" />,
  },
}

export const IconLarge: Story = {
  args: {
    size: 'icon-lg',
    children: <Mail className="size-4" />,
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="size-4" />
        Login with Email
      </>
    ),
  },
}

export const WithIconRight: Story = {
  args: {
    children: (
      <>
        Next
        <ChevronRight className="size-4" />
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="size-4 animate-spin" />
        Please wait
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="informational">Informational</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon-sm">
        <Mail className="size-4" />
      </Button>
      <Button size="icon">
        <Mail className="size-4" />
      </Button>
      <Button size="icon-lg">
        <Mail className="size-4" />
      </Button>
    </div>
  ),
}

// CampusIQ-specific examples based on Figma documentation

/**
 * Export Report button with download icon - common action in CampusIQ dashboards
 */
export const ExportReport: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Export action with download icon, commonly used for utilization reports and data exports.',
      },
    },
  },
  args: {
    children: (
      <>
        <Download className="size-4" />
        Export Report
      </>
    ),
  },
}

/**
 * Add Zone button with plus icon - used for adding new zones to buildings
 */
export const AddZone: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Add action with plus icon, used for creating new zones, buildings, or configurations.',
      },
    },
  },
  args: {
    children: (
      <>
        <Plus className="size-4" />
        Add Zone
      </>
    ),
  },
}

/**
 * Save Changes button with check icon - primary action for form submissions
 */
export const SaveChanges: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Save action with check icon, used for confirming form submissions and configuration changes.',
      },
    },
  },
  args: {
    children: (
      <>
        <Check className="size-4" />
        Save Changes
      </>
    ),
  },
}

/**
 * View Report navigation with arrow - links to detailed reports
 */
export const ViewReport: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Navigation action with trailing arrow, used for viewing detailed reports or exploring data.',
      },
    },
  },
  args: {
    children: (
      <>
        View Report
        <ChevronRight className="size-4" />
      </>
    ),
  },
}

/**
 * Learn More with external link icon - opens external documentation
 */
export const LearnMore: Story = {
  parameters: {
    docs: {
      description: {
        story: 'External link action, opens documentation or help resources in a new tab.',
      },
    },
  },
  args: {
    variant: 'link',
    children: (
      <>
        Learn More
        <ExternalLink className="size-4" />
      </>
    ),
  },
}

/**
 * Delete action requiring confirmation - destructive variant
 */
export const DeleteZone: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Destructive action that should be paired with a confirmation dialog before execution.',
      },
    },
  },
  args: {
    variant: 'destructive',
    children: 'Delete Zone',
  },
}

/**
 * Button pair showing primary and secondary actions together
 */
export const ActionPair: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Common pattern: primary action (Save) paired with secondary action (Cancel) in forms and dialogs.',
      },
    },
  },
  render: () => (
    <div className="flex gap-3">
      <Button variant="outline">Cancel</Button>
      <Button>Save Changes</Button>
    </div>
  ),
}

/**
 * Icon-only button with aria-label for accessibility
 */
export const IconWithAriaLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons must have aria-label for screen reader accessibility.',
      },
    },
  },
  args: {
    size: 'icon',
    'aria-label': 'Download report',
    children: <Download className="size-4" />,
  },
}
