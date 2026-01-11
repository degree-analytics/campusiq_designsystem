import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  FileText,
  Mail,
  MessageSquare,
  PlusCircle,
  Plus,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Cloud,
  UserPlus,
  Users,
} from 'lucide-react'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './command'
import { Button } from '@/components/ui/button'

const meta: Meta<typeof Command> = {
  title: 'Components/Navigation/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Command

A command palette component that provides fast, keyboard-first navigation for power users. Built on top of cmdk, it offers fuzzy search, keyboard navigation, and grouping of commands.

### When to Use

- To provide a quick way to access application commands and actions
- For power users who prefer keyboard-driven navigation
- As a global search interface that can be triggered anywhere in the app
- When you need to search and filter through a large list of actions
- To provide keyboard shortcuts for common actions
- In applications with many features that need quick access

### When NOT to Use

- For simple navigation with few options (use a dropdown or menu instead)
- When the user base is primarily non-technical and unfamiliar with command palettes
- For form inputs or data entry (use standard form controls)
- When you only need to search content, not trigger actions (use a search input)
- On mobile devices where keyboard shortcuts are not available

### Accessibility

- Full keyboard navigation support (Arrow keys, Enter, Escape)
- Search input is automatically focused when opened
- Items are announced by screen readers with their labels
- Groups are properly labeled for screen reader users
- Keyboard shortcuts are displayed visually and can be triggered
- Empty states provide clear feedback when no results are found
- Focus is trapped within the dialog when open
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: 'The command menu content including input, list, groups, and items',
      control: false,
    },
    className: {
      description: 'Additional CSS classes to apply to the command container',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[400px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>Cmd+P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>Cmd+B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>Cmd+S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithShortcuts: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[400px]">
      <CommandInput placeholder="Search for actions..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>New Document</span>
            <CommandShortcut>Cmd+N</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Plus className="mr-2 h-4 w-4" />
            <span>Create Project</span>
            <CommandShortcut>Cmd+Shift+P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Send Email</span>
            <CommandShortcut>Cmd+E</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Open Chat</span>
            <CommandShortcut>Cmd+M</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Command items can display keyboard shortcuts using the CommandShortcut component.',
      },
    },
  },
}

export const GroupedItems: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[400px]">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="My Account">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>Cmd+P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>Cmd+B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>Cmd+S</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Team">
          <CommandItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </CommandItem>
          <CommandItem>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Invite users</span>
          </CommandItem>
          <CommandItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>New Team</span>
            <CommandShortcut>Cmd+T</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Help">
          <CommandItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </CommandItem>
          <CommandItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </CommandItem>
          <CommandItem disabled>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup>
          <CommandItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <CommandShortcut>Cmd+Q</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Commands can be organized into logical groups with headings. Use CommandSeparator to visually separate groups.',
      },
    },
  },
}

function CommandDialogDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <p className="text-sm text-muted-foreground mb-4">
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">Cmd</span>K
        </kbd>{' '}
        or click the button below
      </p>
      <Button onClick={() => setOpen(true)}>Open Command Palette</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator className="mr-2 h-4 w-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>Cmd+P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>Cmd+S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}

export const Dialog: Story = {
  render: () => <CommandDialogDemo />,
  parameters: {
    docs: {
      description: {
        story: 'CommandDialog wraps the command palette in a modal dialog, perfect for global command palettes triggered by keyboard shortcuts.',
      },
    },
  },
}
