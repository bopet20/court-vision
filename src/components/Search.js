import React, { useState, useEffect, useContext } from 'react'
import PlayersContext from '../context/players-context'
import AddPlayer from './AddPlayer'

const Search = () => {
  const { players } = useContext(PlayersContext)
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const getPlayer = async () => {
      // sometimes, the player we want isn't included in the default per_page=25
      const response = await fetch(`https://www.balldontlie.io/api/v1/players/?search=${query}&per_page=50`)

      if (response.ok) {
        const result = await response.json()

        // Checks if player in result is in user's team
        const playerInTeam = (result) => (
          players.find((player) => (
            result.id === player.id
          ))
        )

        // Filter for players in team and players with no positions because
        // that means the player is not currently in the league
        const filteredPlayers = result.data.filter((player) => (
          !playerInTeam(player) && player.position)
        )
        setResults(filteredPlayers)
      } else {
        throw new Error('Unable to fetch players')
      }
    }
    if(query.length > 2){
      getPlayer()
    }
  }, [query])

  return (
    <div>
      <input
      type="text"
      value={query}
      placeholder="Search for players"
      onChange={(e) => {
        setQuery(e.target.value)
      }}
      />
      <p>Results:</p>
      {query.length > 2 && results.map((player) => (
        <AddPlayer key={player.id} player={player} setQuery={setQuery}/>
      ))}
    </div>
  )
}

export default Search
