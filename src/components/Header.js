import React, { useState, useContext } from 'react'
import Search from './Search'
import HelpModal from './HelpModal'
import PlayersContext from '../context/players-context'

const Header = () => {
  const { dispatch } = useContext(PlayersContext)
  const [modalVisible, setVisibility] = useState(false)

  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <h1 className="header__title">Court Vision</h1>
          <Search />
          <div className="header__buttons">
            <button
              className="button"
              onClick={() => setVisibility(true)}
            >
              Help
            </button>
            <button
              className="button"
              onClick={() => dispatch({ type: 'USE_DEMO_DATA' })}>
              Use Demo Data
            </button>
          </div>
        </div>
      </div>
      <HelpModal modalVisible={modalVisible} setVisibility={setVisibility}/>
    </header>
  )
}

export default Header