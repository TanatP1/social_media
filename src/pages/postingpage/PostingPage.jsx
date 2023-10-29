import React from 'react';
import './PostingPage.css';
import TabbarList from '../../components/tabbar/tabbarList'


const postText = (e) => {
    console.log(e);
    e.preventDefault()
  }

const PostingPage = () => {
  return (
    <div className='post-box'>

      {/* -------------------------------------   Tabbar --------------------------------------------------- */}
     
      <TabbarList />

      <div className="main">
       <form action="process_post.php" method='POST' encType='multipart/form-data'>
        <h1 class="post-heading">This rabbit want to tell that...</h1>
        <label htmlFor="post-text"></label>
        <textarea name="post-text" id="post-text" required ></textarea>

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