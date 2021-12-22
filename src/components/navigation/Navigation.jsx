import React, { useState } from 'react'
import Sidemenu from './partials/Sidemenu'
import Navbar from './partials/Navbar'
import MenuBtn from './partials/MenuBtn'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='nav-container'>
      <MenuBtn
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
        <Navbar />
        <Sidemenu isMenuOpen={isMenuOpen}/>
        
    </div>
  )
}

export default Navigation
