import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Skeleton

A placeholder preview of content before the data gets loaded, reducing layout shift and perceived loading time. Skeletons provide a low-fidelity representation of the UI that is loading.

### When to Use
- To indicate loading state for content-heavy sections
- To prevent layout shift when content dimensions are known
- For initial page loads where content structure is predictable
- When loading times may be perceptible but content layout is defined

### When NOT to Use
- For very fast loading content (under 200ms)
- When content structure varies significantly between loads
- For interactive elements that should show a loading spinner instead
- When a full-page loading indicator would be more appropriate

### Accessibility
- Skeletons are decorative and should be hidden from screen readers (\`aria-hidden="true"\`)
- Pair with visually hidden loading announcements for screen reader users
- The pulsing animation should respect \`prefers-reduced-motion\` preferences
- Content dimensions should match the skeleton to prevent disorienting layout shifts
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-[250px]" />,
}

export const Circle: Story = {
  render: () => <Skeleton className="h-12 w-12 rounded-full" />,
}

export const Rectangle: Story = {
  render: () => <Skeleton className="h-[125px] w-[250px]" />,
}

export const Text: Story = {
  render: () => (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[220px]" />
    </div>
  ),
}

export const Card: Story = {
  render: () => (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ),
}

export const Avatar: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  ),
}

export const ListItem: Story = {
  render: () => (
    <div className="flex items-center space-x-4 p-4 border rounded-lg w-[400px]">
      <Skeleton className="h-10 w-10 rounded" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <Skeleton className="h-8 w-16 rounded" />
    </div>
  ),
}

export const TableRow: Story = {
  render: () => (
    <div className="w-[600px] space-y-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-4 w-[50px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[80px]" />
          <Skeleton className="h-4 flex-1" />
        </div>
      ))}
    </div>
  ),
}

export const ProfileCard: Story = {
  render: () => (
    <div className="w-[300px] rounded-lg border p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-3 w-[80px]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-20 rounded" />
        <Skeleton className="h-8 w-20 rounded" />
      </div>
    </div>
  ),
}

export const BlogPost: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <div className="flex items-center space-x-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  ),
}

export const Dashboard: Story = {
  render: () => (
    <div className="w-[600px] space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border p-4 space-y-2">
            <Skeleton className="h-4 w-[60px]" />
            <Skeleton className="h-8 w-[80px]" />
            <Skeleton className="h-3 w-[100px]" />
          </div>
        ))}
      </div>

      {/* Chart Area */}
      <div className="rounded-lg border p-4 space-y-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-[200px] w-full" />
      </div>

      {/* List */}
      <div className="rounded-lg border p-4 space-y-4">
        <Skeleton className="h-4 w-[120px]" />
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center space-x-3">
            <Skeleton className="h-10 w-10 rounded" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
            <Skeleton className="h-6 w-[60px]" />
          </div>
        ))}
      </div>
    </div>
  ),
}

export const Form: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-10 w-full rounded" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[60px]" />
        <Skeleton className="h-10 w-full rounded" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-24 w-full rounded" />
      </div>
      <div className="flex justify-end space-x-2">
        <Skeleton className="h-10 w-[80px] rounded" />
        <Skeleton className="h-10 w-[100px] rounded" />
      </div>
    </div>
  ),
}

export const Navigation: Story = {
  render: () => (
    <div className="w-[200px] space-y-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex items-center space-x-3 p-2">
          <Skeleton className="h-5 w-5 rounded" />
          <Skeleton className="h-4 flex-1" />
        </div>
      ))}
    </div>
  ),
}

export const AllShapes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Lines</h4>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Circles</h4>
        <div className="flex gap-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-16 w-16 rounded-full" />
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Rectangles</h4>
        <div className="flex gap-4">
          <Skeleton className="h-16 w-16 rounded" />
          <Skeleton className="h-16 w-24 rounded" />
          <Skeleton className="h-16 w-32 rounded-lg" />
          <Skeleton className="h-16 w-40 rounded-xl" />
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium">Buttons</h4>
        <div className="flex gap-2">
          <Skeleton className="h-8 w-16 rounded-md" />
          <Skeleton className="h-9 w-20 rounded-md" />
          <Skeleton className="h-10 w-24 rounded-md" />
        </div>
      </div>
    </div>
  ),
}
