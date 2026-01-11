import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea, ScrollBar } from './scroll-area'
import { Separator } from '@/components/separator/separator'

const meta: Meta<typeof ScrollArea> = {
  title: 'Components/Layout/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Scroll Area

Augments native scroll functionality for custom, cross-browser styling. Built on Radix UI Scroll Area primitive.

### When to Use
- Custom-styled scrollbars that match your design system
- Consistent scroll behavior across browsers
- Horizontal scrolling content (galleries, carousels)
- Long lists or content that needs scrolling
- Chat interfaces and message lists
- Code blocks and log viewers

### When NOT to Use
- When native scrollbars are acceptable
- For full-page scrolling (use body scroll)
- When you need scroll snapping (limited support)
- For very short content that does not need scrolling

### Accessibility
- Preserves native scroll behavior
- Keyboard scrolling works as expected
- Works with screen readers
- Respects reduced motion preferences
- Scrollbars remain accessible to all users

### Features
- Custom scrollbar styling
- Horizontal and vertical scrolling
- Auto-hide scrollbars (optional)
- Smooth scrolling support
- Touch-friendly on mobile devices
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ScrollArea>

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => {
    const works = [
      { artist: 'Ornella Binni', art: 'Abstract Composition' },
      { artist: 'Tom Byrom', art: 'Landscape Study' },
      { artist: 'Vladimir Malyutin', art: 'Urban Scene' },
      { artist: 'Andrea Ferrario', art: 'Portrait Series' },
      { artist: 'Claudio Schwarz', art: 'Nature Collection' },
      { artist: 'Pawel Czerwinski', art: 'Color Theory' },
      { artist: 'Europeana', art: 'Historical Archive' },
      { artist: 'Umberto', art: 'Modern Art' },
    ]

    return (
      <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {works.map((work) => (
            <figure key={work.artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <div className="h-[150px] w-[200px] bg-muted" />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {work.art}
                </span>
                <br />
                {work.artist}
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    )
  },
}

export const LongContent: Story = {
  render: () => (
    <ScrollArea className="h-[400px] w-[350px] rounded-md border p-4">
      <h4 className="mb-4 text-lg font-semibold">Terms of Service</h4>
      <div className="space-y-4 text-sm text-muted-foreground">
        <p>
          Welcome to our service. These Terms of Service govern your use of our
          website and services. By accessing or using our services, you agree to
          be bound by these terms.
        </p>
        <h5 className="font-medium text-foreground">1. Acceptance of Terms</h5>
        <p>
          By accessing and using this service, you accept and agree to be bound
          by the terms and provision of this agreement. If you do not agree to
          abide by the above, please do not use this service.
        </p>
        <h5 className="font-medium text-foreground">2. Use License</h5>
        <p>
          Permission is granted to temporarily download one copy of the
          materials on our website for personal, non-commercial transitory
          viewing only. This is the grant of a license, not a transfer of title.
        </p>
        <h5 className="font-medium text-foreground">3. Disclaimer</h5>
        <p>
          The materials on our website are provided on an as is basis. We make
          no warranties, expressed or implied, and hereby disclaim and negate
          all other warranties including, without limitation, implied warranties
          or conditions of merchantability, fitness for a particular purpose.
        </p>
        <h5 className="font-medium text-foreground">4. Limitations</h5>
        <p>
          In no event shall we or our suppliers be liable for any damages
          including, without limitation, damages for loss of data or profit, or
          due to business interruption arising out of the use or inability to
          use the materials on our website.
        </p>
        <h5 className="font-medium text-foreground">5. Revisions</h5>
        <p>
          The materials appearing on our website could include technical,
          typographical, or photographic errors. We do not warrant that any of
          the materials on our website are accurate, complete, or current.
        </p>
        <h5 className="font-medium text-foreground">6. Links</h5>
        <p>
          We have not reviewed all of the sites linked to our website and are
          not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by us of the site.
        </p>
        <h5 className="font-medium text-foreground">7. Modifications</h5>
        <p>
          We may revise these terms of service at any time without notice. By
          using this website you are agreeing to be bound by the then current
          version of these terms of service.
        </p>
        <h5 className="font-medium text-foreground">8. Governing Law</h5>
        <p>
          These terms and conditions are governed by and construed in accordance
          with applicable laws and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </p>
      </div>
    </ScrollArea>
  ),
}

export const ChatMessages: Story = {
  render: () => {
    const messages = [
      { id: 1, sender: 'Alice', text: 'Hey, how are you?', time: '10:00 AM' },
      { id: 2, sender: 'You', text: 'Im doing great, thanks!', time: '10:01 AM' },
      { id: 3, sender: 'Alice', text: 'Did you see the new design?', time: '10:02 AM' },
      { id: 4, sender: 'You', text: 'Yes, it looks amazing!', time: '10:03 AM' },
      { id: 5, sender: 'Alice', text: 'Thanks! I worked really hard on it.', time: '10:04 AM' },
      { id: 6, sender: 'You', text: 'It shows. Great job!', time: '10:05 AM' },
      { id: 7, sender: 'Alice', text: 'Should we schedule a meeting to discuss?', time: '10:06 AM' },
      { id: 8, sender: 'You', text: 'Sure, how about tomorrow at 2 PM?', time: '10:07 AM' },
      { id: 9, sender: 'Alice', text: 'Perfect, see you then!', time: '10:08 AM' },
      { id: 10, sender: 'You', text: 'Great, see you!', time: '10:09 AM' },
    ]

    return (
      <ScrollArea className="h-[300px] w-[350px] rounded-md border">
        <div className="p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex flex-col ${message.sender === 'You' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`rounded-lg px-3 py-2 text-sm ${
                  message.sender === 'You'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {message.text}
              </div>
              <span className="text-xs text-muted-foreground mt-1">
                {message.time}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    )
  },
}

export const TableScroll: Story = {
  render: () => {
    const data = Array.from({ length: 20 }).map((_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'Viewer',
    }))

    return (
      <ScrollArea className="h-[300px] w-[500px] rounded-md border">
        <table className="w-full">
          <thead className="sticky top-0 bg-background border-b">
            <tr>
              <th className="p-2 text-left text-sm font-medium">ID</th>
              <th className="p-2 text-left text-sm font-medium">Name</th>
              <th className="p-2 text-left text-sm font-medium">Email</th>
              <th className="p-2 text-left text-sm font-medium">Role</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b last:border-0">
                <td className="p-2 text-sm">{row.id}</td>
                <td className="p-2 text-sm">{row.name}</td>
                <td className="p-2 text-sm">{row.email}</td>
                <td className="p-2 text-sm">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>
    )
  },
}
