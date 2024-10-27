import { useState } from 'react'
import React from 'react'
import './Csignup.css'
import { useNavigate } from 'react-router-dom'
import {toast} from 'sonner';


const Fdashboard = () => {

  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const [ action, setAction] = useState('')

  const [ vegetable, setVegetable] = useState('')
  const [ amount, setAmount] = useState()
  const [ price, setPrice] = useState()
  

  const username = localStorage.getItem(username)

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (username === '' || vegetable === '' || amount === '' || price === '') {
      setErrorMessage('All fields are required');

      return;
    }
    if (action === 'signUp') {
      await Sign_Up();
    }
  };

  const Sign_Up = async () => {
    try {
      
      await fetch('http://localhost:5000/addfarmerslisting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, vegetable: vegetable, amount: amount, price: price})
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
                
                <p>Vegetable</p>
                <input value={vegetable} onChange={(e) => setVegetable(e.target.value)} type='password'></input>
                <p>Amount</p>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type='number'></input>
                <p>Price/Kg</p>
                <input value={price} onChange={(e) => setPrice(e.target.value)} type='number'></input>
                
                <br></br><br></br>
                <button className='signin' type='submit' onClick={() => setAction('signUp')}>SignUp</button>
            </form>
        </div>
    </div>
  )
}

export default Fdashboard