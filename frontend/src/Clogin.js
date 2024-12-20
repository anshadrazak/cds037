import React, { useState } from 'react'
import './Clogin.css'
import { Navigate } from 'react-router-dom'

import { Toaster,toast } from 'sonner'
import { useNavigate } from 'react-router-dom'




const Clogin = () => {

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
      const response = await fetch('http://localhost:5000/csignin', {
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
      localStorage.setItem(username, username)
      navigate('/farmerslisting');
    } catch (error) {
      
      console.error('Failed to fetch', error);
      toast.error("Incorrect Name or Password")
      

    }
  };

  return (
    <div className='clogin'>
        <div className='clmaindiv'>
          <div className='subdiv'>
          <h3 className='cat'>Sign In Your Account</h3>
            <form onSubmit={handleFormSubmit}>
                
                <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                
                <input className='pinp' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br>
                <div className='btndiv'>
                <button className='csignin' onClick={() => setAction('signIn')} type='submit'>SignIn</button>
                <a href='/'><p>OR</p></a>
                <a href='/customersignup'><div className='signup'>SignUp</div></a>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Clogin