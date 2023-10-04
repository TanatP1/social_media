import React, {useState} from "react";
import Post from "./post";

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

    return(
        <div>
            {posts.map(post => (
                <Post user = {post.user} text = {post.text} Image = {post.Image} likes = {post.likes} key={post.id}/>
            ))}
        </div>
    )
}

export default PostList