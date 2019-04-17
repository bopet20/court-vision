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

  const startSetDates = ({ startDate, endDate }) => {
    if (endDate) {
      if (isAfterMaxDays(endDate)) {
        endDate = startDate.clone().add(maximumDays,'days')
      }
    }
    setDates({ startDate, endDate })
  }

  const onFocusChange = (focusedInput) => {
    setFocus(focusedInput)
  }

  const maximumDays = 6
  const isBeforeStart = (day) => day.isBefore(dates.startDate)
  const isAfterMaxDays = (day) => day.isAfter(dates.startDate.clone().add(maximumDays, 'days'))

  const isOutsideRange = (day) => (
    focus === 'endDate' && (isBeforeStart(day) || isAfterMaxDays(day))
  )

  return (
    <div className="schedule-overview">
      <div className="schedule-overview__header">
        <h1 className="schedule-overview__title">Schedule</h1>
        <div className="schedule-overview__playoffs">
          Playoff Week:
          <button
            className="button"
            onClick={() => setDates({
              startDate: moment('2019-03-11'),
              endDate: moment('2019-03-17')
            })}
          >
            One
          </button>
          <button
            className="button"
            onClick={() => setDates({
              startDate: moment('2019-03-18'),
              endDate: moment('2019-03-24')
            })}
          >
            Two
          </button>
          <button
            className="button"
            onClick={() => setDates({
              startDate: moment('2019-03-25'),
              endDate: moment('2019-03-31')
            })}
          >
            Three
          </button>
        </div>
        <button
          className="button button--dates"
          onClick={() => startSetDates({
            startDate: dates.startDate.clone().subtract(7, 'days'),
            endDate: dates.endDate.clone().subtract(7, 'days')
          })}
        >
          &lt;
        </button>
        <DateRangePicker
          small
          displayFormat="MMM D"
          startDate={dates.startDate}
          startDateId={'startDateId'}
          endDate={dates.endDate}
          endDateId={'endDateId'}
          onDatesChange={startSetDates}
          focusedInput={focus}
          onFocusChange={onFocusChange}
          isOutsideRange={isOutsideRange}
          firstDayOfWeek={1}
          hideKeyboardShortcutsPanel
          numberOfMonths={1}
        />
        <button
          className="button button--dates"
          onClick={() => startSetDates({
              startDate: dates.startDate.clone().add(7, 'days'),
              endDate: dates.endDate.clone().add(7, 'days')
          })}
        >
          &gt;
        </button>
      </div>
      <DailyScheduleList dates={dates} />
    </div>
  )
}

export default ScheduleOverview