
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'boxicons'
import rabbit from './Rabbit.png';



const TabbarElement = (props) => {
    console.log(rabbit)
    const [links] = useState(props.links);
    const navigate = useNavigate();
    const handleLinks = () => {
        navigate(props.links);
        console.log(links, ' Clicked');
    }
    

    return(
        <div className='tabbarEl' onClick={handleLinks} >
            <box-icon  name={props.ICOkey} size = "30px" color = "#000" className = "icon"></box-icon>
            <div className='icon'>{props.content}</div>
        </div>
    );

    
}

export default TabbarElement;