import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from './services/authContext';
import LoginForm from './pages/loginpage/LoginForm';
import SignIn from './pages/loginpage/signin';
import Navigation from './Navigation';

const Layout = () => {
    const { currentUser, login, logout } = useAuth();
    useEffect(()=>{
        console.log(currentUser)
    },[currentUser]);
    if(!currentUser){
        return (
            <Navigation login={login}/>
        )
    }
    return (
        <div>
            <div>
                {
                    currentUser?.displayName
                }
                <button onClick={logout}>Logout</button>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout