import React, { useState, useContext } from 'react'
import moment from 'moment'
import { DateRangePicker } from 'react-dates'
import PlayersContext from '../context/players-context'
import PlayerSchedule from './PlayerSchedule'

const ScheduleOverview = () => {
  const { players } = useContext(PlayersContext)
  const [dates, setDates] = useState({
    startDate: moment().startOf('week').add(1, 'day'),
    endDate: moment().endOf('week').add(1, 'day')
  })
  const [focus, setFocus] = useState(null)

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
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
      {players.map((player) => (
        <PlayerSchedule key={player.id} player={player} dates={dates}/>
      ))}
    </div>
  )
}

export default ScheduleOverview