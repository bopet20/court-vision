import React, { useEffect, useReducer } from 'react'
import playersReducer from '../reducers/players'
import PlayersContext from '../context/players-context'
import Header from './Header'
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
      <Header />
      <div className="content-container">
        <Search />
        <PlayerList />
        <ScheduleOverview />
      </div>
    </PlayersContext.Provider>
  )
}

export default CourtVision
