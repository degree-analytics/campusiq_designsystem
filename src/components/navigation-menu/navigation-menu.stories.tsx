import type { Meta, StoryObj } from '@storybook/react'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './navigation-menu'

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/Navigation/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Navigation Menu

A collection of links for navigating websites, typically displayed horizontally at the top of a page. Navigation menus can include dropdown panels with rich content like mega menus.

### When to Use

- For primary website navigation at the top of pages
- When you need mega menus with rich content (images, descriptions, grouped links)
- For marketing websites with multiple sections and subsections
- When navigation items need descriptive content beyond just labels
- For responsive navigation that works on both desktop and mobile

### When NOT to Use

- For application menus with actions (use Menubar instead)
- When you need right-click context menus (use Context Menu)
- For simple lists of links without dropdowns (use regular links)
- For sidebar navigation (use Sidebar component)
- When you have only 2-3 navigation items (consider simpler patterns)

### Accessibility

- Built on Radix UI Navigation Menu primitive for robust accessibility
- Full keyboard navigation with Arrow keys, Enter, Tab, and Escape
- Menu triggers are properly labeled and support screen readers
- Content panels have appropriate ARIA attributes
- Focus is managed correctly when navigating between items
- Supports reduced motion preferences
- Links are properly announced with their descriptions
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: 'Navigation menu content including items and their panels',
      control: false,
    },
    className: {
      description: 'Additional CSS classes for the navigation menu container',
      control: 'text',
    },
    viewport: {
      description: 'Whether to use a viewport for content positioning',
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof NavigationMenu>

const ListItem = ({
  className,
  title,
  children,
  href = '#',
  ...props
}: React.ComponentPropsWithoutRef<'a'> & { title: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          href={href}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      CampusIQ
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      A modern learning management system built for the future of education.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="#" title="Introduction">
                Getting started with CampusIQ and setting up your first course.
              </ListItem>
              <ListItem href="#" title="Installation">
                How to install and configure CampusIQ for your institution.
              </ListItem>
              <ListItem href="#" title="Typography">
                Styles for headings, paragraphs, lists, and more.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem title="Courses" href="#">
                Create and manage courses with rich content.
              </ListItem>
              <ListItem title="Assignments" href="#">
                Build assignments with various question types.
              </ListItem>
              <ListItem title="Gradebook" href="#">
                Track student progress and manage grades.
              </ListItem>
              <ListItem title="Calendar" href="#">
                Schedule classes and important dates.
              </ListItem>
              <ListItem title="Discussion" href="#">
                Foster collaboration with discussion boards.
              </ListItem>
              <ListItem title="Analytics" href="#">
                Gain insights with powerful analytics.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}

export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Services
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A simple navigation menu with direct links, no dropdown panels. Uses the navigationMenuTriggerStyle for consistent styling.',
      },
    },
  },
}

export const MegaMenu: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-3">
              <div className="space-y-3">
                <h4 className="text-sm font-medium leading-none">For Students</h4>
                <ul className="space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Course Dashboard
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Assignment Tracker
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Study Groups
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Grade Calculator
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium leading-none">For Teachers</h4>
                <ul className="space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Course Builder
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Gradebook
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Analytics Dashboard
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Communication Tools
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium leading-none">For Administrators</h4>
                <ul className="space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        User Management
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Reporting Suite
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Integration Hub
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="#"
                        className="block text-sm text-muted-foreground hover:text-foreground"
                      >
                        Security Settings
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <ListItem title="Documentation" href="#">
                Comprehensive guides and API references.
              </ListItem>
              <ListItem title="Tutorials" href="#">
                Step-by-step video tutorials and walkthroughs.
              </ListItem>
              <ListItem title="Blog" href="#">
                Latest news, tips, and best practices.
              </ListItem>
              <ListItem title="Community" href="#">
                Connect with other educators and learners.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Pricing
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A mega menu with multiple columns and categorized links, ideal for complex site navigation.',
      },
    },
  },
}

export const WithoutViewport: Story = {
  render: () => (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-2 p-4">
              <ListItem title="Course Management" href="#">
                Create and organize your courses efficiently.
              </ListItem>
              <ListItem title="Student Tracking" href="#">
                Monitor student progress and engagement.
              </ListItem>
              <ListItem title="Assessments" href="#">
                Build quizzes, tests, and assignments.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Navigation menu without viewport positioning. Content appears directly below the trigger without a shared viewport container.',
      },
    },
  },
}
