import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from './card'

const meta: Meta<typeof Card> = {
  title: 'Components/Data Display/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Card

A container for grouping related content and actions. Cards provide a flexible and extensible content container with multiple variants.

### When to Use
- Displaying related information in a contained unit
- Product listings and previews
- User profiles and contact cards
- Dashboard widgets and statistics
- Article previews and blog posts
- Settings or configuration panels

### When NOT to Use
- For simple text content (use prose or paragraph styles)
- When content needs to flow inline
- For modal or dialog content (use Dialog component)
- When cards would create too much visual noise

### Accessibility
- Use semantic heading levels within CardTitle
- Ensure sufficient color contrast for all card variants
- Interactive cards should have proper focus states
- Card actions should be keyboard accessible
- Consider using landmarks for complex card layouts

### Composition
- **CardHeader**: Contains title, description, and optional actions
- **CardTitle**: The main heading of the card
- **CardDescription**: Supporting text below the title
- **CardAction**: Optional action button in header
- **CardContent**: Main content area
- **CardFooter**: Actions or supplementary information
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <button className="text-sm text-blue-500 hover:underline">
            View all
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm">New comment on your post</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm">Someone mentioned you</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-sm">New follower</span>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
}

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardContent>
        <p className="text-center text-muted-foreground">
          A simple card with only content.
        </p>
      </CardContent>
    </Card>
  ),
}

export const ProfileCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-muted" />
        <CardTitle>John Doe</CardTitle>
        <CardDescription>Software Engineer</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-center text-sm text-muted-foreground">
          Building amazing products with React and TypeScript. Open source
          enthusiast and coffee lover.
        </p>
      </CardContent>
      <CardFooter className="justify-center gap-4">
        <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
          Follow
        </button>
        <button className="rounded-md border px-4 py-2 text-sm">Message</button>
      </CardFooter>
    </Card>
  ),
}

export const PricingCard: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Pro Plan</CardTitle>
        <CardDescription>For professional teams</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <span className="text-4xl font-bold">$29</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Unlimited projects
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Priority support
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Advanced analytics
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="h-4 w-4 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Custom integrations
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <button className="w-full rounded-md bg-primary py-2 text-primary-foreground">
          Get Started
        </button>
      </CardFooter>
    </Card>
  ),
}

export const StatsCard: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card className="w-[200px]">
        <CardHeader className="pb-2">
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-3xl">$45,231</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card className="w-[200px]">
        <CardHeader className="pb-2">
          <CardDescription>Active Users</CardDescription>
          <CardTitle className="text-3xl">+2,350</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            +180 since last hour
          </p>
        </CardContent>
      </Card>
      <Card className="w-[200px]">
        <CardHeader className="pb-2">
          <CardDescription>Sales</CardDescription>
          <CardTitle className="text-3xl">+12,234</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const ClickableCard: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card className="w-[300px] cursor-pointer transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-ring">
        <a href="#" className="block focus:outline-none">
          <CardHeader>
            <CardTitle>Documentation</CardTitle>
            <CardDescription>Learn how to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Explore our comprehensive documentation to learn about features and best practices.
            </p>
          </CardContent>
        </a>
      </Card>
      <Card className="w-[300px] cursor-pointer transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-ring">
        <a href="#" className="block focus:outline-none">
          <CardHeader>
            <CardTitle>API Reference</CardTitle>
            <CardDescription>Technical specifications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Complete API reference with examples and usage patterns.
            </p>
          </CardContent>
        </a>
      </Card>
    </div>
  ),
}

export const WithBorderSections: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader className="border-b">
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences</CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive emails about account activity</p>
            </div>
            <input type="checkbox" className="h-4 w-4" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
            </div>
            <input type="checkbox" className="h-4 w-4" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t">
        <div className="flex w-full justify-end gap-2">
          <button className="rounded-md border px-4 py-2 text-sm">Cancel</button>
          <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
            Save Changes
          </button>
        </div>
      </CardFooter>
    </Card>
  ),
}

export const CompositionPatterns: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Header + Content */}
      <Card>
        <CardHeader>
          <CardTitle>Header + Content</CardTitle>
          <CardDescription>Most common pattern for info cards</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Content area for your main information.
          </p>
        </CardContent>
      </Card>

      {/* Header + Content + Footer */}
      <Card>
        <CardHeader>
          <CardTitle>With Footer</CardTitle>
          <CardDescription>Use for actions or metadata</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Content with actions below.
          </p>
        </CardContent>
        <CardFooter>
          <button className="text-sm text-primary hover:underline">Learn more</button>
        </CardFooter>
      </Card>

      {/* Header with Action */}
      <Card>
        <CardHeader>
          <CardTitle>With Action</CardTitle>
          <CardDescription>Header-level actions</CardDescription>
          <CardAction>
            <button className="text-sm text-primary hover:underline">Edit</button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            The action button aligns to the right of the header.
          </p>
        </CardContent>
      </Card>

      {/* Content Only */}
      <Card>
        <CardContent>
          <p className="text-center text-muted-foreground">
            Content-only cards are useful for simple displays or embedded content.
          </p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const CardSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-sm font-medium text-muted-foreground">Compact</h4>
        <Card className="w-[250px] p-4">
          <CardTitle className="text-base">Small Card</CardTitle>
          <p className="mt-1 text-xs text-muted-foreground">Compact sizing for tight spaces</p>
        </Card>
      </div>
      <div>
        <h4 className="mb-2 text-sm font-medium text-muted-foreground">Default</h4>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Medium Card</CardTitle>
            <CardDescription>Standard sizing for most use cases</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Standard card content area.</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <h4 className="mb-2 text-sm font-medium text-muted-foreground">Large</h4>
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>Large Card</CardTitle>
            <CardDescription>Expanded sizing for detailed content</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Large cards provide more space for complex content, forms, or detailed information displays.
            </p>
          </CardContent>
          <CardFooter className="justify-end gap-2">
            <button className="rounded-md border px-4 py-2 text-sm">Cancel</button>
            <button className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Save</button>
          </CardFooter>
        </Card>
      </div>
    </div>
  ),
}
