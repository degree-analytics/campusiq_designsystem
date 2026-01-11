import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarImage, AvatarFallback } from './avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Avatar

An image element with a fallback for representing the user. Built on Radix UI Avatar primitive.

### When to Use
- User profile pictures and thumbnails
- Author attribution in comments or posts
- Team member displays
- Contact lists and user directories
- Navigation bars showing logged-in user
- Chat and messaging interfaces

### When NOT to Use
- For decorative images (use img directly)
- When the image is the primary content (use Image or AspectRatio)
- For icons or logos (use Icon component)

### Accessibility
- Always provide meaningful alt text for images
- Fallback text should be initials or meaningful abbreviation
- Ensure sufficient color contrast for fallback backgrounds
- Consider adding aria-label for additional context
- Group avatars should have a group label

### Size Variants
- **xs**: 24px - Compact contexts like inline mentions
- **sm**: 32px - Default size, lists and comments
- **md**: 40px - Standard UI contexts
- **lg**: 48px - Profile cards and headers
- **xl**: 64px - Profile pages and settings
- **2xl**: 80px - Large profile displays

### Best Practices
- Use consistent sizes across similar contexts
- Provide fallbacks for when images fail to load
- Consider lazy loading for avatar groups
- Use appropriate image formats and sizes
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'The size of the avatar',
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const WithImage: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="User avatar"
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
          alt="User avatar"
        />
        <AvatarFallback>JS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
          alt="User avatar"
        />
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const WithFallback: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="@user1" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="@user2" />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/broken-image.jpg" alt="@user3" />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const FallbackOnly: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>RK</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="xs">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-[10px]">CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">xs (24px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-xs">CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">sm (32px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="md">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">md (40px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">lg (48px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-lg">CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">xl (64px)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="2xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback className="text-xl">CN</AvatarFallback>
        </Avatar>
        <span className="text-xs text-muted-foreground">2xl (80px)</span>
      </div>
    </div>
  ),
}

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-3">
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          alt="User 1"
        />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
          alt="User 2"
        />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
          alt="User 3"
        />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarFallback>+5</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const AvatarGroupSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Small Group</p>
        <div className="flex -space-x-2">
          {['U1', 'U2', 'U3', '+3'].map((fallback, i) => (
            <Avatar key={i} size="xs" className="ring-2 ring-background">
              <AvatarFallback className="text-[10px]">{fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Medium Group</p>
        <div className="flex -space-x-3">
          {['U1', 'U2', 'U3', '+3'].map((fallback, i) => (
            <Avatar key={i} size="md" className="ring-2 ring-background">
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Large Group</p>
        <div className="flex -space-x-4">
          {['U1', 'U2', 'U3', '+3'].map((fallback, i) => (
            <Avatar key={i} size="lg" className="ring-2 ring-background">
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </div>
    </div>
  ),
}

export const WithStatusIndicator: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="relative">
        <Avatar size="md">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 size-3 rounded-full bg-success ring-2 ring-background" />
      </div>
      <div className="relative">
        <Avatar size="md">
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 size-3 rounded-full bg-muted-foreground ring-2 ring-background" />
      </div>
      <div className="relative">
        <Avatar size="md">
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 size-3 rounded-full bg-warning ring-2 ring-background" />
      </div>
      <div className="relative">
        <Avatar size="lg">
          <AvatarFallback>EF</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 size-4 rounded-full bg-destructive ring-2 ring-background" />
      </div>
    </div>
  ),
}
