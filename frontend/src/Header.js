import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='headermainctr'>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <div className='headergrids blank'></div>
        <a href='/'><div className='headergrids logo'>FARMILY</div></a>
        <div className='headergrids blank'></div>
        <a href='/'><div className='headergrids home'>HOME</div></a>
        <a href='/mainlogin'><div className='headergrids login'>LOGIN</div></a>
        <div className='headergrids dashboard'>DASHBOARD</div>
        <div className='headergrids blank'></div>
    </div>
  )
}

export default Header