import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { DatePicker } from './date-picker'
import { Label } from '@/components/label/label'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## DatePicker

A date picker component that combines a trigger button with a calendar popover for selecting dates. Built on the Calendar and Popover components.

Within CampusIQ, date pickers are used for form inputs requiring date selection, scheduling, deadline setting, and date-based filtering.

### When to Use

- When users need to select a single date via form input
- For scheduling and appointment booking
- For setting deadlines or due dates
- When date selection needs to be compact and trigger-based

### When NOT to Use

- For selecting date ranges (use Calendar with range mode directly)
- When the calendar should always be visible (use Calendar)
- For entering dates with known exact values (use formatted Input)
- When time selection is also needed (use DateTimePicker)

### Features

- Button trigger displaying selected date or placeholder
- Popover with Calendar component
- Customizable date formatting via date-fns
- Keyboard accessible
- Focus states matching design system
- Optional disabled state
- Configurable popover alignment

### Configuration

- **date**: The currently selected date
- **onDateChange**: Callback when date is selected
- **placeholder**: Text shown when no date selected
- **dateFormat**: date-fns format string for display
- **disabled**: Disable the date picker
- **align**: Popover alignment (start, center, end)
- **calendarProps**: Props passed to underlying Calendar

### Accessibility

- **Keyboard navigation**: Tab to trigger, Enter/Space to open, arrow keys in calendar
- **Screen readers**: Announces selected date and placeholder
- **Focus management**: Auto-focuses calendar when opened
- **ARIA labels**: Proper labeling for screen reader users
        `,
      },
    },
  },
  argTypes: {
    date: {
      control: 'date',
      description: 'The selected date',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date selected',
    },
    dateFormat: {
      control: 'text',
      description: 'date-fns format string for displaying the date',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment of the popover',
    },
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  render: function DefaultStory() {
    const [date, setDate] = React.useState<Date | undefined>()

    return <DatePicker date={date} onDateChange={setDate} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic date picker with no initial selection.',
      },
    },
  },
}

export const WithSelectedDate: Story = {
  render: function WithSelectedDateStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return <DatePicker date={date} onDateChange={setDate} />
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with a pre-selected date.',
      },
    },
  },
}

export const CustomPlaceholder: Story = {
  render: function CustomPlaceholderStory() {
    const [date, setDate] = React.useState<Date | undefined>()

    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Select a due date"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with custom placeholder text.',
      },
    },
  },
}

export const CustomDateFormat: Story = {
  render: function CustomDateFormatStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        dateFormat="MM/dd/yyyy"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with custom date format (MM/dd/yyyy).',
      },
    },
  },
}

export const Disabled: Story = {
  render: function DisabledStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        disabled
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled date picker that cannot be interacted with.',
      },
    },
  },
}

export const AlignCenter: Story = {
  render: function AlignCenterStory() {
    const [date, setDate] = React.useState<Date | undefined>()

    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        align="center"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with center-aligned popover.',
      },
    },
  },
}

export const AlignEnd: Story = {
  render: function AlignEndStory() {
    const [date, setDate] = React.useState<Date | undefined>()

    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        align="end"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with end-aligned popover.',
      },
    },
  },
}

export const WithLabel: Story = {
  render: function WithLabelStory() {
    const [date, setDate] = React.useState<Date | undefined>()

    return (
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="date-picker">Date of Birth</Label>
        <DatePicker
          date={date}
          onDateChange={setDate}
          placeholder="Select your date of birth"
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with an associated label.',
      },
    },
  },
}

export const WithDisabledDates: Story = {
  render: function WithDisabledDatesStory() {
    const [date, setDate] = React.useState<Date | undefined>()

    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Select a weekday"
        calendarProps={{
          disabled: (date) =>
            date < new Date() || date.getDay() === 0 || date.getDay() === 6,
        }}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with weekends and past dates disabled.',
      },
    },
  },
}

export const WithYearDropdowns: Story = {
  render: function WithYearDropdownsStory() {
    const [date, setDate] = React.useState<Date | undefined>()

    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        placeholder="Select a date"
        calendarProps={{
          captionLayout: "dropdown",
          fromYear: 1900,
          toYear: new Date().getFullYear(),
        }}
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with month/year dropdown navigation for quick access to dates far in the past.',
      },
    },
  },
}

export const CompactWidth: Story = {
  render: function CompactWidthStory() {
    const [date, setDate] = React.useState<Date | undefined>()

    return (
      <DatePicker
        date={date}
        onDateChange={setDate}
        className="w-[200px]"
        dateFormat="MM/dd/yy"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker with compact width using shorter date format.',
      },
    },
  },
}

export const InFormContext: Story = {
  render: function InFormContextStory() {
    const [startDate, setStartDate] = React.useState<Date | undefined>()
    const [endDate, setEndDate] = React.useState<Date | undefined>()

    return (
      <div className="grid w-full max-w-sm gap-4">
        <div className="grid gap-1.5">
          <Label>Start Date</Label>
          <DatePicker
            date={startDate}
            onDateChange={setStartDate}
            placeholder="Select start date"
          />
        </div>
        <div className="grid gap-1.5">
          <Label>End Date</Label>
          <DatePicker
            date={endDate}
            onDateChange={setEndDate}
            placeholder="Select end date"
            calendarProps={{
              disabled: (date) => startDate ? date < startDate : false,
            }}
          />
        </div>
        <div className="text-sm text-muted-foreground">
          {startDate && endDate && (
            <p>
              Selected range: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Two date pickers used together for start/end date selection, with the end date constrained to be after the start date.',
      },
    },
  },
}
