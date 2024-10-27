import React, { useState } from 'react'
import './Clogin.css'
import './Flogin.css'
import { Navigate } from 'react-router-dom'

import { Toaster,toast } from 'sonner'
import { useNavigate } from 'react-router-dom'



const Flogin = () => {

  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [username, setUsername] = useState('')
  const [action, setAction] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setErrorMessage('All fields are required');

      return;
    }
    if (action === 'signIn') {
      
      await Sign_In();
    }
  };

  const Sign_In = async () => {
    
    console.log("Sign_In function called");
    try {
      const response = await fetch('http://localhost:5000/fsignin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const data = await response.json();

      console.log('Sign in successful', data);

      toast.success("Sign In successful");
      localStorage.setItem(username, username);
      navigate('/customerslisting');
    } catch (error) {
      
      console.error('Failed to fetch', error);
      toast.error("Incorrect Name or Password")
      

    }
  };


  return (
    <div className='flogin'>
        <div className='clmaindiv'>
            <form onSubmit={handleFormSubmit}>
                <h3>Sign In Your Account</h3>
                <input placeholder='Username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                
                <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br>
                <div className='fbtndiv'>
                  <div className='fsubdiv'>
                <button className='fsignin' onClick={() => setAction('signIn')} type='submit'>SignIn</button>
                <a href='/'><p>OR</p></a>
                <a href='/farmersignup'><div className='fsignup'>SignUp</div></a>
                </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Flogin