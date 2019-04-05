import React, { useEffect, useReducer } from 'react'
import playersReducer from '../reducers/players'
import PlayersContext from '../context/players-context'
import Search from './Search'
import PlayerList from './PlayerList'

const CourtVision = () => {
  const [players, dispatch] = useReducer(playersReducer, [])

  const getInfo = ({ first_name, last_name, position, team }) => ({
     name:`${first_name} ${last_name}`,
     position,
     team: team.abbreviation
  })

  useEffect(() => {
    const players = []
    if (players) {
      dispatch({ type: 'POPULATE_PLAYERS', players })
    }
  }, [])

  return (
    <PlayersContext.Provider value={{ players, dispatch, getInfo }}>
      <h1>Court Vision</h1>
      <PlayerList />
      <Search />
    </PlayersContext.Provider>
  )
}

export default CourtVision
