// MainPage.js

import React, { useState } from 'react';
import TabbarList from '../../components/tabbar/tabbarList';
import LoginForm from '../loginpage/LoginForm';
import PostList from '../../components/post/postList'; // Adjust the import path
import './MainPage.css';

const MainPage = () => {
  const [posts, setPosts] = useState([]); // Initialize an empty array to store posts.

  const addPostToMainPage = (text) => {
    const newPost = {
      text: text,
      // Add other relevant information here.
    };

    setPosts([...posts, newPost]);
  };

  return (
    <div className="App">
      {/* Tabbar component */}
      <div className="tabbar" style={{ display: "inline" }}>
        <TabbarList />
      </div>

      {/* PostList component with posts and addPost function */}
      <div className="table">
        <PostList posts={posts} addPost={addPostToMainPage} />
      </div>
    </div>
  );
};

export default MainPage;
