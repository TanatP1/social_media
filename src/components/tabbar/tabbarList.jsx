import React from "react";
import { useState } from "react";
import TabbarElement from "./tabbar";
import { useNavigate } from 'react-router-dom';
import rabbit from './Rabbit.png';

const TabbarList = (props) => {
    const [links] = useState('/signin');
    const navigate = useNavigate();
    const handleLink = () => {
        navigate(links);
    }
    const[tabbarEl] = useState([
         {
            content: 'Home',
             ICOkey: 'home',
             links: '/'
         },
        
            {
                content: 'Post',
                ICOkey: 'message-alt-add',
                links: '/post'
            },
        {
            content: 'Search',
            ICOkey: 'hash',
            links: '/search'
        },
        // {
        //     content: 'Notifications',
        //     ICOkey: 'bell',
        //     links: new URL('https://www.google.co.th/')
        // },
         {
             content: 'Profile',
             ICOkey: 'user',
             links: '/profile'
         },
        //  {
        //     content: 'Logout',
        //     ICOkey: 'user',
        //     links: new URL('/LoginForm')
        // }
    ]);

    return(
        <div className="tabbar">   
            <div className="left">
                <img src={rabbit} alt="" className="picrabbit"/>
                <span> Rabbit H!</span>
            </div>
            <div className="right">
              {tabbarEl.map(tabbarEl => (
                <TabbarElement content = {tabbarEl.content} links = {tabbarEl.links} ICOkey = {tabbarEl.ICOkey}/>
  
              ))}
              <div className='logout' onClick={handleLink} >
                
                <span>logout</span>
              </div>
            </div>
            
        </div>
    )
}

export default TabbarList;