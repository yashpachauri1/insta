import React, { useEffect, useState } from 'react'
import './profile.css'
import { Link, useRouteLoaderData ,json, useLoaderData } from 'react-router-dom';
import { logout, setUser } from '../store/Authentication';
import { useDispatch } from 'react-redux';
import ProfileItems from '../components/profileItems/ProfileItems';
import { getAuthToken } from '../store/Auth';
const Profile = () => {
    const dispetch = useDispatch()
    const userDetails = useRouteLoaderData('profile');
    const profileMedia = useLoaderData();

    console.log('user',userDetails.profilePhoto)
    
    
    const onLogout = () =>{
        dispetch(logout());
    }
    return (
        <div className='profile'>
            <div className='profile-details'>
                <div className='profile-details__logo'>
                    <img src={`http://localhost:5000/profile/${userDetails.profilePhoto}`} />
                </div>
                <div className='profile-details__content'>
                    <div className='profile-details__content-head' >
                        <h2>{userDetails.username}</h2>
                        <div className='profile-details__content-head__actions' >
                        <Link to={userDetails._id}>Edit Profile</Link>

                            <Link>View archive</Link>
                        </div>
                    </div>
                    <div  className='profile-details__content-follow'>
                    <p>post</p>
                    <p>followers</p>
                    <p>following</p>
                    <button type='button' onClick={onLogout}>Logout</button>
                    </div>
                    
                </div>
            </div>
            <div className='profile-media'>
                <ProfileItems items={profileMedia} />
            </div>
        </div>
    )
}

export default Profile;

export async function loader ({request}){
    const token = getAuthToken();
      try{
        const response = await fetch('http://localhost:5000/',{
          headers:{
            'Authorization' : 'Bearer ' + token
          }
        });
        if(!response.ok){
          console.log(response.error);
          return json({error:response.error},{status:500});
        }
        else{
         
          return response;
        }
        
      }
      catch(error){
        return json({error:" Could not fetch data"}, {status:500});
      }
    
    }