import React from 'react'

import './Mlogin.css'

const Mainlogin = () => {
  return (
    <div className='mlmaindiv'>
        <div className='ltxtsdiv'>
                    <a href='/customerlogin'>
                    <div className='lcustomerbtn'>
                        <h3 >Are you a Customer?</h3>
                        <p>Click here</p>
                    </div></a>
                    <a href='/farmerlogin'>
                    <div className='lfarmerbtn'>
                        <h3 >Are you a Farmer?</h3>
                        <p>Click here</p>
                    </div></a>
        </div>
    </div>
  )
}

export default Mainlogin