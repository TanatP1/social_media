import { useState } from 'react';


const Post = (props) => {
    const [likes, setLikes] = useState(props.likes);
    const [isLiked, setIsLiked] = useState(false);
    const handleLikes = () => {
        setLikes(isLiked ? likes - 1 : likes + 1);
        setIsLiked(!isLiked);
    }

    return(
        <div className='post'>
            <div className='user'><box-icon type='solid' name='user-circle' size = "px"></box-icon>{props.user}</div>
            <div className='text'>{props.text}</div>
            <img className='image' src={props.Image} alt='img'></img>
            <div className='botTab' onClick={handleLikes}><box-icon type='solid' name='like'></box-icon>likes : {likes}</div>
            
        </div>
    );
}

export default Post;