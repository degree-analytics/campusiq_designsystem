import type { Meta, StoryObj } from '@storybook/react'
import { CalendarDays } from 'lucide-react'
import { Button } from '@/components/button/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card'

const meta: Meta<typeof HoverCard> = {
  title: 'Components/Overlay/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Hover Card

For sighted users to preview content available behind a link. Built on Radix UI Hover Card primitive.

### When to Use
- Previewing user profiles on hover
- Showing additional context for links
- Displaying product previews
- Providing quick information without navigation
- Enriching inline mentions or references

### When NOT to Use
- For critical information (not accessible to keyboard/touch users)
- When content should be persistently visible
- On touch-only devices (use Popover instead)
- For interactive content that requires clicks
- When the preview content is very long

### Accessibility
- Content is hidden from keyboard and screen reader users
- Use only for supplementary, non-essential information
- Always ensure the trigger leads to accessible content
- Consider providing alternative access patterns
- Not a replacement for accessible tooltips

### Important Notes
- Hover cards are mouse-only interactions
- Content should be supplementary, not essential
- Keep content concise and scannable
- Consider mobile alternatives (touch does not trigger hover)
        `,
      },
    },
  },
  argTypes: {
    openDelay: {
      control: 'number',
      description: 'Delay in milliseconds before opening',
    },
    closeDelay: {
      control: 'number',
      description: 'Delay in milliseconds before closing',
    },
  },
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">
            N
          </div>
          <div className="space-y-1 flex-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework - created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          John Doe
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-semibold">
            JD
          </div>
          <div className="space-y-1 flex-1">
            <h4 className="text-sm font-semibold">John Doe</h4>
            <p className="text-xs text-muted-foreground">Senior Developer</p>
            <p className="text-sm">
              Full-stack developer with 10+ years of experience.
            </p>
          </div>
        </div>
        <div className="mt-4 flex gap-4 text-sm">
          <div>
            <span className="font-semibold">127</span>
            <span className="text-muted-foreground"> projects</span>
          </div>
          <div>
            <span className="font-semibold">1.2k</span>
            <span className="text-muted-foreground"> followers</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const ProductPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer text-sm font-medium underline decoration-dotted underline-offset-4">
          Premium Package
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <div className="h-32 rounded-md bg-gradient-to-r from-blue-500 to-purple-500" />
          <div>
            <h4 className="text-sm font-semibold">Premium Package</h4>
            <p className="text-xs text-muted-foreground mt-1">
              Access to all premium features including advanced analytics,
              priority support, and unlimited storage.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">$99/month</span>
            <Button size="sm">Learn More</Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const LinkPreview: Story = {
  render: () => (
    <p className="text-sm">
      Check out the documentation at{' '}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="text-blue-600 hover:underline">
            docs.example.com
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="w-72">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Documentation</h4>
            <p className="text-xs text-muted-foreground">
              Comprehensive guides and API references to help you get started
              and build amazing applications.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded bg-green-100 px-1.5 py-0.5 text-green-700">
                Updated daily
              </span>
              <span>1,234 articles</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{' '}
      for more information.
    </p>
  ),
}

export const AlignStart: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover (Align Start)</Button>
      </HoverCardTrigger>
      <HoverCardContent align="start" className="w-64">
        <p className="text-sm">
          This hover card is aligned to the start of the trigger element.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const AlignEnd: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover (Align End)</Button>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="w-64">
        <p className="text-sm">
          This hover card is aligned to the end of the trigger element.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const WithDelay: Story = {
  render: () => (
    <HoverCard openDelay={500} closeDelay={200}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Hover with Delay</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <p className="text-sm">
          This hover card has a 500ms open delay and a 200ms close delay.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const MultipleCards: Story = {
  render: () => (
    <div className="flex gap-4">
      {['Alice', 'Bob', 'Charlie'].map((name) => (
        <HoverCard key={name}>
          <HoverCardTrigger asChild>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              {name[0]}
            </button>
          </HoverCardTrigger>
          <HoverCardContent className="w-48">
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{name}</h4>
              <p className="text-xs text-muted-foreground">
                Hover over other avatars to see their info.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  ),
}
