import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from './menubar'

const meta: Meta<typeof Menubar> = {
  title: 'Components/Navigation/Menubar',
  component: Menubar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Menubar

A horizontal menu bar that provides access to a set of menus, mimicking native desktop application menu bars. Menubars are commonly found at the top of application windows and provide organized access to application commands.

### When to Use

- To create a desktop application-like experience in web applications
- For applications with many features organized into logical categories
- When users expect a traditional menu bar interface (e.g., document editors)
- To provide quick access to commands with keyboard shortcuts
- For complex applications that need hierarchical command organization

### When NOT to Use

- For simple websites with basic navigation (use Navigation Menu)
- On mobile-first applications where horizontal menus do not work well
- When you only have a few actions to display (use a Dropdown Menu)
- For e-commerce or content websites (use traditional navigation patterns)
- When the application is primarily touch-based

### Accessibility

- Full keyboard navigation with Arrow keys, Enter, and Escape
- Menu triggers are focusable and support Tab navigation
- Alt key can be used to access menu items (native behavior)
- Keyboard shortcuts are displayed and functional
- Screen readers announce menu structure and current state
- Disabled items are properly announced as unavailable
- Focus is managed correctly when opening and closing menus
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: 'MenubarMenu items containing triggers and content',
      control: false,
    },
    className: {
      description: 'Additional CSS classes for the menubar container',
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>Cmd+T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>Cmd+N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>Cmd+P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>Cmd+Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>Shift+Cmd+Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>Cmd+R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>Shift+Cmd+R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}

export const FileEditMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New File <MenubarShortcut>Cmd+N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open... <MenubarShortcut>Cmd+O</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open Recent
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>Cmd+S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save As... <MenubarShortcut>Shift+Cmd+S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Close <MenubarShortcut>Cmd+W</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Exit <MenubarShortcut>Cmd+Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>Cmd+Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>Cmd+Y</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut <MenubarShortcut>Cmd+X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copy <MenubarShortcut>Cmd+C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Paste <MenubarShortcut>Cmd+V</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Select All <MenubarShortcut>Cmd+A</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A classic File and Edit menu pattern commonly seen in document editing applications.',
      },
    },
  },
}

function MenubarWithCheckboxes() {
  const [showToolbar, setShowToolbar] = useState(true)
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showMinimap, setShowMinimap] = useState(false)

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Panels</MenubarLabel>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked={showToolbar}
            onCheckedChange={setShowToolbar}
          >
            Show Toolbar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Show Status Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={showMinimap}
            onCheckedChange={setShowMinimap}
          >
            Show Minimap
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>
            Toggle Fullscreen <MenubarShortcut>F11</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export const WithCheckboxes: Story = {
  render: () => <MenubarWithCheckboxes />,
  parameters: {
    docs: {
      description: {
        story: 'Menubar items can include checkbox items for toggling view options and preferences.',
      },
    },
  },
}

function MenubarWithRadioItems() {
  const [zoom, setZoom] = useState('100')

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Zoom</MenubarLabel>
          <MenubarSeparator />
          <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
            <MenubarRadioItem value="50">50%</MenubarRadioItem>
            <MenubarRadioItem value="75">75%</MenubarRadioItem>
            <MenubarRadioItem value="100">100%</MenubarRadioItem>
            <MenubarRadioItem value="125">125%</MenubarRadioItem>
            <MenubarRadioItem value="150">150%</MenubarRadioItem>
            <MenubarRadioItem value="200">200%</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem>
            Zoom In <MenubarShortcut>Cmd++</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Zoom Out <MenubarShortcut>Cmd+-</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Reset Zoom <MenubarShortcut>Cmd+0</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export const WithRadioItems: Story = {
  render: () => <MenubarWithRadioItems />,
  parameters: {
    docs: {
      description: {
        story: 'Radio items allow single selection from a group, ideal for settings like zoom level.',
      },
    },
  },
}

export const ApplicationMenu: Story = {
  render: () => (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">CampusIQ</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>About CampusIQ</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Preferences... <MenubarShortcut>Cmd+,</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Hide CampusIQ <MenubarShortcut>Cmd+H</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>Hide Others</MenubarItem>
          <MenubarItem>Show All</MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            Quit CampusIQ <MenubarShortcut>Cmd+Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Courses</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Browse Courses</MenubarItem>
          <MenubarItem>My Courses</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Quick Access</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Recent</MenubarItem>
              <MenubarItem>Favorites</MenubarItem>
              <MenubarItem>Archived</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Create New Course <MenubarShortcut>Cmd+Shift+N</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Students</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>All Students</MenubarItem>
          <MenubarItem>By Course</MenubarItem>
          <MenubarItem>By Grade</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Add Student</MenubarItem>
          <MenubarItem>Import Students</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Reports</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Grade Reports</MenubarItem>
          <MenubarItem>Attendance Reports</MenubarItem>
          <MenubarItem>Progress Reports</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Custom Report Builder</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Keyboard Shortcuts</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Contact Support</MenubarItem>
          <MenubarItem>Report Issue</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A CampusIQ-specific application menu showing how to build a complete menu structure for the learning management system.',
      },
    },
  },
}
