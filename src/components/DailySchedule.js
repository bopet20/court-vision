import React, { useState, useEffect } from 'react'
import Bench from './Bench'

const DailySchedule = ({ schedule = [] }) => {
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

  return (
    <div>
      <p>{date ? date : 'Position'}</p>
      {
        Object.keys(starters).map((position, index) => (
          <React.Fragment key={`${starters[position]} ${index}`}>
            {starters[position] ?
              (
                position === 'bn' ?
                <Bench bench={starters[position]}/>
                :
                <div>
                  <p>{`${starters[position].name}, ${starters[position].team}`}</p>
                  <p>{starters[position].opponentString}</p>
                </div>
              )
             :
             <p>{`${position.toUpperCase()}`}</p>
             }
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default DailySchedule