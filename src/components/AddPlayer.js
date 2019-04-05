import React, { useContext } from 'react'
import Player from './Player'
import PlayerContext from '../context/players-context'

const PlayerResult = ({ player, setQuery }) => {
  const { dispatch } = useContext(PlayerContext)

  const handleAdd = () => {
    dispatch({ type:'ADD_PLAYER', player })
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
