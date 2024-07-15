import React from 'react'
import { Form, json, useNavigate, useLoaderData, redirect, useRouteLoaderData } from 'react-router-dom';
import './edit.css';
const Edit = () => {
  const nevigate = useNavigate()
  const onCencelHandler = () => {
    nevigate('..');
  }

  const details = useRouteLoaderData('profile');
  // console.log(details)

  return (
    <Form className='editForm' method='patch'encType='multipart/form-data' >
      <div className='editForm_input'>
        
        <p>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' value={details.email} name='email' readOnly/>
        </p>
        <p>
          <label htmlFor='phone'>Phone</label>
          <input type='text' id='phone' value={details.phone} name='phone' />
        </p>
        <p>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' defaultValue={details.name} name='name'  />
        </p>
        <p>
          <label htmlFor='username'>Username</label>
          <input type='text' id='username' value={details.username} name='username' />
        </p>
        
        <p>
          <label htmlFor='bio'>Bio</label>
          <input type='text' value={details.bio} id='bio' name='bio' />
        </p>
        <p>
          <label htmlFor='gender'>Gender</label>
          <input type='text' id='gender' value={details.gender} name='gender' />
        </p>

        <p>
          <label htmlFor='profile'>Profile Picture</label>
          <input type='file' id='profile' name='profile' />
        </p>

      </div>
      <div className='editForm_action' >
        <button type='button' onClick={onCencelHandler} >cencel</button>
        <button type='submit'>update</button>
      </div>
    </Form>
  )
}

export default Edit;

export async function action({ request, params }) {
  const id = params.profileId;
  const data = await request.formData();
  // const allData = {
    
  //   email: data.get('email'),
  //   phone: data.get('phone'),
  //   name: data.get('name'),
  //   username:data.get('username'),
  //   bio: data.get('bio'),
  //   gender: data.get('gender'),
  //   profile: data.get('profile')
  // }

  try {
    const response = await fetch(`http://localhost:5000/user/${id}`, {
      method: 'PATCH',
      body:data,
      headers: {
        // Add any necessary headers here
      }
    });

    if (!response.ok) {
      console.log(response.error);
      
      return json({ message: 'Could not save task' }, { status: 500 });
    } 

      return redirect('/profile');
    
  } catch (error) {
    console.log(error.message);
    // Assuming json function is available, adjust accordingly
    return json({ message: 'Could not save task' }, { status: 500 });
  }
 

}

