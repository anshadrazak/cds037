  import React, {useState, useEffect} from 'react'
  import './Farmerslisting.css'
  import usestate from 'usestate'
  import App from './App'

  const Farmerslisting = () => {

    const [lists, setLists] = useState('')
    const [projects, setProjects] = useState([]);

    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch('http://localhost:5000/farmerslisting', {
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
          {projects.map((project) => (
            
            <div className='card'>

            <p className='dets'>Name:{project.username}</p>
            <p className='dets'>Vegetable:{project.vegetable}</p>
            <p className='dets'>Amount:{project.amount}</p>
            <p className='dets'>Price/Kg:{project.price}</p>
            
          </div>
          ))}
          </div>
      </div>
    )
  }

  export default Farmerslisting