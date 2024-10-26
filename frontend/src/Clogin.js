import React from 'react'
import './Clogin.css'

const Clogin = () => {
  return (
    <div className='clogin'>
        <div className='clmaindiv'>
            <form>
                <p>Username</p>
                <input type='text'></input>
                <p>Password</p>
                <input type='password'></input><br></br><br></br>
                <button className='submitbtn' type='submit'>SIGNIN</button>
                <p>OR</p>
                <a href='/'><button>SIGNUP</button></a>
            </form>
        </div>
    </div>
  )
}

export default Clogin