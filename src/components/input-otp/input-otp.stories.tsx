import type { Meta, StoryObj } from '@storybook/react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from './input-otp'

const meta: Meta = {
  title: 'Components/Form/InputOTP',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## InputOTP

The InputOTP component provides a specialized input for one-time passwords and verification codes. It offers individual character slots with automatic focus management and input validation.

Within CampusIQ, InputOTP is used for two-factor authentication, email verification, phone number verification, and any secure code entry scenario.

### When to Use

- When users need to enter verification codes
- When implementing two-factor authentication
- When confirming email or phone number ownership
- When secure one-time password entry is required

### When NOT to Use

- For regular password entry (use Input with type="password")
- For credit card numbers (use specialized card input)
- For general text or numeric input (use Input)
- When the code format is variable length

### Composition

InputOTP is composed of:
- **InputOTP**: Root component managing state and validation
- **InputOTPGroup**: Groups slots together visually
- **InputOTPSlot**: Individual character input slot
- **InputOTPSeparator**: Visual separator between groups

### Configuration

- **maxLength**: Total number of characters allowed
- **pattern**: Regex pattern for input validation (e.g., numbers only)
- **disabled**: Prevents all input

### Common Patterns

- **6-digit code**: Standard verification code length
- **4-digit PIN**: Short numeric codes
- **Split groups**: 3-3 or 2-2-2 separations for readability

### States

- **Empty**: No characters entered, focus on first slot
- **Partial**: Some characters entered, focus on next slot
- **Complete**: All characters entered
- **Disabled**: Non-interactive, visually muted
- **Focused**: Current slot highlighted

### Content Guidelines

- Provide clear instructions about the code source
- Show remaining time if code expires
- Offer resend option for expired codes
- Display clear error messages for invalid codes

### Accessibility

- **Keyboard navigation**: Tab/Shift+Tab between components, auto-advance on input
- **Screen readers**: Announce code length, current position, and input characters
- **Paste support**: Automatically fills slots when pasting full code
- **Backspace handling**: Clears current slot and moves focus backward
- **Focus management**: Visual focus indicator on active slot
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Standard 6-digit verification code input.',
      },
    },
  },
}

export const FourDigits: Story = {
  render: () => (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  ),
  parameters: {
    docs: {
      description: {
        story: '4-digit PIN or short verification code.',
      },
    },
  },
}

export const WithSeparator: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Split layout with separator for improved readability.',
      },
    },
  },
}

export const MultipleSeparators: Story = {
  render: () => (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
  parameters: {
    docs: {
      description: {
        story: '2-2-2 split pattern for specific code formats.',
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <InputOTP maxLength={6} disabled>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
}

export const WithPattern: Story = {
  render: () => (
    <div className="space-y-2">
      <label className="text-sm font-medium">Numbers only</label>
      <InputOTP maxLength={6} pattern="^[0-9]+$">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Pattern validation restricts input to numbers only.',
      },
    },
  },
}

export const VerificationExample: Story = {
  render: () => (
    <div className="space-y-4 text-center">
      <div>
        <h3 className="text-lg font-semibold">Enter verification code</h3>
        <p className="text-sm text-muted-foreground">
          We sent a code to your email address
        </p>
      </div>
      <div className="flex justify-center">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <p className="text-sm text-muted-foreground">
        Did not receive the code?{' '}
        <button className="text-primary underline">Resend</button>
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete email verification flow with context and resend option.',
      },
    },
  },
}

export const PhoneVerification: Story = {
  render: () => (
    <div className="w-[300px] space-y-4 rounded-lg border p-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
      <div>
        <h3 className="font-semibold">Verify your phone</h3>
        <p className="text-sm text-muted-foreground">
          Enter the 4-digit code sent to +1 (555) 000-0000
        </p>
      </div>
      <div className="flex justify-center">
        <InputOTP maxLength={4}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <button className="w-full rounded-md bg-primary py-2 text-sm text-primary-foreground">
        Verify
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Phone verification modal with 4-digit code.',
      },
    },
  },
}

export const TwoFactorAuth: Story = {
  render: () => (
    <div className="w-[350px] space-y-4 rounded-lg border p-6">
      <div className="space-y-1">
        <h3 className="text-lg font-semibold">Two-factor authentication</h3>
        <p className="text-sm text-muted-foreground">
          Enter the 6-digit code from your authenticator app
        </p>
      </div>
      <div className="flex justify-center py-2">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex gap-2">
        <button className="flex-1 rounded-md border py-2 text-sm">
          Cancel
        </button>
        <button className="flex-1 rounded-md bg-primary py-2 text-sm text-primary-foreground">
          Continue
        </button>
      </div>
      <p className="text-center text-xs text-muted-foreground">
        Lost access to your authenticator?{' '}
        <button className="text-primary underline">Use backup code</button>
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Two-factor authentication dialog with authenticator app code.',
      },
    },
  },
}
