import React, { useState, useEffect } from 'react'

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
          const { name } = player
          const { pg, sg, sf, pf, c } = player.positionInfo

          if (pg && !newStarters.pg) {
            newStarters.pg = name
          } else if (sg && !newStarters.sg) {
            newStarters.sg = name
          } else if ((pg || sg) && !newStarters.g) {
            newStarters.g = name
          } else if (sf && !newStarters.sf) {
            newStarters.sf = name
          } else if (pf && !newStarters.pf) {
            newStarters.pf = name
          } else if ((sf || pf) && !newStarters.f) {
            newStarters.f = name
          } else if (c && !newStarters.c1) {
            newStarters.c1 = name
          } else if (c && !newStarters.c2) {
            newStarters.c2 = name
          } else if (!newStarters.u1) {
            newStarters.u1 = name
          } else if (!newStarters.u2) {
            newStarters.u2 = name
          } else {
            newStarters.bn = [...newStarters.bn, name]
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
          <p key={`${starters[position]} ${index}`}>{starters[position] ? `${starters[position]}` : `${position.toUpperCase()}`}</p>
        ))
      }
    </div>
  )
}

export default DailySchedule