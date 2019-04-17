import React from 'react'
import CalendarPlayer from './CalendarPlayer'

const Bench = ({ bench }) => {
  return (
    <div>
      {
        bench.length === 0 ?
        <p>-</p>
        :
        <div>
          {
            bench.map((player) => (
              <CalendarPlayer key={player} player={player} />
            ))
          }
        </div>
      }
    </div>
  )
}

export default Bench