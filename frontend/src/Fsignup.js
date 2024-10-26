import React from 'react'
import './Csignup.css'

const Fsignup = () => {
  return (
    <div className='csignup'>
        <div className='csmaindiv'>
            <form>
                <p>Username</p>
                <input type='text'></input>
                <p>Password</p>
                <input type='password'></input>
                <p>Phone</p>
                <input type='number'></input>
                <p>Place</p>
                <input type='text'></input>
                <p>Age</p>
                <input type='number'></input>
                <br></br><br></br>
                <button className='signin' type='submit'>SignUp</button>
            </form>
        </div>
    </div>
  )
}

export default Fsignup