
import { useState } from 'react';


const Post = (props) => {
    const [likes, setLikes] = useState(props.likes);
    const handleLikes = () => {
        setLikes(likes + 1);
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