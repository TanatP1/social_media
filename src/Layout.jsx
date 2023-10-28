import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from './services/authContext';
import LoginForm from './pages/loginpage/LoginForm';
import SignIn from './pages/loginpage/signin';
import Navigation from './Navigation';
import rabbit from './components/tabbar/Rabbit.png'

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
                <span onClick={logout} className="logouticon">Logout</span>
                <p className='fontnametab'>RABBIT H!</p>
                <img className="picrabbit" src={rabbit}></img>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout