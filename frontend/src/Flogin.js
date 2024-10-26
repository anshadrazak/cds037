import React from 'react'
import './Clogin.css'





const Flogin = () => {
  return (
    <div className='clogin'>
        <div className='clmaindiv'>
            <form>
                <p>Username</p>
                <input type='text'></input>
                <p>Password</p>
                <input type='password'></input><br></br><br></br>
                <button className='signin' type='submit'>SignIn</button>
                <a href='/'><p>OR</p></a>
                <a href='/farmersignup'><div className='signup'>SignUp</div></a>
            </form>
        </div>
    </div>
  )
}

export default Flogin