import React, { useEffect, useReducer } from 'react'
import playersReducer from '../reducers/players'
import PlayersContext from '../context/players-context'
import Search from './Search'
import PlayerList from './PlayerList'
import ScheduleOverview from './ScheduleOverview'
import { getInfo } from '../utils/utils'

const CourtVision = () => {
  const [players, dispatch] = useReducer(playersReducer, [])

  useEffect(() => {
    const players = JSON.parse(localStorage.getItem('players'))
    if (players) {
      dispatch({ type: 'POPULATE_PLAYERS', players })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players))
  }, [players])

  return (
    <PlayersContext.Provider value={{ players, dispatch, getInfo }}>
      <h1>Court Vision</h1>
      <ScheduleOverview />
      <PlayerList />
      <Search />
    </PlayersContext.Provider>
  )
}

export default CourtVision
