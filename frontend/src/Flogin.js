import React, { useState } from 'react'
import './Clogin.css'
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
      navigate('/farmerslisting');
    } catch (error) {
      
      console.error('Failed to fetch', error);
      toast.error("Incorrect Name or Password")
      

    }
  };


  return (
    <div className='clogin'>
        <div className='clmaindiv'>
            <form onSubmit={handleFormSubmit}>
                <p>Username</p>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <p>Password</p>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br>
                <button className='signin' type='submit'>SignIn</button>
                <a href='/'><p>OR</p></a>
                <a href='/farmersignup'><div className='signup'>SignUp</div></a>
            </form>
        </div>
    </div>
  )
}

export default Flogin