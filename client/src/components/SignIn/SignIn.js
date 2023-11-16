import React, { useState } from "react";


const SignIn = (props)=>{
    const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function postCred(){
    const response =  fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    });
    console.log(response);
  }
    return (
        <div>
        <input
          placeholder="User name"
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={postCred}>Sign in</button>
        <button onClick={()=>{
            props.setSignIn(false);
        }}>click here to sign up</button>
  
  
      </div>
)};

export default SignIn