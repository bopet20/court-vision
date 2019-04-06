import React, { useContext } from 'react'
import PlayersContext from '../context/players-context'

const Player = ({ player }) => {
  const { getInfo } = useContext(PlayersContext)
  const { name, position, team } = getInfo(player)

  return (
    <>
      <p>{name}</p>
      <p>{`${team}, ${position.split('-').join(' ')}`}</p>
    </>
  )
}

export default Player
