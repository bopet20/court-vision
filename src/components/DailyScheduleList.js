import React, { useState, useEffect, useContext } from 'react'
import moment from 'moment'
import DailySchedule from './DailySchedule'
import PlayersContext from '../context/players-context'
import { createScheduleURL } from '../utils/utils'

const DailyScheduleList = ({ dates }) => {
  const { players } = useContext(PlayersContext)
  const [schedules, setSchedules] = useState([])

  useEffect(() => {
    let teamIds = []
    players.forEach((player) => {
      if (!teamIds.includes(player.team.id)) {
        teamIds.push(player.team.id)
      }
    })
    if(dates.startDate && dates.endDate) {
      createSchedule(teamIds, dates)
    }
  }, [dates, players])

  const getGames = async (teamIds) => {
    const url = createScheduleURL(teamIds, dates)
    const response = await fetch(url)
    if (response.ok) {
      const result = await response.json()
      let games = await result.data.map((game) => {
        return {
          date: game.date,
          homeTeam: game.home_team.abbreviation,
          awayTeam: game.visitor_team.abbreviation
        }
      })
      return games
    } else {
      throw new Error('Unable to fetch games')
    }
  }

  const createSchedule = async (teamIds, { startDate, endDate }) => {
    // Add two hours, otherwise, endDate - startDate sometimes results in one less day
    endDate = endDate.add(2, 'hour')
    // Difference between startDate and endDate as days rounded up
    const amountOfDays = Math.ceil(moment.duration(endDate.diff(startDate)).as('days'))
    let newSchedules = []
    for (let i = 0; i < amountOfDays; i++) {
      newSchedules.push({ date: moment(startDate).add(i, 'd').format('MMM D'), players: [] })
    }

    const games = await getGames(teamIds)
    games.forEach((game) => {
      const daysDiff = Math.ceil(moment.duration(moment(game.date).diff(startDate)).as('days'))
      players.forEach((player) => {
        // TODO: Refactor along with getInfo
        const onHomeTeam = player.team.abbreviation === game.homeTeam
        const onAwayTeam = player.team.abbreviation === game.awayTeam
        if (onHomeTeam || onAwayTeam) {
          const opponentString = onHomeTeam ? `vs. ${game.awayTeam}` : `@${game.homeTeam}`
          let name = `${player.first_name.split('')[0]}. ${player.last_name}`
          if (name === 'S. Gilgeous-Alexander') {
            name = 'SGA'
          } else if (name === 'G. Antetokounmpo') {
            name = 'Greek Freak'
          }
          const playerAndGame = {
            ...game,
            player: {
              // name is first initial and last name
              name,
              positionInfo: player.positionInfo,
              team: player.team.abbreviation,
              opponentString
            }
          }
          newSchedules[daysDiff].players.push(playerAndGame)
        }
      })
    })
    setSchedules(newSchedules)
  }

  return (
    <div className="daily-schedule-list">
      <DailySchedule headers />
      {schedules.map((schedule, index) => (
        <DailySchedule key={schedule.date + `${index}`} schedule={schedule} />
      ))}
    </div>
  )
}

export default DailyScheduleList