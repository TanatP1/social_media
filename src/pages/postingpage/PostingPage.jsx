import React from 'react';
import './PostingPage.css';

const postText = (e) => {
    console.log(e);
    e.preventDefault()
  }

const PostingPage = () => {
  return (
    <div className="main">
      <form action="process_post.php" method='POST' encType='multipart/form-data'>
        <h1>Create a post</h1>
        <label htmlFor="post-text" className='text'>Post Text: </label>
        <textarea name="post-text" id="post-text" required></textarea>

        <label htmlFor = "picture" className='text'>Upload Picture: </label>

        <div className = 'bottom'>
          <input type="file" className = "picture" name='picture' accept='image/*' required />
          <input type="submit" value="post" onClick = {(e) => postText(e)}/>
        </div><br />
        <a href="#" className ='logout'> &#8249; Log out</a>
        <a href="#" className='next'>Next &#8250;</a>
      </form>
    </div>
  )
}

export default PostingPage