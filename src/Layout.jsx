import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from './services/authContext';

import Navigation from './Navigation';
import rabbit from './components/tabbar/Rabbit.png'
import './layout.css'


const Layout = () => {
    console.log(rabbit);
    const { currentUser, login, logout } = useAuth();
    useEffect(() => {
        console.log(currentUser)
    }, [currentUser]);
    if (!currentUser) {
        return (
            <Navigation login={login} />
        )
    }
    return (
        <div>
            <div>
                {currentUser?.displayName && (
                    <div className="userinfo">
                        {currentUser.displayName}
                    </div>
                )}
                
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout