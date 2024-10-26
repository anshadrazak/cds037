import React, { useState } from 'react';
import './Csignup.css'


const Csignup = () => {

    const [ username, setUsername] = useState('')
    const [ password, setPassword] = useState('')
    const [ number, setNumber] = useState('')
    const [ email, setEmail] = useState('')
    const [ age, setAge] = useState('')
    
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     if (username === '' || password === '' || number === '' || email === '' || age === '') {
    //       setErrorMessage('All fields are required');

    //       return;
    //     }
    //     if (action === 'signUp') {
    //       await Sign_Up();
    //     }
    //   };

    //   const Sign_Up = async () => {
    //     try {
    //       await fetch('http://localhost:5000/csignup', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ username: username, password: password, age: age, email: email, number: number })
    //       });
          
          
    //     } catch (error) {
    //       console.error('Failed to fetch', error);
    //     }navigate('/');
    //   };


    

  return (
    <div className='csignup'>
        <div className='csmaindiv'>
            <form>
                <p>Username</p>
                <input type='text' value={username}></input>
                <p>Password</p>
                <input type='password' value={password}></input>
                <p>Phone</p>
                <input type='number' value={number}></input>
                <p>Email</p>
                <input type='email' value={email}></input>
                <p>Age</p>
                <input type='number' value={age}></input>
                <br></br><br></br>
                <button className='signin' type='submit'>SignUp</button>
            </form>
        </div>
    </div>
  )
}

export default Csignup