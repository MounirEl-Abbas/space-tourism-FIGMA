import React from 'react'
import Hamburger from '../../../assets/shared/icon-hamburger.svg'
import Cross from '../../../assets/shared/icon-close.svg'

const MenuBtn = ({isMenuOpen, setIsMenuOpen }) => {
  return (
    <div id='menu-btn'>
        {isMenuOpen ? 
          <img src={Cross} alt="" onClick={() => setIsMenuOpen(false)}/>
          :
          <img src={Hamburger} alt="" onClick={() => setIsMenuOpen(true)}/>
         }
      </div>
  )
}

export default MenuBtn
