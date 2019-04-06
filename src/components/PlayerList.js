import React, { useContext } from 'react'
import PlayersContext from '../context/players-context'
import Player from './Player'
import PositionForm from './PositionForm'

const PlayerList = () => {
  const { players, dispatch } = useContext(PlayersContext)

  const handleRemove = (player) => {
    dispatch( { type: 'REMOVE_PLAYER', player } )
  }

  return (
    <div>
      <p>Your team</p>
      {players.map((player) => (
        <React.Fragment key={player.id}>
          <Player player={player} />
          <PositionForm player={player} />
          <button onClick={() => handleRemove(player)}>X</button>
        </React.Fragment>
      ))}
    </div>
  )
}

export default PlayerList
