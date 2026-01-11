import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Layout/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Accordion

A vertically stacked set of interactive headings that each reveal an associated section of content. Built on Radix UI Accordion primitive.

### When to Use
- Displaying FAQ sections with question/answer pairs
- Organizing content into collapsible sections to reduce visual clutter
- Settings panels where users can expand sections as needed
- Navigation menus with expandable categories
- Content that benefits from progressive disclosure

### When NOT to Use
- When content should always be visible (use Cards or sections instead)
- For navigation that requires quick access (use Tabs instead)
- When there are only 1-2 items (direct display is better)
- For content that users need to compare side-by-side

### Accessibility
- Implements WAI-ARIA Accordion pattern
- Full keyboard navigation with Arrow keys, Home, End
- Space/Enter to toggle sections
- Proper ARIA expanded states
- Focus management between triggers
- Screen reader announcements for state changes
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['single', 'multiple'],
      description: 'Whether one or multiple items can be open at the same time',
    },
    collapsible: {
      control: 'boolean',
      description: 'When type is "single", allows closing all items',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, prevents user interaction',
    },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It uses CSS animations for smooth expand and collapse.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const MultipleOpen: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Section</AccordionTrigger>
        <AccordionContent>
          This is the content for the first section. Multiple items can be
          expanded at once.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Section</AccordionTrigger>
        <AccordionContent>
          This is the content for the second section. Try opening multiple
          sections simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third Section</AccordionTrigger>
        <AccordionContent>
          This is the content for the third section. All sections can remain
          open at the same time.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const SingleOpen: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1" className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Account Settings</AccordionTrigger>
        <AccordionContent>
          Manage your account settings and preferences here. Update your profile
          information, change your password, or configure notifications.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Privacy Options</AccordionTrigger>
        <AccordionContent>
          Control who can see your information and how your data is used.
          Configure visibility settings and data sharing preferences.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Security</AccordionTrigger>
        <AccordionContent>
          Enable two-factor authentication, view login history, and manage
          connected devices for enhanced account security.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[500px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Terms and Conditions</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p>
              These Terms and Conditions govern your use of our service. By
              accessing or using the service, you agree to be bound by these
              terms.
            </p>
            <p>
              We reserve the right to modify these terms at any time. Your
              continued use of the service following any changes indicates your
              acceptance of the new terms.
            </p>
            <p>
              The service is provided as is without warranties of any kind,
              either express or implied. We do not warrant that the service will
              be uninterrupted or error-free.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Privacy Policy</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p>
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your personal information.
            </p>
            <p>
              We collect information you provide directly, such as when you
              create an account or contact us for support.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Active Section</AccordionTrigger>
        <AccordionContent>
          This section is fully interactive and can be expanded/collapsed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Section</AccordionTrigger>
        <AccordionContent>
          This content cannot be accessed because the section is disabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another Active Section</AccordionTrigger>
        <AccordionContent>
          This section is also interactive.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual accordion items can be disabled using the disabled prop. Disabled items cannot be expanded and are shown with reduced opacity.',
      },
    },
  },
}

export const FocusStates: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground mb-4">
        Tab through the triggers to see focus ring indicators. Use Space or Enter to toggle.
      </p>
      <Accordion type="single" collapsible className="w-[400px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>First Item - Tab to focus</AccordionTrigger>
          <AccordionContent>
            Focus indicators are visible when navigating with keyboard.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Item</AccordionTrigger>
          <AccordionContent>
            The focus ring follows the design system specifications.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third Item</AccordionTrigger>
          <AccordionContent>
            All interactive elements have proper focus management.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accordion triggers have visible focus indicators for keyboard navigation. The focus ring uses a 3px ring with 50% opacity.',
      },
    },
  },
}

export const FAQExample: Story = {
  render: () => (
    <div className="w-[600px]">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="faq-1">
          <AccordionTrigger>How do I enroll in a course?</AccordionTrigger>
          <AccordionContent>
            To enroll in a course, navigate to the Course Catalog from your dashboard.
            Find the course you want to join and click the Enroll button. Some courses
            may require instructor approval before enrollment is confirmed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>What payment methods are accepted?</AccordionTrigger>
          <AccordionContent>
            We accept all major credit cards (Visa, MasterCard, American Express),
            PayPal, and bank transfers for institutional accounts. Payment plans
            are available for courses over $500.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>Can I get a refund if I am not satisfied?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer a 30-day money-back guarantee for all courses. If you are
            not satisfied with your purchase, contact our support team within 30 days
            of enrollment for a full refund.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-4">
          <AccordionTrigger>How do I contact an instructor?</AccordionTrigger>
          <AccordionContent>
            You can message instructors directly through the course page using the
            Message Instructor button. Instructors typically respond within 24-48
            hours during business days.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A practical FAQ section example showing how accordion can be used for organizing question and answer content.',
      },
    },
  },
}
