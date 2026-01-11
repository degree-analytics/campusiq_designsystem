import type { Meta, StoryObj } from '@storybook/react'
import {
  Home,
  BookOpen,
  Users,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
  ChevronDown,
  GraduationCap,
  FileText,
  BarChart3,
  MessageSquare,
  Bell,
  Plus,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from './sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar/avatar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/collapsible/collapsible'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Sidebar

A composable sidebar component for building complex navigation layouts. The Sidebar provides a flexible container for organizing navigation items, branding, user profiles, and actions in a vertical layout.

### When to Use

- For application navigation that requires persistent visibility
- When you have many navigation items that need hierarchical organization
- For admin dashboards and complex application interfaces
- When users need quick access to primary navigation at all times
- For applications where the sidebar can be collapsed to save space
- When you need to display user profile, branding, or contextual actions

### When NOT to Use

- For simple websites with few pages (use a header navigation)
- On mobile-first designs where space is limited (consider bottom navigation)
- For marketing sites where navigation is minimal
- When the sidebar would hide important content
- For single-page applications with minimal navigation needs

### Accessibility

- Semantic navigation structure with proper landmarks
- Full keyboard navigation support
- Collapsible groups are announced correctly to screen readers
- Active states are properly indicated with aria-current
- Sidebar toggle is keyboard accessible
- Focus management when collapsing/expanding
- Tooltips available in collapsed mode for icon-only view
- Skip links can be added for bypassing navigation

### Sub-components

- **SidebarProvider**: Context provider for sidebar state
- **SidebarHeader**: Branding and primary content area
- **SidebarContent**: Main scrollable navigation area
- **SidebarFooter**: User profile, settings, and secondary actions
- **SidebarGroup**: Grouping container with optional label
- **SidebarMenu**: Navigation menu container
- **SidebarMenuItem**: Individual navigation items
- **SidebarMenuButton**: Clickable navigation buttons
- **SidebarMenuSub**: Nested navigation items
- **SidebarRail**: Vertical rail for resize interaction
- **SidebarTrigger**: Button to toggle sidebar visibility
        `,
      },
    },
  },
  argTypes: {
    side: {
      description: 'Which side of the viewport the sidebar appears on',
      control: 'select',
      options: ['left', 'right'],
    },
    variant: {
      description: 'The visual style of the sidebar',
      control: 'select',
      options: ['sidebar', 'floating', 'inset'],
    },
    collapsible: {
      description: 'The collapsible behavior of the sidebar',
      control: 'select',
      options: ['offcanvas', 'icon', 'none'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

const mainNavItems = [
  { icon: Home, label: 'Dashboard', href: '#', isActive: true },
  { icon: BookOpen, label: 'Courses', href: '#', badge: '12' },
  { icon: Users, label: 'Students', href: '#' },
  { icon: Calendar, label: 'Schedule', href: '#' },
  { icon: FileText, label: 'Assignments', href: '#', badge: '3' },
  { icon: BarChart3, label: 'Analytics', href: '#' },
  { icon: MessageSquare, label: 'Messages', href: '#', badge: '5' },
]

const secondaryNavItems = [
  { icon: Settings, label: 'Settings', href: '#' },
  { icon: HelpCircle, label: 'Help & Support', href: '#' },
]

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <GraduationCap className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">CampusIQ</span>
                    <span className="text-xs text-muted-foreground">Learning Platform</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNavItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>Support</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {secondaryNavItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <a href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
        </header>
        <main className="flex-1 p-4">
          <p className="text-muted-foreground">
            Main content area. Click the trigger button or press Cmd+B to toggle the sidebar.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
}

export const CollapsibleIcon: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <GraduationCap className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">CampusIQ</span>
                    <span className="text-xs text-muted-foreground">Learning Platform</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNavItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.isActive}
                      tooltip={item.label}
                    >
                      <a href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="John Doe">
                <a href="#">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
        </header>
        <main className="flex-1 p-4">
          <p className="text-muted-foreground">
            This sidebar collapses to icon-only mode. Hover over icons to see tooltips.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The sidebar can collapse to show only icons, with tooltips appearing on hover for accessibility.',
      },
    },
  },
}

export const WithSections: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <GraduationCap className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">CampusIQ</span>
                    <span className="text-xs text-muted-foreground">Learning Platform</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarInput placeholder="Search..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive>
                    <a href="#">
                      <Home />
                      <span>Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <BookOpen />
                        <span>Courses</span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#">All Courses</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#">My Courses</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton asChild>
                            <a href="#">Archived</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Users />
                      <span>Students</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Calendar />
                      <span>Schedule</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
          <SidebarGroup>
            <SidebarGroupLabel>
              My Classes
            </SidebarGroupLabel>
            <SidebarGroupAction>
              <Plus className="size-4" />
              <span className="sr-only">Add Class</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <span className="flex size-4 items-center justify-center rounded-sm bg-blue-500 text-[10px] text-white">CS</span>
                      <span>Computer Science 101</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuAction showOnHover>
                    <Bell className="size-4" />
                  </SidebarMenuAction>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <span className="flex size-4 items-center justify-center rounded-sm bg-green-500 text-[10px] text-white">MA</span>
                      <span>Mathematics 201</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuAction showOnHover>
                    <Bell className="size-4" />
                  </SidebarMenuAction>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <span className="flex size-4 items-center justify-center rounded-sm bg-purple-500 text-[10px] text-white">PH</span>
                      <span>Physics 101</span>
                    </a>
                  </SidebarMenuButton>
                  <SidebarMenuAction showOnHover>
                    <Bell className="size-4" />
                  </SidebarMenuAction>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <Settings />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <LogOut />
                  <span>Logout</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
        </header>
        <main className="flex-1 p-4">
          <p className="text-muted-foreground">
            Sidebar with collapsible sections, search input, and action buttons.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A full-featured sidebar with collapsible sections, search input, group actions, and menu item actions.',
      },
    },
  },
}

export const Floating: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="floating">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <GraduationCap className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">CampusIQ</span>
                    <span className="text-xs text-muted-foreground">Learning Platform</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNavItems.slice(0, 5).map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
        </header>
        <main className="flex-1 p-4">
          <p className="text-muted-foreground">
            Floating sidebar variant with rounded corners and shadow.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The floating variant adds visual separation with rounded corners and a shadow effect.',
      },
    },
  },
}

export const Inset: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar variant="inset">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <GraduationCap className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">CampusIQ</span>
                    <span className="text-xs text-muted-foreground">Learning Platform</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainNavItems.slice(0, 5).map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <Avatar className="size-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>John Doe</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
        </header>
        <main className="flex-1 p-4">
          <p className="text-muted-foreground">
            Inset sidebar variant with background color filling the sidebar area.
          </p>
        </main>
      </SidebarInset>
    </SidebarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The inset variant provides a contained appearance with background color extending to the viewport edge.',
      },
    },
  },
}

export const RightSide: Story = {
  render: () => (
    <SidebarProvider>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b px-4">
          <div className="flex-1">
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
          <SidebarTrigger />
        </header>
        <main className="flex-1 p-4">
          <p className="text-muted-foreground">
            Right-side sidebar placement.
          </p>
        </main>
      </SidebarInset>
      <Sidebar side="right">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Bell className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">Notifications</span>
                    <span className="text-xs text-muted-foreground">3 new messages</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Recent Activity</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <MessageSquare />
                      <span>New message from Jane</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <FileText />
                      <span>Assignment submitted</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <Calendar />
                      <span>Upcoming event</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </SidebarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Sidebars can be positioned on either side. Use the right side for secondary navigation or contextual panels.',
      },
    },
  },
}
