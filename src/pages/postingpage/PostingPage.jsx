import React from 'react';
import './PostingPage.css';
import TabbarList from '../../components/tabbar/tabbarList'
// import logo from "../Rabbit.png"
// import home from "../home.png"
// import search from "../search.png"
// import bell from "../bell.png"
// import user from "../user.png"

const postText = (e) => {
    console.log(e);
    e.preventDefault()
  }

const PostingPage = () => {
  return (
    <div className='post-box'>

      {/* -------------------------------------   Tabbar --------------------------------------------------- */}
      <div className="tabbar" style={{ display: "inline" }}>
        <TabbarList />
      </div>

      <div className="top-box">
      {/* <img src={logo} class = "logo" ></img>
      <img src={home} class = "home" ></img>
      <img src={search} class = "search" ></img>
      <img src={bell} class = "bell" ></img>
      <img src={user} class = "user" ></img> */}
      {/* <p className='name'>RabbitH!</p>
      <a href="#" className ='logout'> &#8249; Log out</a> */}
      </div>

      <div className="main">
      <form action="process_post.php" method='POST' encType='multipart/form-data'>
        <h1 class="post-heading">This rabbit want to tell that...</h1>
        <label htmlFor="post-text"></label>
        <textarea name="post-text" id="post-text" required></textarea>

        <div className = 'bottom'>
        <input type="file" class="picture" name="picture" accept="image/*" required />
        <input type="submit" value="POST" onClick = {(e) => postText(e)}/>
        </div><br/>
        
      </form>
    </div>
    </div>
  
  )
}

export default PostingPage