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
      
      // Save the token to local storage
      localStorage.setItem('token', data.token);

      // Save the username to local storage
      localStorage.setItem('username', username);

      // Show success toast notification
      toast.success("Sign In successful");

      navigate('/');
    } catch (error) {
      console.error('Failed to fetch', error);
      toast.error("Incorrect Name or Password")
      // Set the error message
      setErrorMessage('Failed to sign in. Please try again.');
    }
  };

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
                <a href='/customersignup'><div className='signup'>SignUp</div></a>
            </form>
        </div>
    </div>
  )
}

export default Clogin