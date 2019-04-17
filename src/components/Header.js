import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <h1 className="header__title">Court Vision</h1>
          <Search />
        </div>
      </div>
    </header>
  )
}

export default Header