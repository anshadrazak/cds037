import React from 'react'
import Header from './Header'
import './Home.css'
import hero from './Files/hero.png'
import sh from './Files/sh.png'
import ch from './Files/ch.png'
import hh from './Files/hp.png'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='homemainctr'>
        
        <div className='homeherodiv'>
            <div className='hometxtcnts'>
                <div className='txtsdiv'>
                    <a href='/customerlogin'>
                    <div className='customerbtn'>
                        <h1 >Are you a Customer?</h1>
                    </div>
                    </a>
                    <a href='/farmerlogin'>
                    <div className='farmerbtn'>
                        <h1 >Are you a Farmer?</h1>
                    </div>
                    </a>
                </div>
                
            </div>
            <div className='herodiv'>
                    <img className='hero' src={hero}></img>
            </div>
        </div>
        <div className='homeboxes'>
            <div className='homebox one'>
                <div className='boximgdiv'>
                    <img className='sh' src={sh}></img>
                </div>
                <h4>Shopping History</h4>

            </div>
            <div className='homebox two'>
                <div className='boximgdiv'>
                    <img className='sh' src={ch}></img>
                </div>
                <h4>Messaging Function</h4>

            </div>
            <div className='homebox three'>
                <div className='boximgdiv'>
                    <img className='sh' src={hh}></img>
                </div>
                <h4>Help   Line</h4>

            </div>
        </div>
        <div className='slogandiv'>
            <h2 className='sloganone'>Connecting Fields to Families</h2>
            <h2 className='slogantwo'>Farmilly</h2>
        </div>
        <Footer/>
    </div>
  )
}

export default Home