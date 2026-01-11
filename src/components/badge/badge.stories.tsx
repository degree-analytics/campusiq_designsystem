import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Data Display/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Badge

Displays a badge or a component that looks like a badge. Used to highlight status, categories, or counts.

### When to Use
- Indicating status (active, pending, error, success)
- Showing counts or notifications
- Labeling categories or tags
- Highlighting new or featured content
- Version numbers or release tags
- User roles or permissions

### When NOT to Use
- For primary actions (use Button instead)
- For large amounts of text (use Card or Alert)
- When the information is not supplementary
- For interactive elements that require user action

### Accessibility
- Use appropriate color contrast ratios
- Do not rely solely on color to convey meaning
- Include descriptive text for screen readers
- Consider using aria-label for icon-only badges
- Ensure badges are not the only way to access information

### Variants
- **default**: Primary emphasis, solid background
- **secondary**: Lower emphasis, muted colors
- **destructive**: Error or danger states
- **outline**: Minimal emphasis, border only
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The visual style of the badge',
    },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: () => <Badge>Badge</Badge>,
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const Secondary: Story = {
  render: () => <Badge variant="secondary">Secondary</Badge>,
}

export const Destructive: Story = {
  render: () => <Badge variant="destructive">Destructive</Badge>,
}

export const Outline: Story = {
  render: () => <Badge variant="outline">Outline</Badge>,
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
        Premium
      </Badge>
      <Badge variant="secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        Verified
      </Badge>
      <Badge variant="destructive">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        Error
      </Badge>
      <Badge variant="outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        Info
      </Badge>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
      <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
      <Badge className="bg-blue-500 hover:bg-blue-600">In Progress</Badge>
      <Badge variant="destructive">Inactive</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  ),
}

export const AsLink: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge asChild>
        <a href="#">Clickable Badge</a>
      </Badge>
      <Badge variant="secondary" asChild>
        <a href="#">Secondary Link</a>
      </Badge>
      <Badge variant="outline" asChild>
        <a href="#">Outline Link</a>
      </Badge>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="font-medium">Feature Status</span>
        <Badge>New</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium">Build Status</span>
        <Badge variant="secondary">Passing</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium">Security Alert</span>
        <Badge variant="destructive">Critical</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="font-medium">Version</span>
        <Badge variant="outline">v2.0.0</Badge>
      </div>
    </div>
  ),
}
