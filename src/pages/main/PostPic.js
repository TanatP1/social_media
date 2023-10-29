import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as rtdbRef, push, update } from "firebase/database";

const PostPic = ({ addPostToMainPage }) => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState("");
  const storage = getStorage(); // Initialize Firebase Storage
  const db = getDatabase(); // Initialize Firebase Realtime Database

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handlePostSubmit = async () => {
    if (!file) {
      return;
    }

    // Upload the image file to Firebase Storage
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);

    // Get the download URL for the uploaded image
    const downloadURL = await getDownloadURL(storageRef);

    // Create a new post object with the image URL and caption
    const newPost = {
      image: downloadURL,
      caption: caption,
      timestamp: new Date().toLocaleString(),
    };

    // Get a reference to the posts in the database and push the new post
    const postsRef = rtdbRef(db, "posts");
    const newPostRef = push(postsRef); // Create a new post reference with a unique key
    update(newPostRef, newPost); // Update the post with data

    // Call the callback function to add the new post to the MainPage
    addPostToMainPage(newPost);

    // Clear the form
    setFile(null);
    setCaption("");
  };

  return (
    <div className="post-pic-container">
      {/* Your PostPic component JSX, including the file input and caption textarea */}
    </div>
  );
};

export default PostPic;
