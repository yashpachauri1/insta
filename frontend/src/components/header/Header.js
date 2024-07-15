import React from 'react'
import home from '../../assets/home.png'
import search from '../../assets/search.png'
import direction from '../../assets/direction.png'
import messenger from '../../assets/messenger.png'
import tab from '../../assets/tab.png'
import heart from '../../assets/heart.png'
import instagram from '../../assets/instagram.png'
import './header.css'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const profilePhoto = localStorage.getItem('profilePhoto')
     
    return (
        <div className='header'>

            <div className='header-links' >
            
                <div className='header-links_container'>
                    <div className='header-links_heading'>
                        
                        <Link to=''>
                        <span><img src={instagram} alt='' /></span>
                        <h1>instagram</h1>
                        </Link>
                   
                    </div>
                   <div className='header-links_item'>
                   <div className='home'>
                      
                        <Link to=''>
                        <span><img src={home} alt='' /></span>
                        <p>Home</p>
                        </Link>
                  
                  
                    </div>

                    <div className='home'>
                      
                      <Link to='/create'>
                        <span><img src={search} alt='' /></span>
                        <p>Search</p>
                        </Link>
                
                
                
                  </div>
                    <div className='home'>
                       
                        <Link to='/create'>
                        <span><img src={direction} alt='' /></span>
                        <p>Explore</p>
                        </Link>
               
               
               
                    </div>
                    <div className='home'>
                      
    
                        <Link to='/create'>
                        <span><img src={messenger} alt='' /></span>
                        <p>Message</p>
                        </Link>
                   
                   
                    </div>
                    <div className='home'>
                        <Link to='/create'>
                        <span><img src={heart} alt='' /></span>
                        <p>Notification</p>
                        </Link>
                    </div>
                    <div className='home'>
                        <Link to='/create'>
                        <span><img src={tab} alt='' /></span>
                        <p>Create</p>
                        </Link>
                        
                    </div>

                    <div className='home'>
                        <Link to='/profile'>
                        <span><img src={`http://localhost:5000/profile/${profilePhoto}`} alt='' /></span>
                        <p>Profile</p>
                        </Link>
                        
                    </div>
                   </div>
                </div>

            </div>
            <div className='header__bottom'>
                
            {toggleMenu
          ? <RiCloseLine  size={27} onClick={(() => setToggleMenu(false))} />
          : <RiMenu3Line  size={27} onClick={(() => setToggleMenu(true))} />
        }   
        <p>More</p>
            </div>
        </div>
    )
}

export default Header

