import React, {useState, useEffect} from 'react'
import './Farmerslisting.css'
import usestate from 'usestate'
import App from './App'

const Farmerslisting = () => {

  const [lists, setLists] = useState('')
  const [projects, setProjects] = useState('')
  const [error, setErrorMessage] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/projects/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching projects:", error);
        alert("Error fetching projects. Check the console for more details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='Farmerslisting'>

        
        <div className='cards'>
            <div className='card'>

            </div>
            
        </div>
    </div>
  )
}

export default Farmerslisting