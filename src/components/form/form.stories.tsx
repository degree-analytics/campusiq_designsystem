import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form'
import { Input } from '@/components/input/input'
import { Button } from '@/components/button/button'
import { Checkbox } from '@/components/checkbox/checkbox'
import { Textarea } from '@/components/textarea/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select/select'
import { Switch } from '@/components/switch/switch'

const meta: Meta<typeof Form> = {
  title: 'Components/Form/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Form

The Form component provides a complete form management solution built on React Hook Form and Zod validation. It handles form state, validation, error messaging, and accessibility in a unified API.

Within CampusIQ, forms are used for user authentication, profile management, settings configuration, data entry workflows, and any scenario requiring structured user input with validation.

### When to Use

- When collecting structured user input with validation
- When building login, registration, or profile forms
- When configuring settings or preferences
- When validation errors need clear, accessible communication

### When NOT to Use

- For simple search inputs without validation (use Input directly)
- For single-field interactions (consider simpler patterns)
- When form state management isn't needed

### Composition

The Form system is composed of:
- **Form**: Root provider wrapping the form element
- **FormField**: Connects individual fields to form state
- **FormItem**: Container for field, label, description, and message
- **FormLabel**: Accessible label for the field
- **FormControl**: Wrapper applying accessibility attributes
- **FormDescription**: Helper text for the field
- **FormMessage**: Validation error message display

### Validation

Forms integrate with Zod schemas for:
- **Type-safe validation**: Schema-driven type inference
- **Real-time feedback**: Validation on blur or change
- **Clear messaging**: Custom error messages per field
- **Complex rules**: Cross-field validation and dependencies

### States

- **Default**: Form ready for input
- **Validating**: Real-time validation in progress
- **Valid**: All fields pass validation
- **Invalid**: One or more fields have errors
- **Submitting**: Form submission in progress

### Content Guidelines

- Group related fields logically
- Provide clear labels and descriptions
- Show validation requirements upfront when helpful
- Display errors clearly with actionable guidance

### Accessibility

- **Labeling**: FormLabel automatically associates with FormControl
- **Error association**: FormMessage linked via aria-describedby
- **Keyboard navigation**: Full Tab and Enter key support
- **Screen readers**: Announce labels, descriptions, and errors
- **Focus management**: Focus moves to first error on submission failure
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Form>

const simpleFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

function SimpleFormExample() {
  const form = useForm<z.infer<typeof simpleFormSchema>>({
    resolver: zodResolver(simpleFormSchema),
    defaultValues: {
      username: '',
    },
  })

  function onSubmit(values: z.infer<typeof simpleFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export const Default: Story = {
  render: () => <SimpleFormExample />,
  parameters: {
    docs: {
      description: {
        story: 'Basic form with a single validated field.',
      },
    },
  },
}

const loginFormSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  rememberMe: z.boolean().default(false),
})

function LoginFormExample() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  function onSubmit(values: z.infer<typeof loginFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rememberMe"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Remember me</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    </Form>
  )
}

export const LoginForm: Story = {
  render: () => <LoginFormExample />,
  parameters: {
    docs: {
      description: {
        story: 'Common login form pattern with email, password, and remember me checkbox.',
      },
    },
  },
}

const profileFormSchema = z.object({
  username: z.string().min(2).max(30),
  email: z.string().email(),
  bio: z.string().max(160).optional(),
  role: z.string({
    required_error: 'Please select a role.',
  }),
  notifications: z.boolean().default(false),
})

function ProfileFormExample() {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: '',
      email: '',
      bio: '',
      notifications: false,
    },
  })

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="johndoe" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can @mention other users and organizations.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Select your role in the organization.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Email Notifications</FormLabel>
                <FormDescription>
                  Receive emails about your account activity.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  )
}

export const ProfileForm: Story = {
  render: () => <ProfileFormExample />,
  parameters: {
    docs: {
      description: {
        story: 'Complex profile form demonstrating various field types and layouts.',
      },
    },
  },
}

const errorFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
})

function FormWithErrorsExample() {
  const form = useForm<z.infer<typeof errorFormSchema>>({
    resolver: zodResolver(errorFormSchema),
    defaultValues: {
      username: 'a',
      email: 'invalid-email',
    },
  })

  // Trigger validation on mount to show errors
  form.trigger()

  function onSubmit(values: z.infer<typeof errorFormSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export const WithErrors: Story = {
  render: () => <FormWithErrorsExample />,
  parameters: {
    docs: {
      description: {
        story: 'Form displaying validation errors with clear error messaging.',
      },
    },
  },
}
