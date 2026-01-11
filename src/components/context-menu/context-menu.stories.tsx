import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Copy,
  Scissors,
  Clipboard,
  Trash2,
  Link,
  Share,
  Mail,
  MessageCircle,
  Twitter,
  Bookmark,
  Star,
  Eye,
} from 'lucide-react'
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from './context-menu'

const meta: Meta<typeof ContextMenu> = {
  title: 'Components/Navigation/ContextMenu',
  component: ContextMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Context Menu

Displays a menu of actions relevant to a target element, triggered by right-clicking (or long-pressing on touch devices). Context menus provide contextual actions that are specific to the element being interacted with.

### When to Use

- To provide actions specific to an element that users can discover on right-click
- For secondary actions that do not need to be always visible
- When you want to replicate native OS context menu behavior
- For actions on items in lists, tables, cards, or other interactive elements
- To provide clipboard operations (cut, copy, paste) contextually

### When NOT to Use

- For primary actions that users need to discover easily (use visible buttons)
- On mobile-only interfaces where right-click is not available
- When actions apply globally rather than to a specific element
- For navigation between pages (use navigation menus instead)
- When you have only one or two actions (consider inline buttons)

### Accessibility

- Opens on right-click or by pressing Shift+F10 on focused elements
- Full keyboard navigation with Arrow keys, Enter, and Escape
- Menu items are properly labeled for screen readers
- Disabled items are announced as unavailable
- Submenus are navigable with arrow keys
- Focus is properly managed when opening and closing
- Checkable items announce their checked state
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: 'The trigger element and menu content',
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof ContextMenu>

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Copy
          <ContextMenuShortcut>Cmd+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Scissors className="mr-2 h-4 w-4" />
          Cut
          <ContextMenuShortcut>Cmd+X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Clipboard className="mr-2 h-4 w-4" />
          Paste
          <ContextMenuShortcut>Cmd+V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
          <ContextMenuShortcut>Del</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}

function ContextMenuWithCheckboxes() {
  const [showBookmarks, setShowBookmarks] = useState(true)
  const [showFullUrls, setShowFullUrls] = useState(false)
  const [showPreview, setShowPreview] = useState(true)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>View Options</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          <Bookmark className="mr-2 h-4 w-4" />
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showFullUrls}
          onCheckedChange={setShowFullUrls}
        >
          <Link className="mr-2 h-4 w-4" />
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showPreview}
          onCheckedChange={setShowPreview}
        >
          <Eye className="mr-2 h-4 w-4" />
          Show Preview
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const WithCheckboxes: Story = {
  render: () => <ContextMenuWithCheckboxes />,
  parameters: {
    docs: {
      description: {
        story: 'Context menus can include checkbox items for toggling options. The checked state is managed externally.',
      },
    },
  },
}

function ContextMenuWithRadioItems() {
  const [rating, setRating] = useState('3')

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>Rating</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={rating} onValueChange={setRating}>
          <ContextMenuRadioItem value="1">
            <Star className="mr-2 h-4 w-4" /> 1 Star
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="2">
            <Star className="mr-2 h-4 w-4" /> 2 Stars
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="3">
            <Star className="mr-2 h-4 w-4" /> 3 Stars
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="4">
            <Star className="mr-2 h-4 w-4" /> 4 Stars
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="5">
            <Star className="mr-2 h-4 w-4" /> 5 Stars
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export const WithRadioItems: Story = {
  render: () => <ContextMenuWithRadioItems />,
  parameters: {
    docs: {
      description: {
        story: 'Use radio items when only one option can be selected from a group.',
      },
    },
  },
}

export const WithSubmenus: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Copy
          <ContextMenuShortcut>Cmd+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Share className="mr-2 h-4 w-4" />
            Share
          </ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </ContextMenuItem>
            <ContextMenuItem>
              <MessageCircle className="mr-2 h-4 w-4" />
              Message
            </ContextMenuItem>
            <ContextMenuItem>
              <Twitter className="mr-2 h-4 w-4" />
              Twitter
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Link className="mr-2 h-4 w-4" />
              Copy Link
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Submenus allow organizing related actions into nested menus. Navigate with arrow keys or hover.',
      },
    },
  },
}

export const Complete: Story = {
  render: () => {
    const [showStatus, setShowStatus] = useState(true)
    const [priority, setPriority] = useState('medium')

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[200px] w-[350px] items-center justify-center rounded-md border border-dashed text-sm">
          Right click for full context menu
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuLabel>Actions</ContextMenuLabel>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              Copy
              <ContextMenuShortcut>Cmd+C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <Scissors className="mr-2 h-4 w-4" />
              Cut
              <ContextMenuShortcut>Cmd+X</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <Clipboard className="mr-2 h-4 w-4" />
              Paste
              <ContextMenuShortcut>Cmd+V</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Share className="mr-2 h-4 w-4" />
              Share
            </ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </ContextMenuItem>
              <ContextMenuItem>
                <MessageCircle className="mr-2 h-4 w-4" />
                Message
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <Link className="mr-2 h-4 w-4" />
                Copy Link
              </ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuLabel>Options</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={showStatus}
            onCheckedChange={setShowStatus}
          >
            Show Status
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuLabel>Priority</ContextMenuLabel>
          <ContextMenuRadioGroup value={priority} onValueChange={setPriority}>
            <ContextMenuRadioItem value="low">Low</ContextMenuRadioItem>
            <ContextMenuRadioItem value="medium">Medium</ContextMenuRadioItem>
            <ContextMenuRadioItem value="high">High</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'A complete example showing all context menu features: groups, labels, checkboxes, radio items, submenus, and destructive actions.',
      },
    },
  },
}
