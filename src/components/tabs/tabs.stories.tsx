import type { Meta, StoryObj } from '@storybook/react'
import {
  User,
  CreditCard,
  Settings,
  Bell,
  Shield,
  Key,
} from 'lucide-react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Tabs

A set of layered sections of content, known as tab panels, displayed one at a time. Tabs organize content into separate views where only one can be visible at a time.

### When to Use

- To organize related content into logical sections without page navigation
- When users need to switch between different views of related information
- For settings pages with multiple categories
- To reduce scrolling by grouping content into manageable chunks
- When the content sections are equally important and should be easily accessible
- For dashboards with different data views

### When NOT to Use

- When content needs to be compared side-by-side (show both simultaneously)
- For sequential workflows or wizards (use a stepper component)
- When there are more than 6-7 tabs (consider a different navigation pattern)
- For navigation between different pages (use navigation menus)
- When tabs would hide critical information that users need to see together

### Accessibility

- Built on Radix UI Tabs primitive for robust accessibility
- Proper ARIA roles: tablist, tab, and tabpanel
- Arrow key navigation between tabs
- Tab key moves focus to the active panel content
- Active tab indicated with aria-selected="true"
- Panels properly labeled with aria-labelledby
- Disabled tabs are properly announced
- Focus indicators are visible on all interactive elements
        `,
      },
    },
  },
  argTypes: {
    defaultValue: {
      description: 'The value of the tab that should be active by default',
      control: 'text',
    },
    value: {
      description: 'The controlled value of the currently active tab',
      control: 'text',
    },
    onValueChange: {
      description: 'Callback fired when the active tab changes',
      action: 'onValueChange',
    },
    orientation: {
      description: 'The orientation of the tabs',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Account</h3>
            <p className="text-sm text-muted-foreground">
              Make changes to your account here. Click save when you are done.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@johndoe" />
          </div>
          <Button>Save changes</Button>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Password</h3>
            <p className="text-sm text-muted-foreground">
              Change your password here. After saving, you will be logged out.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="current">Current password</Label>
            <Input id="current" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new">New password</Label>
            <Input id="new" type="password" />
          </div>
          <Button>Save password</Button>
        </div>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="profile" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="profile">
          <User className="mr-2 h-4 w-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="billing">
          <CreditCard className="mr-2 h-4 w-4" />
          Billing
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile" className="p-4">
        <h3 className="text-lg font-medium mb-2">Profile Settings</h3>
        <p className="text-sm text-muted-foreground">
          Manage your public profile information and preferences.
        </p>
      </TabsContent>
      <TabsContent value="billing" className="p-4">
        <h3 className="text-lg font-medium mb-2">Billing Information</h3>
        <p className="text-sm text-muted-foreground">
          Manage your billing information and view invoices.
        </p>
      </TabsContent>
      <TabsContent value="settings" className="p-4">
        <h3 className="text-lg font-medium mb-2">General Settings</h3>
        <p className="text-sm text-muted-foreground">
          Configure your application settings and preferences.
        </p>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tab triggers can include icons alongside text labels for better visual recognition.',
      },
    },
  },
}

export const MultipleTabs: Story = {
  render: () => (
    <Tabs defaultValue="notifications" className="w-[600px]">
      <TabsList>
        <TabsTrigger value="notifications">
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="security">
          <Shield className="mr-2 h-4 w-4" />
          Security
        </TabsTrigger>
        <TabsTrigger value="api">
          <Key className="mr-2 h-4 w-4" />
          API Keys
        </TabsTrigger>
        <TabsTrigger value="account">
          <User className="mr-2 h-4 w-4" />
          Account
        </TabsTrigger>
      </TabsList>
      <TabsContent value="notifications" className="p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notification Preferences</h3>
          <p className="text-sm text-muted-foreground">
            Choose what notifications you want to receive.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="security" className="p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Security Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your security preferences and two-factor authentication.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="api" className="p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">API Keys</h3>
          <p className="text-sm text-muted-foreground">
            Generate and manage your API keys for third-party integrations.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="account" className="p-4">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Manage your account details and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs can accommodate multiple sections. Keep the number reasonable (4-6) for usability.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="pending">Pending</TabsTrigger>
        <TabsTrigger value="archived" disabled>
          Archived
        </TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="p-4">
        <p className="text-sm text-muted-foreground">
          View your active items here.
        </p>
      </TabsContent>
      <TabsContent value="pending" className="p-4">
        <p className="text-sm text-muted-foreground">
          View your pending items here.
        </p>
      </TabsContent>
      <TabsContent value="archived" className="p-4">
        <p className="text-sm text-muted-foreground">
          View your archived items here.
        </p>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual tabs can be disabled when their content is unavailable or requires specific permissions.',
      },
    },
  },
}

export const CardStyle: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="rounded-lg border p-4 mt-2">
          <h3 className="text-lg font-medium mb-2">Course Overview</h3>
          <p className="text-sm text-muted-foreground mb-4">
            View your course performance at a glance.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-muted p-3">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-muted-foreground">Active Courses</div>
            </div>
            <div className="rounded-lg bg-muted p-3">
              <div className="text-2xl font-bold">156</div>
              <div className="text-xs text-muted-foreground">Students</div>
            </div>
            <div className="rounded-lg bg-muted p-3">
              <div className="text-2xl font-bold">89%</div>
              <div className="text-xs text-muted-foreground">Completion</div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="rounded-lg border p-4 mt-2">
          <h3 className="text-lg font-medium mb-2">Analytics Dashboard</h3>
          <p className="text-sm text-muted-foreground">
            Detailed analytics and insights about your courses.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="rounded-lg border p-4 mt-2">
          <h3 className="text-lg font-medium mb-2">Generate Reports</h3>
          <p className="text-sm text-muted-foreground">
            Create and download custom reports.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tabs can be styled with full-width triggers and card-style content panels for a more contained layout.',
      },
    },
  },
}
