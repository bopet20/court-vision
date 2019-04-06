import React, { useContext } from 'react'
import Player from './Player'
import PlayerContext from '../context/players-context'

const PlayerResult = ({ player, setQuery }) => {
  const { dispatch } = useContext(PlayerContext)

  const handleAdd = () => {
    let positions = { pg: false, sg: false, sf: false, pf: false, c: false }
    if (player.position.split('-').includes('C')) {
      positions = {...positions, c: true}
    }
    dispatch({ type:'ADD_PLAYER', player: { ...player, ...positions } })
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
