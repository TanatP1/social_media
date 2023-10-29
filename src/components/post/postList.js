import React, { useState } from "react";
import Post from "./post";
import './postList.css';
import { useAuth } from "../../services/authContext";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Firebase storage functions
import { getDatabase, ref as rtdbRef, push, update } from "firebase/database"; // Import Firebase Realtime Database functions

const PostList = () => {
    const { currentUser } = useAuth();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState(null);
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

    const storage = getStorage(); // Initialize Firebase Storage
    const db = getDatabase(); // Initialize Firebase Realtime Database

    const handleClick = async () => {
        // Check if there's an image to upload
        if (image) {
            // Upload the image file to Firebase Storage
            const storageRef = ref(storage, `images/${image.name}`);
            await uploadBytes(storageRef, image);

            // Get the download URL for the uploaded image
            const downloadURL = await getDownloadURL(storageRef);

            // Create a new post object with the image URL and title
            const newPost = {
                user: currentUser.displayName,
                text: title,
                Image: downloadURL,
                likes: 0,
                id: posts.length + 1
            };

            // Get a reference to the posts in the database and push the new post
            const postsRef = rtdbRef(db, "posts");
            const newPostRef = push(postsRef); // Create a new post reference with a unique key
            update(newPostRef, newPost); // Update the post with data

            // Update the state to include the new post
            setPosts([...posts, newPost]);

            // Clear the form
            setTitle("");
            setImage(null);
        } else {
            alert("Please select an image to post.");
        }
    }

    const handleImage = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    }

    return (
        <div>
            {/* Render existing posts */}
            <input type="text" placeholder="title..." value={title} onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <br />
            <input type="file" accept="image/*" onChange={handleImage} />
            <button onClick={handleClick}>Post</button>
            {posts.map(post => (
                <Post user={post.user} text={post.text} Image={post.Image} likes={post.likes} key={post.id} />
            ))}
        </div>
    );
}

export default PostList;
