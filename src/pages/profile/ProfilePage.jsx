import React from 'react' //rafce
import PostList from '../../components/post/postList'
import TabbarList from '../../components/tabbar/tabbarList'
import LoginForm from '../loginpage/LoginForm'

const ProfilePage = () => {
  return (
    <div className="App">
        {/* -------------------------------------   Tabbar --------------------------------------------------- */}
      <div className="tabbar" style={{display:"inline"}}>
        <TabbarList />
      </div>
    
    </div>
  )
}

export default ProfilePage