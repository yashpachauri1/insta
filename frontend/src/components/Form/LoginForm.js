import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, setError, logIn } from '../../store/Authentication';
import './loginForm.css';

const LoginForm = (props) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();

    const sendData = async () => {
        try {
            const response = await fetch('http://localhost:5000/user/login', {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                const error = await response.json();
                console.log("Something went wrong ", error.error);
                dispatch(setError(error.error));
                return;
            }

            const userDetailsFromBackend = await response.json();
            const token = userDetailsFromBackend.token;
            const email = userDetailsFromBackend.user.email;
             
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);
            localStorage.setItem('name', userDetailsFromBackend.user.name);
            localStorage.setItem('username', userDetailsFromBackend.user.username);
            localStorage.setItem('id', userDetailsFromBackend.user._id);
            localStorage.setItem('profilePhoto', userDetailsFromBackend.user.profilePhoto)
            
           console.log(userDetailsFromBackend)
            dispatch(logIn());
            
        }
        catch (error) {
            console.error('Error during login:', error);
            dispatch(setError('Error during login'));
        }
    }
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked')
        sendData();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form' onSubmit={handleSubmit}>
                <div className='form-login'>
                    <h1></h1>

                    <p>
                        <input placeholder='email' name='email' value={userData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <input placeholder='password' name='password' value={userData.password} onChange={handleChange} />
                    </p>
                    <div className='actions'>

                        <div>
                            <button type='submit'>Login</button>
                        </div>
                        <p className="straight-line">OR</p>
                        <div className='actions__link' >
                            <p><Link className='actions__link_fac'>Log in with Facebook</Link></p>
                            <p><Link className='actions__link_for'>Forgot password</Link></p>
                        </div>

                    </div>
                </div>

                <div className='form__signin'>
                       <p>Don't have an account? </p>
                       <Link onClick={props.handleClick} >Sign up</Link>
                </div>
            </div>

        </form>
    )
}

export default LoginForm;
