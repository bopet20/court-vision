import React, { useEffect, useReducer } from 'react'
import playersReducer from '../reducers/players'
import PlayersContext from '../context/players-context'
import Search from './Search'
import PlayerList from './PlayerList'
import { createPositionString } from '../utils/utils'

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

  const getInfo = ({ id, first_name, last_name, position, team, positionBools }) => {
    if (positionBools) {
      const {pg, sg, sf, pf } = positionBools

      if (pg || sg || sf || pf) {
        position = createPositionString(positionBools)
      }
    }

    return {
      id,
      name:`${first_name} ${last_name}`,
      position,
      team: team.abbreviation
    }
  }

  return (
    <PlayersContext.Provider value={{ players, dispatch, getInfo }}>
      <h1>Court Vision</h1>
      <PlayerList />
      <Search />
    </PlayersContext.Provider>
  )
}

export default CourtVision
