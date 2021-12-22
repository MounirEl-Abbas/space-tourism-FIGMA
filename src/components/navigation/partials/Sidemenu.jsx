import React from 'react'
import MenuOptions from './MenuOptions'

const Sidemenu = ({isMenuOpen}) => {
  return (
    <nav className={`${isMenuOpen ? 'sidemenu sidemenu-open navigation': 'sidemenu navigation'}`}>
      <MenuOptions/>
    </nav>
  )
}

export default Sidemenu
