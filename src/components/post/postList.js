import React, { useState } from "react";
import Post from "./post";
import './postList.css';
import { useAuth } from "../../services/authContext";
import { useRef } from "react";

const PostList = () => {
    const { currentUser, login, logout } = useAuth();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState();
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

    const handleClick = () => {
        setPosts(prefPost => [...prefPost,{user: currentUser.displayName,text: title,Image: image, likes: 0}])
        console.log(posts);
    }

    const handleImage = (event) => {
        const file = event.target.file[0];
        console.log(file);
        setImage(event.target.file[0]);
    }

    return (
        <div>
            {/* Render existing posts */}
            <input type="text" placeholder="title..." onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <br />
            <input type= "file" onChange={(e) => {
                if(e.target.files && e.target.files.length > 0){
                    setImage(e.target.files);
                }
            }}/>
            <button onClick={() => handleClick()}>Post</button>
            {posts.map(post => (
                <Post user={post.user} text={post.text} Image={post.Image} likes={post.likes} key={post.id} />
            ))}
        </div>
    );
}

export default PostList;