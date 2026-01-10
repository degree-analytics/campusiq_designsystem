import type { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'
import { Calendar } from './calendar'
import type { DateRange } from 'react-day-picker'

const meta: Meta = {
  title: 'Components/Form/Calendar',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
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
}
