import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Calendar } from './calendar'
import type { DateRange } from 'react-day-picker'

const meta: Meta = {
  title: 'Components/Form/Calendar',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Calendar

The Calendar component provides a date picker interface for selecting single dates, date ranges, or multiple dates. Built on react-day-picker, it offers comprehensive date selection capabilities.

Within CampusIQ, calendars are used for scheduling, date filtering, report date ranges, event selection, and any scenario requiring date input.

### When to Use

- When users need to select a specific date
- When selecting a date range (start and end dates)
- When selecting multiple individual dates
- When visual date navigation is beneficial

### When NOT to Use

- For entering dates with exact known values (use formatted Input)
- When time selection is also needed (use DateTimePicker)
- For simple relative date choices (use Select with options)
- When the date context is clear without a calendar

### Selection Modes

- **single**: Select one date (default)
- **range**: Select a start and end date
- **multiple**: Select multiple individual dates

### Configuration

- **numberOfMonths**: Show multiple months side by side
- **showWeekNumber**: Display week numbers
- **showOutsideDays**: Show days from adjacent months
- **captionLayout**: Navigation style (buttons or dropdown)
- **fromYear/toYear**: Limit selectable year range
- **disabled**: Function or dates to disable

### States

- **Default**: No date selected
- **Selected**: Date(s) highlighted
- **Hover**: Day highlight on hover
- **Focused**: Keyboard focus indicator
- **Today**: Current date indicator
- **Disabled**: Non-selectable dates

### Content Guidelines

- Provide clear context for what the date selection is for
- Consider showing the selected date near the calendar
- Use appropriate month navigation for the use case
- Consider date format localization needs

### Accessibility

- **Keyboard navigation**: Arrow keys navigate days, Page Up/Down for months
- **Screen readers**: Announce selected date, current month, and navigation
- **Focus management**: Clear focus indicators on days
- **Date announcement**: Full date announced on selection
- **Disabled dates**: Clearly indicated and skipped in navigation
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: function DefaultStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic single date selection calendar.',
      },
    },
  },
}

export const WithRange: Story = {
  render: function WithRangeStory() {
    const [date, setDate] = React.useState<DateRange | undefined>({
      from: new Date(2024, 0, 20),
      to: new Date(2024, 0, 28),
    })

    return (
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Date range selection with two months displayed.',
      },
    },
  },
}

export const Multiple: Story = {
  render: function MultipleStory() {
    const [dates, setDates] = React.useState<Date[] | undefined>([
      new Date(2024, 0, 10),
      new Date(2024, 0, 15),
      new Date(2024, 0, 20),
    ])

    return (
      <Calendar
        mode="multiple"
        selected={dates}
        onSelect={setDates}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple individual dates can be selected.',
      },
    },
  },
}

export const WithDisabledDates: Story = {
  render: function WithDisabledDatesStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={(date) =>
          date < new Date() || date.getDay() === 0 || date.getDay() === 6
        }
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Weekends and past dates are disabled and non-selectable.',
      },
    },
  },
}

export const TwoMonths: Story = {
  render: function TwoMonthsStory() {
    const [date, setDate] = React.useState<DateRange | undefined>()

    return (
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Two months displayed for easier range selection.',
      },
    },
  },
}

export const WithDropdowns: Story = {
  render: function WithDropdownsStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
        fromYear={2020}
        toYear={2030}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Dropdown navigation for quick month/year selection.',
      },
    },
  },
}

export const WithWeekNumbers: Story = {
  render: function WithWeekNumbersStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showWeekNumber
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Week numbers displayed for business scheduling contexts.',
      },
    },
  },
}

export const WithoutOutsideDays: Story = {
  render: function WithoutOutsideDaysStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        showOutsideDays={false}
        className="rounded-md border"
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Adjacent month days hidden for cleaner appearance.',
      },
    },
  },
}

export const WithFooter: Story = {
  render: function WithFooterStory() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <div className="rounded-md border p-3">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
        <div className="mt-3 border-t pt-3 text-center text-sm">
          {date ? (
            <p>
              Selected: <span className="font-medium">{date.toLocaleDateString()}</span>
            </p>
          ) : (
            <p className="text-muted-foreground">Please pick a date</p>
          )}
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Calendar with footer showing selected date.',
      },
    },
  },
}

export const DateRangePicker: Story = {
  render: function DateRangePickerStory() {
    const [date, setDate] = React.useState<DateRange | undefined>()

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Selected range:</span>
          {date?.from ? (
            date.to ? (
              <span className="font-medium">
                {date.from.toLocaleDateString()} - {date.to.toLocaleDateString()}
              </span>
            ) : (
              <span className="font-medium">{date.from.toLocaleDateString()}</span>
            )
          ) : (
            <span className="text-muted-foreground">Not selected</span>
          )}
        </div>
        <Calendar
          mode="range"
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          className="rounded-md border"
        />
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete date range picker with display of selected range.',
      },
    },
  },
}
