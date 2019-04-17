import React, { useContext } from 'react'
import PlayersContext from '../context/players-context'

const Player = ({ search, player }) => {
  const { getInfo } = useContext(PlayersContext)
  const { name, position, team } = getInfo(player)

  const setClassName = () => {
    if (search) {
      return 'player-card__positions player-card__positions--search'
    } else {
      return 'player-card__positions'
    }
  }

  return (
    <div className="player-card">
      <p className="player-card__name">
      {name}
      {search && ' - '}
      <span className="player-card__team"> {team}</span>
      {search && ', '}
      <span className={setClassName()}>{`${position.split('-').join(' ')}`}</span>
      </p>
    </div>
  )
}

export default Player
