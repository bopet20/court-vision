import React, { useContext } from 'react'
import PlayersContext from '../context/players-context'
import Player from './Player'
import PositionForm from './PositionForm'
import { alphabetical } from '../utils/utils'

const PlayerList = () => {
  const { players, dispatch } = useContext(PlayersContext)

  const handleRemove = (player) => {
    dispatch( { type: 'REMOVE_PLAYER', player } )
  }

  return (
    <div>
      <p>Your team</p>
      {players.sort(alphabetical).map((player) => (
        <div className="player-card" key={player.id}>
          <Player player={player} />
          <PositionForm player={player} />
          <button onClick={() => handleRemove(player)}>X</button>
        </div>
      ))}
    </div>
  )
}

export default PlayerList
