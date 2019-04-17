import React, { useContext } from 'react'
import PlayersContext from '../context/players-context'

const PositionForm = ({ player }) => {
  const { dispatch } = useContext(PlayersContext)

  const updatePosition = (e, id) => {
    const position = e.target.name
    const value = e.target.checked

    // if checked, increment position counter
    // else, decrement
    let counter = player.positionInfo.counter
    if (value) {
      counter = counter + 1
    } else {
      counter = counter - 1
    }
    dispatch({ type:'UPDATE_PLAYER', id, updates: { [position]: value, counter } })
  }

  return (
    <form>
      <div>
        <label>
          <input
            name="pg"
            type="checkbox"
            checked={player.positionInfo.pg}
            onChange={(e) => updatePosition(e, player.id)}
          />
          PG
        </label>
        <label>
          <input
            name="sg"
            type="checkbox"
            checked={player.positionInfo.sg}
            onChange={(e) => updatePosition(e, player.id)}
          />
          SG
        </label>
      </div>
      <div>
      <label>
          <input
            name="sf"
            type="checkbox"
            checked={player.positionInfo.sf}
            onChange={(e) => updatePosition(e, player.id)}
          />
          SF
        </label>
        <label>
          <input
            name="pf"
            type="checkbox"
            checked={player.positionInfo.pf}
            onChange={(e) => updatePosition(e, player.id)}
          />
          PF
        </label>
      </div>
    </form>
    )
}

export default PositionForm