import React, { useEffect } from 'react';
import { Outlet, useRouteLoaderData } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../header/Header';
import './root.css';
import Auth from '../../pages/Auth';
import { logIn, logout } from '../../store/Authentication';

const Root = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const token = useRouteLoaderData('root'); // Assuming this correctly loads the token from the route

    useEffect(() => {
        // Assuming `token` is a boolean indicating if the user is logged in
        if (token) {
            dispatch(logIn()); // Dispatch logIn action if token is present
        } else {
            dispatch(logout()); // Dispatch logout action if token is not present
        }
    }, [dispatch, token]); // Adding dispatch and token to the dependency array

    return (
        <>
            {isLoggedIn ? (
                <div className='root'>
                    <div className='root-head'>
                        <Header />
                    </div>
                    <div className="main-content">
                        <Outlet />
                    </div>
                </div>
            ) : (
                <div className='auth'>
                    <Auth />
                </div>
            )}
        </>
    );
};

export default Root;
