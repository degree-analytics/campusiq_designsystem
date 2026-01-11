import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Building, Folder, FileText, Users, Settings } from 'lucide-react'
import { AccordionTreeItem } from './accordion-tree-item'

const meta: Meta<typeof AccordionTreeItem> = {
  title: 'Components/Navigation/AccordionTreeItem',
  component: AccordionTreeItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## AccordionTreeItem

A specialized accordion/tree navigation component for hierarchical content display. Built on Radix UI Collapsible primitive.

### When to Use
- Tree-style navigation menus with expandable nodes
- Hierarchical content organization (folders, categories)
- Sidebar navigation with nested items
- Settings panels with grouped options
- File explorers or document trees

### When NOT to Use
- Simple expand/collapse content (use Accordion instead)
- Flat navigation lists (use standard navigation)
- Content that should always be visible
- When tree depth exceeds 3-4 levels (consider alternative patterns)

### Accessibility
- Implements WAI-ARIA Disclosure pattern
- Full keyboard navigation (Space/Enter to toggle)
- Proper ARIA expanded states
- Focus management with visible focus ring
- Screen reader announcements for state changes
        `,
      },
    },
  },
  argTypes: {
    icon: {
      control: false,
      description: 'Optional React node for leading icon',
    },
    triggerText: {
      control: 'text',
      description: 'Label text for the tree node trigger',
    },
    contentText: {
      control: 'text',
      description: 'Description text displayed when expanded',
    },
    leadingIcon: {
      control: 'boolean',
      description: 'Whether to show the leading icon',
    },
    hasSlot: {
      control: 'boolean',
      description: 'Whether to include a content slot area for custom content',
    },
    active: {
      control: 'boolean',
      description: 'Expanded/collapsed state',
    },
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Focus', 'Disabled'],
      description: 'Visual state of the component',
    },
  },
}

export default meta
type Story = StoryObj<typeof AccordionTreeItem>

export const Default: Story = {
  args: {
    icon: <Building className="size-4" />,
    triggerText: 'Campus Buildings',
    contentText: 'View and manage all campus buildings and facilities.',
    leadingIcon: true,
    hasSlot: false,
    active: false,
    state: 'Default',
  },
}

export const Expanded: Story = {
  args: {
    icon: <Building className="size-4" />,
    triggerText: 'Campus Buildings',
    contentText: 'View and manage all campus buildings and facilities.',
    leadingIcon: true,
    hasSlot: false,
    active: true,
    state: 'Default',
  },
}

export const WithoutIcon: Story = {
  args: {
    triggerText: 'General Settings',
    contentText: 'Configure general application settings.',
    leadingIcon: false,
    hasSlot: false,
    active: false,
    state: 'Default',
  },
}

export const HoverState: Story = {
  args: {
    icon: <Folder className="size-4" />,
    triggerText: 'Documents',
    contentText: 'Access shared documents and files.',
    leadingIcon: true,
    hasSlot: false,
    active: false,
    state: 'Hover',
  },
}

export const FocusState: Story = {
  args: {
    icon: <Folder className="size-4" />,
    triggerText: 'Documents',
    contentText: 'Access shared documents and files.',
    leadingIcon: true,
    hasSlot: false,
    active: false,
    state: 'Focus',
  },
}

export const DisabledState: Story = {
  args: {
    icon: <Settings className="size-4" />,
    triggerText: 'Admin Settings',
    contentText: 'Restricted administrative settings.',
    leadingIcon: true,
    hasSlot: false,
    active: false,
    state: 'Disabled',
  },
}

export const WithSlotContent: Story = {
  args: {
    icon: <Users className="size-4" />,
    triggerText: 'Team Members',
    contentText: 'Manage team members and roles.',
    leadingIcon: true,
    hasSlot: true,
    active: true,
    state: 'Default',
    children: (
      <div className="space-y-1">
        <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
          <span className="size-2 rounded-full bg-green-500" />
          <span>John Smith - Admin</span>
        </div>
        <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
          <span className="size-2 rounded-full bg-green-500" />
          <span>Jane Doe - Editor</span>
        </div>
        <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
          <span className="size-2 rounded-full bg-gray-400" />
          <span>Bob Wilson - Viewer</span>
        </div>
      </div>
    ),
  },
}

function InteractiveDemo() {
  const [activeItems, setActiveItems] = useState<Record<string, boolean>>({
    buildings: false,
    documents: false,
    settings: false,
  })

  const toggleItem = (key: string) => {
    setActiveItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="w-[280px] space-y-1 rounded-lg border p-2">
      <AccordionTreeItem
        icon={<Building className="size-4" />}
        triggerText="Campus Buildings"
        contentText="View and manage all campus buildings and facilities."
        active={activeItems.buildings}
        onActiveChange={() => toggleItem('buildings')}
      />
      <AccordionTreeItem
        icon={<Folder className="size-4" />}
        triggerText="Documents"
        contentText="Access shared documents and files."
        active={activeItems.documents}
        onActiveChange={() => toggleItem('documents')}
      />
      <AccordionTreeItem
        icon={<Settings className="size-4" />}
        triggerText="Settings"
        contentText="Configure application preferences."
        active={activeItems.settings}
        onActiveChange={() => toggleItem('settings')}
      />
    </div>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing multiple tree items with state management.',
      },
    },
  },
}

function NestedTreeDemo() {
  const [activeItems, setActiveItems] = useState<Record<string, boolean>>({
    root: true,
    subfolder1: false,
    subfolder2: false,
  })

  const toggleItem = (key: string) => {
    setActiveItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="w-[320px] rounded-lg border p-2">
      <AccordionTreeItem
        icon={<Folder className="size-4" />}
        triggerText="Project Files"
        hasSlot
        active={activeItems.root}
        onActiveChange={() => toggleItem('root')}
      >
        <div className="space-y-1">
          <AccordionTreeItem
            icon={<Folder className="size-4" />}
            triggerText="Source Code"
            contentText="Application source files"
            active={activeItems.subfolder1}
            onActiveChange={() => toggleItem('subfolder1')}
          />
          <AccordionTreeItem
            icon={<Folder className="size-4" />}
            triggerText="Assets"
            hasSlot
            active={activeItems.subfolder2}
            onActiveChange={() => toggleItem('subfolder2')}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
                <FileText className="size-4 text-muted-foreground" />
                <span>logo.svg</span>
              </div>
              <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
                <FileText className="size-4 text-muted-foreground" />
                <span>icon.png</span>
              </div>
            </div>
          </AccordionTreeItem>
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent">
            <FileText className="size-4 text-muted-foreground" />
            <span>README.md</span>
          </div>
        </div>
      </AccordionTreeItem>
    </div>
  )
}

export const NestedTree: Story = {
  render: () => <NestedTreeDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Example showing nested tree structure with multiple levels.',
      },
    },
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="w-[280px] space-y-4">
      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">Default - Collapsed</p>
        <AccordionTreeItem
          icon={<Building className="size-4" />}
          triggerText="Campus Buildings"
          contentText="View and manage all campus buildings."
          active={false}
          state="Default"
        />
      </div>
      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">Default - Expanded</p>
        <AccordionTreeItem
          icon={<Building className="size-4" />}
          triggerText="Campus Buildings"
          contentText="View and manage all campus buildings."
          active={true}
          state="Default"
        />
      </div>
      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">Hover State</p>
        <AccordionTreeItem
          icon={<Folder className="size-4" />}
          triggerText="Documents"
          contentText="Access shared documents and files."
          active={false}
          state="Hover"
        />
      </div>
      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">Focus State</p>
        <AccordionTreeItem
          icon={<Users className="size-4" />}
          triggerText="Team Members"
          contentText="Manage team members and roles."
          active={false}
          state="Focus"
        />
      </div>
      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">Disabled State</p>
        <AccordionTreeItem
          icon={<Settings className="size-4" />}
          triggerText="Admin Settings"
          contentText="Restricted administrative settings."
          active={false}
          state="Disabled"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Visual reference showing all available states of the component.',
      },
    },
  },
}
