import React, { useState } from 'react';
import './Csignup.css'
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';


const Csignup = () => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [ action, setAction] = useState('')
    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    const [ number, setNumber] = useState('')
    const [ email, setEmail] = useState('')
    const [ age, setAge] = useState('')
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (username === '' || password === '' || number === '' || email === '' || age === '') {
          setErrorMessage('All fields are required');

          return;
        }
        if (action === 'signUp') {
          await Sign_Up();
        }
      };

      const Sign_Up = async () => {
        try {
          
          await fetch('http://localhost:5000/csignup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password, age: age, email: email, number: number })
          });
          
          toast.success('Sign Up Successful')
        } catch (error) {
          console.error('Failed to fetch', error);
        }navigate('/');
      };


    

  return (
    <div className='csignup'>
        <div className='csmaindiv'>
          <div className='cssubdiv'>
            <h3>Create Your Account </h3>
            <form onSubmit={handleFormSubmit}>
                
                <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                
                <input placeholder='Phone Number' type='number' value={number} onChange={(e) => setNumber(e.target.value)}></input>
                
                <input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                
                <input placeholder='DOB' type='date' value={age} onChange={(e) => setAge(e.target.value)}></input>
                <br></br><br></br>
                <button className='signin' type='submit' onClick={() => setAction('signUp')}>SignUp</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Csignup