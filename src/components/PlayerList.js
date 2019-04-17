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
    <div className="player-list">
      <h1 className="player-list__header">Your Team</h1>
      <div className="player-list__list">
        {players.length !== 0 ?
          players.sort(alphabetical).map((player) => (
            <div className="player-list__content" key={player.id}>
              <div className="player-list__player">
                <Player player={player} />
              </div>
              <div className="player-list__edit">
                <PositionForm player={player} />
                <button
                  className="button"
                  onClick={() => handleRemove(player)}
                >
                  X
                </button>
              </div>
            </div>
          ))
        :
          <div className="player-list__message">
            <p>Your team is empty.</p>
            <p>Add some players to get started!</p>
          </div>
        }
      </div>
    </div>
  )
}

export default PlayerList
