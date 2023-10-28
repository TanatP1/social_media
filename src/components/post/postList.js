import React, { useState } from "react";
import Post from "./Post";
import './postList.css';

const PostList = () => {
    const [posts, setPosts] = useState([
        {
            user: 'Johny',
            text: 'I come for this mountain',
            Image: require('./img/mountain.jpg'),
            likes: 3,
            id: 1   
        },
        {
            user: 'Patty',
            text: 'look at those rocks!',
            Image: require('./img/mountain.jpg'),
            likes: 2,
            id: 2 
        },
        {
            user: 'Nagle',
            text: 'adorable cat',
            Image: require('./img/cat.jpg'),
            likes: 2,
            id: 3 
        }
    ]);

    // Function to add a new post to the list
    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div>
            {/* Render existing posts */}
            {posts.map(post => (
                <Post user={post.user} text={post.text} Image={post.Image} likes={post.likes} key={post.id} />
            ))}
            {/* Add a form for users to create new posts */}
            <form onSubmit={(e) => {
                e.preventDefault();
                const user = 'New User'; // You can set the actual user here
                const text = e.target.querySelector('#new-post-text').value;
                // You can handle image, likes, and ID as needed
                const newPost = {
                    user,
                    text,
                    Image: require('./img/cat.jpg'), // Replace with your default image
                    likes: 0,
                    id: posts.length + 1, // Generate a unique ID
                };
                addPost(newPost);
                e.target.reset();
            }}>
                <input type="text" id="new-post-text" placeholder="Enter your post text" />
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
}

export default PostList;
