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
    default:
      return players
  }
}

export default playersReducer
