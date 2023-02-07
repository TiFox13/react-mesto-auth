import React from 'react';
import mestoLogo from '../images/header-logo.svg'

function Header({children}) {
  return (
    <header className="header">
      <img className="header__logo" src={mestoLogo} alt="логотип Место" />
      {children}
    </header>
  )
}

export default Header;
