import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './collapsible'
import { Button } from '@/components/button/button'

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Layout/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Collapsible

An interactive component which expands/collapses a panel. Built on Radix UI Collapsible primitive.

### When to Use
- Showing/hiding additional content on demand
- FAQ sections with expandable answers
- Settings panels with advanced options
- Navigation menus with nested items
- Progressive disclosure of complex information

### When NOT to Use
- For multiple related collapsible items (use Accordion instead)
- When content should always be visible
- For navigation that requires persistent visibility
- When collapsed state would hide critical information

### Accessibility
- Implements WAI-ARIA disclosure pattern
- Full keyboard navigation with Space/Enter
- Proper ARIA expanded states
- Focus management for trigger elements
- Screen reader announcements for state changes

### Difference from Accordion
- Collapsible is a single expand/collapse panel
- Accordion manages multiple related panels
- Use Collapsible for standalone expandable content
- Use Accordion when panels are semantically related
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The controlled open state of the collapsible',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'The default open state when uncontrolled',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, prevents user interaction',
    },
  },
}

export default meta
type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: function DefaultStory() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between px-4">
          <h4 className="text-sm font-semibold text-foreground">
            @peduarte starred 3 repositories
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-9">
              <ChevronsUpDown className="size-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border border-border bg-background px-4 py-2 text-sm">
          @radix-ui/primitives
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border border-border bg-background px-4 py-2 text-sm">
            @radix-ui/colors
          </div>
          <div className="rounded-md border border-border bg-background px-4 py-2 text-sm">
            @radix-ui/react
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

export const OpenByDefault: Story = {
  render: function OpenByDefaultStory() {
    const [isOpen, setIsOpen] = React.useState(true)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between px-4">
          <h4 className="text-sm font-semibold text-foreground">
            Team Members
          </h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-9">
              <ChevronsUpDown className="size-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border border-border bg-background px-4 py-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-full bg-muted" />
            <span>John Doe (Admin)</span>
          </div>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border border-border bg-background px-4 py-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-full bg-muted" />
              <span>Jane Smith</span>
            </div>
          </div>
          <div className="rounded-md border border-border bg-background px-4 py-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-full bg-muted" />
              <span>Bob Johnson</span>
            </div>
          </div>
          <div className="rounded-md border border-border bg-background px-4 py-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="size-6 rounded-full bg-muted" />
              <span>Alice Williams</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

export const WithIcon: Story = {
  render: function WithIconStory() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px]"
      >
        <CollapsibleTrigger asChild>
          <button className="flex w-full items-center justify-between rounded-lg border border-border bg-background p-4 text-left hover:bg-muted">
            <span className="font-medium">Advanced Settings</span>
            <svg
              className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-2 space-y-2 rounded-lg border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <label className="text-sm">Enable notifications</label>
              <input type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Dark mode</label>
              <input type="checkbox" />
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm">Auto-save</label>
              <input type="checkbox" />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}

export const FAQStyle: Story = {
  render: function FAQStyleStory() {
    const [openItem, setOpenItem] = React.useState<string | null>(null)

    const faqs = [
      {
        id: '1',
        question: 'What is your refund policy?',
        answer:
          'We offer a 30-day money-back guarantee for all purchases. If you are not satisfied with our product, contact support for a full refund.',
      },
      {
        id: '2',
        question: 'How do I cancel my subscription?',
        answer:
          'You can cancel your subscription at any time from your account settings. Your access will continue until the end of the billing period.',
      },
      {
        id: '3',
        question: 'Do you offer student discounts?',
        answer:
          'Yes! We offer a 50% discount for students with a valid .edu email address. Contact our support team to verify your student status.',
      },
    ]

    return (
      <div className="w-[400px] space-y-2">
        {faqs.map((faq) => (
          <Collapsible
            key={faq.id}
            open={openItem === faq.id}
            onOpenChange={(open) => setOpenItem(open ? faq.id : null)}
          >
            <CollapsibleTrigger asChild>
              <button className="flex w-full items-center justify-between rounded-lg border border-border bg-background p-4 text-left font-medium hover:bg-muted">
                {faq.question}
                <svg
                  className={`size-4 shrink-0 transition-transform ${openItem === faq.id ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 pb-4 pt-2 text-sm text-muted-foreground">
                {faq.answer}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    )
  },
}
