import type { Meta, StoryObj } from '@storybook/react'
import { AlertCircle, Terminal, CheckCircle2, Info as InfoIcon, AlertTriangle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from './alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Alert

Displays a callout for user attention with contextual feedback messages. Alerts are used to communicate important information, warnings, errors, or success states to users.

### When to Use
- To display important information that requires user attention
- To communicate success, warning, error, or informational states
- For non-blocking notifications that remain visible on the page
- To provide context or guidance related to a specific section of content

### When NOT to Use
- For transient notifications that should auto-dismiss (use Toast instead)
- For critical actions requiring user confirmation (use Alert Dialog instead)
- For inline validation messages within forms (use form field validation)
- When the message is not important enough to warrant visual prominence

### Accessibility
- Uses \`role="alert"\` for screen reader announcements
- Icon-only alerts should include visually hidden text for context
- Color is not the only indicator of meaning; icons and text provide additional context
- Supports keyboard navigation when interactive elements are included
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'informational', 'warning'],
      description: 'The visual style variant of the alert',
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-[400px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        This alert does not have an icon, demonstrating flexible content options.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert variant="success" className="w-[400px]">
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
}

export const Informational: Story = {
  name: 'Informational',
  render: () => (
    <Alert variant="informational" className="w-[400px]">
      <InfoIcon className="h-4 w-4" />
      <AlertTitle>Did you know?</AlertTitle>
      <AlertDescription>
        You can customize alerts with additional Tailwind classes for different visual styles.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" className="w-[400px]">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your account is approaching its storage limit.
      </AlertDescription>
    </Alert>
  ),
}

export const LongContent: Story = {
  render: () => (
    <Alert className="w-[400px]">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Important Update</AlertTitle>
      <AlertDescription>
        <p>This is a longer alert with multiple paragraphs of content.</p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </AlertDescription>
    </Alert>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>
          This is the default alert variant.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Destructive</AlertTitle>
        <AlertDescription>
          This is the destructive alert variant.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          This is the success alert variant.
        </AlertDescription>
      </Alert>
      <Alert variant="informational">
        <InfoIcon className="h-4 w-4" />
        <AlertTitle>Informational</AlertTitle>
        <AlertDescription>
          This is the informational alert variant.
        </AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          This is the warning alert variant.
        </AlertDescription>
      </Alert>
    </div>
  ),
}
