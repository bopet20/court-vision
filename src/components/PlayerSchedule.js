import React, { useState, useEffect } from 'react'
import { createScheduleURL } from '../utils/utils'
import moment from 'moment'
import Player from './Player'

const PlayerSchedule = ({ player, dates }) => {
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGames = async (teamId) => {
      const url = createScheduleURL(teamId, dates)
      const response = await fetch(url)
      if (response.ok) {
        const result = await response.json()
        const gamesArray = await result.data.map((game) => {
          return game.date
        })
        setGames(gamesArray)
      } else {
        throw new Error('Unable to fetch games')
      }
    }
    getGames(player.team.id)
  }, [dates])

  return (
    <div>
      {games.map((game) => (
        <React.Fragment key={game}>
          <Player player={player} />
          <p>{moment(game).format('MM/DD')}</p>
        </React.Fragment>
      ))}
    </div>
  )
}

export default PlayerSchedule