import type { Meta, StoryObj } from '@storybook/react'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from './resizable'

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Components/Layout/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Resizable

Accessible resizable panel groups and layouts with keyboard support. Built on react-resizable-panels.

### When to Use
- IDE-style layouts with adjustable panels
- Split-view interfaces (email clients, code editors)
- Dashboards with customizable widget sizes
- Side-by-side content comparison
- Flexible workspace layouts

### When NOT to Use
- For simple two-column layouts (use CSS Grid)
- When panels do not need to be resizable
- On very small screens where resizing is impractical
- For responsive layouts that should adapt automatically

### Accessibility
- Full keyboard support for resizing
- Arrow keys adjust panel sizes
- Home/End keys for min/max sizes
- Proper ARIA attributes for resize handles
- Focus indicators on handles
- Screen reader announcements for size changes

### Features
- Horizontal and vertical orientations
- Nested panel groups
- Minimum and maximum size constraints
- Collapsible panels
- Persistent size preferences (via onLayout callback)
- Smooth drag animations
        `,
      },
    },
  },
  argTypes: {
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The direction of the panel group',
    },
  },
}

export default meta
type Story = StoryObj<typeof ResizablePanelGroup>

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const WithHandle: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel Two</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[400px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-2xl rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Main Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Details</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const NestedPanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[400px] max-w-2xl rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={20}>
        <div className="flex h-full items-center justify-center p-6 bg-muted/50">
          <span className="font-semibold">Navigation</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Main Content</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full items-center justify-center p-6 bg-muted/30">
              <span className="font-semibold">Console</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const IDELayout: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[500px] max-w-4xl rounded-lg border"
    >
      <ResizablePanel defaultSize={20} minSize={15}>
        <div className="flex h-full flex-col bg-muted/30">
          <div className="border-b p-2 text-sm font-medium">Explorer</div>
          <div className="flex-1 p-2">
            <div className="space-y-1 text-sm">
              <div className="cursor-pointer rounded px-2 py-1 hover:bg-muted">src/</div>
              <div className="cursor-pointer rounded px-2 py-1 pl-4 hover:bg-muted">components/</div>
              <div className="cursor-pointer rounded px-2 py-1 pl-6 hover:bg-muted">Button.tsx</div>
              <div className="cursor-pointer rounded px-2 py-1 pl-6 hover:bg-muted">Card.tsx</div>
              <div className="cursor-pointer rounded px-2 py-1 pl-4 hover:bg-muted">pages/</div>
              <div className="cursor-pointer rounded px-2 py-1 hover:bg-muted">package.json</div>
            </div>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full flex-col">
              <div className="flex border-b">
                <div className="border-r bg-muted/50 px-4 py-2 text-sm">Button.tsx</div>
                <div className="px-4 py-2 text-sm text-muted-foreground">Card.tsx</div>
              </div>
              <div className="flex-1 p-4 font-mono text-sm">
                <pre className="text-muted-foreground">
{`import * as React from 'react'

export function Button({ children }) {
  return (
    <button className="btn">
      {children}
    </button>
  )
}`}
                </pre>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full flex-col bg-muted/20">
              <div className="border-b p-2 text-sm font-medium">Terminal</div>
              <div className="flex-1 p-2 font-mono text-xs">
                <div className="text-green-600">$ npm run dev</div>
                <div className="text-muted-foreground">Starting development server...</div>
                <div className="text-muted-foreground">Ready on http://localhost:3000</div>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={20} minSize={15}>
        <div className="flex h-full flex-col bg-muted/30">
          <div className="border-b p-2 text-sm font-medium">Outline</div>
          <div className="flex-1 p-2 text-sm text-muted-foreground">
            <div className="space-y-1">
              <div>Button</div>
              <div className="pl-4">props</div>
              <div className="pl-4">render()</div>
            </div>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
