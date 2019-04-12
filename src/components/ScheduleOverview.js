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

  const onDatesChange = ({ startDate, endDate }) => {
    setDates({ startDate, endDate })
  }

  const onFocusChange = (focusedInput) => {
    setFocus(focusedInput)
  }

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
        isOutsideRange={() => false}
        firstDayOfWeek={1}
      />
      <DailyScheduleList dates={dates} />
      {/* {players.map((player) => (
        <PlayerSchedule key={player.id} player={player} dates={dates}/>
      ))} */}
    </div>
  )
}

export default ScheduleOverview