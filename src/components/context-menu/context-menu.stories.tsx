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

const meta: Meta = {
  title: 'Components/Navigation/ContextMenu',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj

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
}
