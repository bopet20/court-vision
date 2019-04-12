import React, { useContext } from 'react'
import Player from './Player'
import PlayerContext from '../context/players-context'

const PlayerResult = ({ player, setQuery }) => {
  const { dispatch } = useContext(PlayerContext)

  const handleAdd = () => {
    let positionInfo = { pg: false, sg: false, sf: false, pf: false, c: false, counter: 0 }

    if (player.position.split('-').includes('C')) {
      positionInfo = { ...positionInfo, c: true, counter: 1 }
    }

    dispatch({ type:'ADD_PLAYER', player: { ...player, positionInfo } })
    setQuery('')
  }

  return (
    <div>
      <Player player={player}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default PlayerResult
