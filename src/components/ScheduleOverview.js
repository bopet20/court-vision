import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
import DailyScheduleList from './DailyScheduleList'

const ScheduleOverview = () => {
  const [dates, setDates] = useState({startDate: undefined, endDate: undefined})
  const [focus, setFocus] = useState(null)

  useEffect(() => {
    setDates({
      startDate: moment().startOf('isoWeek'),
      endDate: moment().endOf('isoWeek').subtract(8, 'hours')
    })
  }, [])

  const onFocusChange = (focusedInput) => {
    setFocus(focusedInput)
  }

  const maximumDays = 6
  const isBeforeStart = (day) => day.isBefore(dates.startDate)
  const isAfterMaxDays = (day) => day.isAfter(dates.startDate.clone().add(maximumDays, 'days'))

  const onDatesChange = ({ startDate, endDate }) => {
    if (endDate) {
      if (isAfterMaxDays(endDate)) {
        endDate = startDate.clone().add(maximumDays,'days')
      }
    }
    setDates({ startDate, endDate })
  }

  const isOutsideRange = (day) => (
    focus === 'endDate' && (isBeforeStart(day) || isAfterMaxDays(day))
  )

  return (
    <div>
      <DateRangePicker
        startDate={dates.startDate}
        startDateId={'startDateId'}
        endDate={dates.endDate}
        endDateId={'endDateId'}
        onDatesChange={onDatesChange}
        focusedInput={focus}
        onFocusChange={onFocusChange}
        isOutsideRange={isOutsideRange}
        firstDayOfWeek={1}
      />
      <DailyScheduleList dates={dates} />
    </div>
  )
}

export default ScheduleOverview