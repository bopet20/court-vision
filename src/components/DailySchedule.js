import React, { useState, useEffect } from 'react'
import CalendarPlayer from './CalendarPlayer'
import Bench from './Bench'

const DailySchedule = ({ schedule = [], headers }) => {
  const { players, date } = schedule
  const defaultStarters = {
    pg: undefined,
    sg: undefined,
    g: undefined,
    sf: undefined,
    pf: undefined,
    f: undefined,
    c1: undefined,
    c2: undefined,
    u1: undefined,
    u2: undefined,
    bn: []
  }
  const [starters, setStarters] = useState(defaultStarters)

  useEffect(() => {
    const fillPositions = () => {
      if (players) {
        // Sorts players by amount of positions from least to greatest
        const sortedPlayers = players.sort((a, b) => (
          a.player.positionInfo.counter - b.player.positionInfo.counter
        ))
        let newStarters = { ...defaultStarters }
        sortedPlayers.forEach(({ player }) => {
          const { pg, sg, sf, pf, c } = player.positionInfo

          if (pg && !newStarters.pg) {
            newStarters.pg = player
          } else if (sg && !newStarters.sg) {
            newStarters.sg = player
          } else if ((pg || sg) && !newStarters.g) {
            newStarters.g = player
          } else if (sf && !newStarters.sf) {
            newStarters.sf = player
          } else if (pf && !newStarters.pf) {
            newStarters.pf = player
          } else if ((sf || pf) && !newStarters.f) {
            newStarters.f = player
          } else if (c && !newStarters.c1) {
            newStarters.c1 = player
          } else if (c && !newStarters.c2) {
            newStarters.c2 = player
          } else if (!newStarters.u1) {
            newStarters.u1 = player
          } else if (!newStarters.u2) {
            newStarters.u2 = player
          } else {
            newStarters.bn = [...newStarters.bn, player]
          }
        })
        setStarters(newStarters)
      }
    }
    fillPositions()
  }, [players])

  const setClassName = () => {
    if (headers) {
      return 'daily-schedule daily-schedule--headers'
    } else if (starters.bn.length !== 0) {
      return 'daily-schedule daily-schedule--alert'
    } else {
      return 'daily-schedule'
    }
  }

  return (
    <div className={setClassName()}>
      <p className="daily-schedule__item daily-schedule__item--date">
        {date ? date : 'Pos'}
      </p>
      {
        Object.keys(starters).map((position, index) => (
          <div className="daily-schedule__item" key={`${starters[position]} ${index}`}>
            {starters[position] ?
              (
                position === 'bn' ?
                  headers ?
                    <p>BN</p>
                    :
                    <Bench bench={starters[position]}/>
                :
                <CalendarPlayer player={starters[position]} />
              )
             :
              <p>{headers ? `${position.toUpperCase()}` : '-'}</p>
             }
          </div>
        ))
      }
    </div>
  )
}

export default DailySchedule