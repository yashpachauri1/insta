import React, { useState } from 'react';
import { redirect, Link,Form } from 'react-router-dom';
import './signup.css'
const Signup = (props) => {
    const [userData, setUserData] = useState({
        email: '',
        name: '',
        username: '',
        password: ''
    });

    const sendData = async () => {
        try {
            const response = await fetch('http://localhost:5000/user/signup', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                const error = await response.json();
                console.log('Something went wrong:', error);
                return;
            }

            const userDetailsFromBackend = await response.json();
            const token = userDetailsFromBackend.token;
            const email = userDetailsFromBackend.email;

            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            console.log('User signed up successfully:', token);

            // Redirect to home page or any other desired location
            // Replace '/' with the desired URL
            // return redirect('/');
        } catch (error) {
            console.error('Error during signup:', error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-signup'>
                <h1></h1>
                <div className='form-signup__top'>
                    <p className='form-signup__top_para'>
                        Sign up to see photos and videos from your friends.
                    </p>
                </div>
                <p className="straight-line">OR</p>

                <p>
                    <input placeholder='Email' name='email'  value={userData.email} onChange={handleChange} />
                </p>
                <p>
                    <input placeholder='Full Name' name='name'  value={userData.name} onChange={handleChange} />
                </p>
                <p>
                    <input placeholder='Username' name='username' value={userData.username} onChange={handleChange} />
                </p>
                <p>
                    <input placeholder='Password' type="password" name='password' value={userData.password} onChange={handleChange} />
                </p>
                <div className='form-singup__actions'>
                    <button type='submit'>Sign up</button>
                </div>
            </div>

            <div className='form__login'>
                <p> Have an account? </p>
                <Link onClick={props.handleClick} >Sign In</Link>
            </div>
        </form>
    )
}

export default Signup;

// export async function action({ request }) {
//     const data = await request.formData();
   
   
//        const userData = {
//             email: data.get('email'),
//             name: data.get('name'),
//             username: data.get('username'),
//             password: data.get('password')
//         }
    
//     console.log(userData)
    

//     const response = await fetch('http://localhost:5000/user/signup', {
//         method: 'POST',
//         body: JSON.stringify(userData),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     if (response.status === 422 || response.status === 401) {
//         console.log(response)
//         return response
//       }

//     if (!response.ok) {
//         console.log(response);
//         console.log('somthing went wrong')
//         return response
//     }
//     const userDetailsFromBackend = await response.json();
//     const token = userDetailsFromBackend.token;
//     const email = userDetailsFromBackend.email;

//     localStorage.setItem('token', token);
//     localStorage.setItem('email', email);
//     console.log('user',token)
//     return redirect('/')



// }