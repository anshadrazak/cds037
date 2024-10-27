import { useState } from 'react'
import React from 'react'
import './Csignup.css'
import { useNavigate } from 'react-router-dom'
import {toast} from 'sonner';


const Fsignup = () => {

  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [ action, setAction] = useState('')
  const [ username, setUsername] = useState('')
  const [ password, setPassword] = useState('')
  const [ number, setNumber] = useState('')
  const [ place, setPlace] = useState('')
  const [ age, setAge] = useState('')

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (username === '' || password === '' || number === '' || place === '' || age === '') {
      setErrorMessage('All fields are required');

      return;
    }
    if (action === 'signUp') {
      await Sign_Up();
    }
  };

  const Sign_Up = async () => {
    try {
      
      await fetch('http://localhost:5000/fsignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password, age: age, place: place, number: number })
      });
      
      toast.success('Sign Up Successful')
      
    } catch (error) {
      console.error('Failed to fetch', error);
    }navigate('/');
  };

  return (
    <div className='csignup'>
        <div className='csmaindiv'>
            <form onSubmit={handleFormSubmit}>
                <p>Username</p>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type='text'></input>
                <p>Password</p>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password'></input>
                <p>Phone</p>
                <input value={number} onChange={(e) => setNumber(e.target.value)} type='number'></input>
                <p>Place</p>
                <input value={place} onChange={(e) => setPlace(e.target.value)} type='text'></input>
                <p>Age</p>
                <input value={age} onChange={(e) => setAge(e.target.value)} type='number'></input>
                <br></br><br></br>
                <button className='signin' type='submit' onClick={() => setAction('signUp')}>SignUp</button>
            </form>
        </div>
    </div>
  )
}

export default Fsignup