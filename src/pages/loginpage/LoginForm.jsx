
import React, { useState } from "react";
import Grouppic from './pics/Group.png';
// import './App.css';

const LoginForm = ({ login }) => {
  console.log(Grouppic);

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
    </div>
  );
};

export default LoginForm;
