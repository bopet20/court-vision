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
          player.positionInfo = {...player.positionInfo, ...action.updates}
          return player
        } else {
          return player
        }
      })
    case 'USE_DEMO_DATA':
      return demoPlayers;
    default:
      return players
  }
}

const demoPlayers = [{"id":137,"first_name":"Andre","height_feet":6,"height_inches":11,"last_name":"Drummond","position":"C","team":{"id":9,"abbreviation":"DET","city":"Detroit","conference":"East","division":"Central","full_name":"Detroit Pistons","name":"Pistons"},"weight_pounds":279,"positionInfo":{"pg":false,"sg":false,"sf":false,"pf":true,"c":true,"counter":2}},{"id":22,"first_name":"Deandre","height_feet":7,"height_inches":1,"last_name":"Ayton","position":"C","team":{"id":24,"abbreviation":"PHX","city":"Phoenix","conference":"West","division":"Pacific","full_name":"Phoenix Suns","name":"Suns"},"weight_pounds":250,"positionInfo":{"pg":false,"sg":false,"sf":false,"pf":false,"c":true,"counter":1}},{"id":473,"first_name":"Derrick","height_feet":6,"height_inches":4,"last_name":"White","position":"G","team":{"id":27,"abbreviation":"SAS","city":"San Antonio","conference":"West","division":"Southwest","full_name":"San Antonio Spurs","name":"Spurs"},"weight_pounds":190,"positionInfo":{"pg":true,"sg":true,"sf":false,"pf":false,"c":false,"counter":2}},{"id":9,"first_name":"Jarrett","height_feet":6,"height_inches":11,"last_name":"Allen","position":"C","team":{"id":3,"abbreviation":"BKN","city":"Brooklyn","conference":"East","division":"Atlantic","full_name":"Brooklyn Nets","name":"Nets"},"weight_pounds":237,"positionInfo":{"pg":false,"sg":false,"sf":false,"pf":true,"c":true,"counter":2}},{"id":391,"first_name":"Josh","height_feet":6,"height_inches":6,"last_name":"Richardson","position":"G-F","team":{"id":16,"abbreviation":"MIA","city":"Miami","conference":"East","division":"Southeast","full_name":"Miami Heat","name":"Heat"},"weight_pounds":200,"positionInfo":{"pg":true,"sg":true,"sf":true,"pf":false,"c":false,"counter":3}},{"id":447,"first_name":"Karl-Anthony","height_feet":7,"height_inches":0,"last_name":"Towns","position":"C","team":{"id":18,"abbreviation":"MIN","city":"Minnesota","conference":"West","division":"Northwest","full_name":"Minnesota Timberwolves","name":"Timberwolves"},"weight_pounds":248,"positionInfo":{"pg":false,"sg":false,"sf":false,"pf":false,"c":true,"counter":1}},{"id":274,"first_name":"Kawhi","height_feet":6,"height_inches":7,"last_name":"Leonard","position":"F","team":{"id":28,"abbreviation":"TOR","city":"Toronto","conference":"East","division":"Atlantic","full_name":"Toronto Raptors","name":"Raptors"},"weight_pounds":230,"positionInfo":{"pg":false,"sg":true,"sf":true,"pf":false,"c":false,"counter":2}},{"id":228,"first_name":"Kyrie","height_feet":6,"height_inches":3,"last_name":"Irving","position":"G","team":{"id":2,"abbreviation":"BOS","city":"Boston","conference":"East","division":"Atlantic","full_name":"Boston Celtics","name":"Celtics"},"weight_pounds":193,"positionInfo":{"pg":true,"sg":true,"sf":false,"pf":false,"c":false,"counter":2}},{"id":193,"first_name":"Maurice","height_feet":6,"height_inches":9,"last_name":"Harkless","position":"F","team":{"id":25,"abbreviation":"POR","city":"Portland","conference":"West","division":"Northwest","full_name":"Portland Trail Blazers","name":"Trail Blazers"},"weight_pounds":220,"positionInfo":{"pg":false,"sg":false,"sf":true,"pf":false,"c":false,"counter":1}},{"id":399,"first_name":"Mitchell","height_feet":7,"height_inches":1,"last_name":"Robinson","position":"C","team":{"id":20,"abbreviation":"NYK","city":"New York","conference":"East","division":"Atlantic","full_name":"New York Knicks","name":"Knicks"},"weight_pounds":240,"positionInfo":{"pg":false,"sg":false,"sf":false,"pf":false,"c":true,"counter":1}},{"id":452,"first_name":"Myles","height_feet":6,"height_inches":11,"last_name":"Turner","position":"C-F","team":{"id":12,"abbreviation":"IND","city":"Indiana","conference":"East","division":"Central","full_name":"Indiana Pacers","name":"Pacers"},"weight_pounds":250,"positionInfo":{"pg":false,"sg":false,"sf":false,"pf":true,"c":true,"counter":2}},{"id":321,"first_name":"Nikola","height_feet":6,"height_inches":10,"last_name":"Mirotic","position":"F","team":{"id":17,"abbreviation":"MIL","city":"Milwaukee","conference":"East","division":"Central","full_name":"Milwaukee Bucks","name":"Bucks"},"weight_pounds":250,"positionInfo":{"pg":false,"sg":false,"sf":true,"pf":true,"c":false,"counter":2}},{"id":108,"first_name":"Robert","height_feet":6,"height_inches":9,"last_name":"Covington","position":"F","team":{"id":18,"abbreviation":"MIN","city":"Minnesota","conference":"West","division":"Northwest","full_name":"Minnesota Timberwolves","name":"Timberwolves"},"weight_pounds":225,"positionInfo":{"pg":false,"sg":false,"sf":true,"pf":true,"c":false,"counter":2}}]

export default playersReducer
