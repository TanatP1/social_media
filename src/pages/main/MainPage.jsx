import React from 'react'
import PostList from '../../components/post/postList'
import TabbarList from '../../components/tabbar/tabbarList'
import LoginForm from '../loginpage/LoginForm'

const MainPage = () => {
  return (
    <div className="App">

      {/* -------------------------------------   Tabbar --------------------------------------------------- */}
      <div className="tabbar" style={{display:"inline"}}>
        <TabbarList />
      </div>



      {/* ------------------------------------------Posts page------------------------------------------------------ */}

      <div className = 'table'>
        <PostList />
      </div>


    </div>
  )
}

export default MainPage