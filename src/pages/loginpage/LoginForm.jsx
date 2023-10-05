
import React, { useState } from "react";
import Grouppic from './pics/Group.png';
// import './App.css';

const LoginForm = ({ isShowLogin }) => {
  console.log(Grouppic);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  };

  return (
    <div className="container">
      <div className="page">
        <img className="pic" src={Grouppic}></img>
      </div>
      <div className="headfont">
        <h1>PERFECT PPAP</h1>
      </div>
      <div className="titlefont">
        <p>A space to embrace everyone's feelings and stories</p>
      </div>

      <div className={`${isShowLogin ? "active" : ""} show`}>

        <div id="page-mask"></div>
        <div >

          <div className="login__content">

            <form className="login__form">

              <div className="login__inputs">
                <h1>It's Good To Login !</h1>

                <div className="login__box">
                  <label htmlFor="username" >Username</label>
                  <div className="login__box">
                    <input
                      type="text"
                      className="login__input"
                      placeholder="Enter Your Username"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>

                <div className="login__box">
                  <label htmlFor="password" >Password</label>
                  <div className="login__box">
                    <input
                      type="password"
                      className="login__input"
                      placeholder="Enter Your Password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <input class="login__buttons" type="submit" value="Login" />
              </div>


            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginForm;
