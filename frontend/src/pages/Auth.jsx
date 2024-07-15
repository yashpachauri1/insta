import React, { useState } from 'react'
import LoginForm from '../components/Form/LoginForm'
import Signup from '../components/signupForm/Signup'
import { redirect, useSearchParams } from 'react-router-dom';

const Auth = () => {

    const [login, setLogin] = useState(false);
   const handleClick = () =>{
    setLogin(!login);
   
   }
   console.log(login)
  return (
    <>
    {login ? <LoginForm handleClick={handleClick} /> :  <Signup handleClick={handleClick}/>}
    
  
    </>
  )
}

export default Auth;


// export async function action({ request }) {

//   const data = await request.formData();
//   let userData = {}

//   userData = {
//       email: data.get('email'),
//       name: data.get('name'),
//       username: data.get('username'),
//       password: data.get('password')
//   }

//   const response = await fetch('http://localhost:5000/user/signup', {
//       method: 'Post',
//       body: JSON.stringify(userData),
//       headers: {
//           "Content-Type": "application/json"
//       }
//   });


//   if (response.status === 422 || response.status === 401) {
//       console.log(response)
//       return response
//   }

//   if (!response.ok) {
//       console.log(response);
//       console.log('somthing went wrong')
//       return response
//   }
//   const userDetailsFromBackend = await response.json();
//   const token = userDetailsFromBackend.token;
//   const email = userDetailsFromBackend.email;

//   localStorage.setItem('token', token);
//   localStorage.setItem('email', email);
//   console.log('user', token)

//   return redirect('/');

// }