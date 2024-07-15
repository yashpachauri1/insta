import React from 'react'
import { Outlet } from 'react-router'
import { json } from 'react-router-dom';

function getId (){
  const id = localStorage.getItem('id')
  return id;
}

const ProfileRoot = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default ProfileRoot;
export async function loader({ request, params }) {

  const id = getId();
  try {
    const response = await fetch(`http://localhost:5000/user/${id}`);
    if (!response.ok) {
      console.log(response.error)
      return response.error;
    }
      
      
    return response;
  }
  catch (error) {
    console.log(error.message);
    return json({ error: 'could not get data' });
  }
}