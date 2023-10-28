import React from "react";
import { useState } from "react";
import TabbarElement from "./tabbar";


const TabbarList = (props) => {
    const[tabbarEl, setEl] = useState([
        // {
        //     content: 'Home',
        //     ICOkey: 'home',
        //     links: new URL('https://www.google.co.th/')
        // },
        
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
             links: new URL('https://www.google.co.th/')
         },
        //  {
        //     content: 'Logout',
        //     ICOkey: 'user',
        //     links: new URL('/LoginForm')
        // }
    ]);

    return(
        <div>
            {tabbarEl.map(tabbarEl => (
                <TabbarElement content = {tabbarEl.content} links = {tabbarEl.links} ICOkey = {tabbarEl.ICOkey}/>
            ))}
        </div>
    )
}

export default TabbarList;