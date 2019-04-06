const playersReducer = (players, action) => {
  switch(action.type) {
    case 'POPULATE_PLAYERS':
      return action.players
    case 'ADD_PLAYER':
      return [...players, action.player]
    case 'REMOVE_PLAYER':
      return players.filter((player) =>
        player.id !== action.player.id
      )
    case 'UPDATE_PLAYER':
      return players.map((player) => {
        if (player.id === action.id) {
          player.positionBools = {...player.positionBools, ...action.updates}
          return player
        } else {
          return player
        }
      })
    default:
      return players
  }
}

export default playersReducer
