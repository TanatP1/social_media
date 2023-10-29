import React, { useState } from 'react';
import TabbarList from '../../components/tabbar/tabbarList';
import PostList from '../../components/post/postList';
import PostPic from './PostPic'; // Import the PostPic component
import './MainPage.css';

const MainPage = () => {
  const [posts, setPosts] = useState([]); // Initialize an empty array to store posts.

  const addPostToMainPage = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      {/* Tabbar component */}
      <div className="tabbar" style={{ display: "inline" }}>
        <TabbarList />
      </div>

      {/* PostPic component for uploading images */}
      <div className="post-pic">
        <PostPic addPostToMainPage={addPostToMainPage} /> {/* Pass the callback function */}
      </div>

      {/* PostList component with posts */}
      <div className="table">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default MainPage;
