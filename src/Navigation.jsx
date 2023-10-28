import React from 'react'
import rabbit from './components/tabbar/Rabbit.png'
import mainpic from './pages/loginpage/pics/WallCream.png'

const Navigation = ({ login }) => {
  console.log(mainpic);
  console.log(rabbit);
  return (
    <div>
      <span className='mainname'>RABBIT H!</span>
      <div>
        <span onClick={login} className="loginicon">LogIn</span>
      </div>
      <div>
        <img className="picrab" src={rabbit}></img>
      </div>
      <div>
      <img className="mainpic" src={mainpic}></img>
      </div>
    </div>
  )
}

export default Navigation