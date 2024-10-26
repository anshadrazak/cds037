import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='headermainctr'>
        <div className='headergrids blank'></div>
        <div className='headergrids logo'>LOGO</div>
        <div className='headergrids blank'></div>
        <a href='/'><div className='headergrids home'>HOME</div></a>
        <a href='/mainlogin'><div className='headergrids login'>LOGIN</div></a>
        <div className='headergrids dashboard'>DASHBOARD</div>
        <div className='headergrids blank'></div>
    </div>
  )
}

export default Header