import React, { useContext } from 'react'
import PlayersContext from '../context/players-context'

const PositionForm = ({ player }) => {
  const { dispatch } = useContext(PlayersContext)

  const updatePosition = (e, id) => {
    const position = e.target.name
    const value = e.target.checked
    dispatch({ type:'UPDATE_PLAYER', id, updates: { [position]: value } })
  }

  return (
    <form>
      <label>
          PG
          <input
            name="pg"
            type="checkbox"
            checked={player.positionBools.pg}
            onChange={(e) => updatePosition(e, player.id)}
          />
        </label>
        <label>
          SG
          <input
            name="sg"
            type="checkbox"
            checked={player.positionBools.sg}
            onChange={(e) => updatePosition(e, player.id)}
          />
        </label>
        <label>
          SF
          <input
            name="sf"
            type="checkbox"
            checked={player.positionBools.sf}
            onChange={(e) => updatePosition(e, player.id)}
          />
        </label>
        <label>
          PF
          <input
            name="pf"
            type="checkbox"
            checked={player.positionBools.pf}
            onChange={(e) => updatePosition(e, player.id)}
          />
        </label>
      </form>
    )
}

export default PositionForm