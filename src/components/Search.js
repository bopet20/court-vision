import React, { useState, useEffect, useContext } from 'react'
import PlayersContext from '../context/players-context'
import Player from './Player'

const Search = () => {
  const { players, dispatch } = useContext(PlayersContext)
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')
  const [focus, setFocus] = useState(false)

  useEffect(() => {
    const getPlayer = async () => {
      // Sometimes, the player we want isn't included in the default per_page=25
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
    } else {
      setResults([])
    }
  }, [query, players])

  const handleAdd = (player) => {
    let positionInfo = { pg: false, sg: false, sf: false, pf: false, c: false, counter: 0 }
    const positions = player.position.split('-')

    if (positions.includes('C')) {
      positionInfo = { ...positionInfo, c: true, counter: 1 }
    }

    dispatch({ type:'ADD_PLAYER', player: { ...player, positionInfo } })
    setQuery('')
  }

  return (
    <div
      className="search"
      tabIndex="0"
      onBlur={(e) => {
        if (e.relatedTarget === null || e.relatedTarget.className !== 'search') {
          setFocus(false)
        }
      }}
    >
      <span className="search-icon"/>
      <input
        className="search__input"
        type="search"
        value={query}
        placeholder="Add players"
        onChange={(e) => {
          setQuery(e.target.value)
        }}
        onFocus={() => setFocus(true)}
      />
        {focus && results.length > 0 &&
          (<div className="search__results">
            <p className="search__header">Add Player</p>
            {results.map((player) => (
              <div
                className="search__result"
                key={player.id}
                onClick={() => handleAdd(player)}
              >
                <Player search player={player}/>
              </div>
            ))}
          </div>)}
    </div>
  )
}

export default Search
