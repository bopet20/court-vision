import React from 'react'

const CalendarPlayer = ({ player }) => {
  const { name, team, opponentString } = player

  return (
    <div className="daily-schedule__player" >
    <p>
      {name}
      <span className="daily-schedule__team">
        {` ${team}`}
      </span>
    </p>
    <p>
      <span className="daily-schedule__team">
       {opponentString}
      </span>
    </p>
  </div>
  )
}

export default CalendarPlayer