import React, { useEffect, useReducer } from 'react'
import playersReducer from '../reducers/players'
import PlayersContext from '../context/players-context'
import Search from './Search'
import PlayerList from './PlayerList'

const CourtVision = () => {
  const [players, dispatch] = useReducer(playersReducer, [])

  const getInfo = ({ id, first_name, last_name, position, team, pg, sg, sf, pf, c }) => {
    if (pg || sg || sf || pf) {
      position = ''
      if (pg) {
        position = position + 'PG-'
      }
      if (sg) {
        position = position + 'SG-'
      }
      if (sf) {
        position = position + 'SF-'
      }
      if (pf) {
        position = position + 'PF-'
      }
      if (c) {
        position = position + 'C'
      }
    }

    return {
      id,
      name:`${first_name} ${last_name}`,
      position,
      team: team.abbreviation
    }
  }

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
      <PlayerList />
      <Search />
    </PlayersContext.Provider>
  )
}

export default CourtVision
