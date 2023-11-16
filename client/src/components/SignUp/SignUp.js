import React, { useState } from "react";

const SignUp = (props) => {
  console.log (props)
  const [fullName, setFullname] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  async function postData() {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, userName, password }),
    });
    const token = await response.json()
    console.log(token.token)
    props.cHandler.setCookie("signUpToken",token.token,(1/24))
    props.setToken(true)
  }
  return (
    <div>
      <input
        placeholder="FullName"
        type="text"
        onChange={(e) => {
          setFullname(e.target.value);
        }}
      />
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
      <button onClick={postData}>Sign Up</button>
      <button onClick={()=>{
        props.setSignIn (true);
      }}>click here to sign in</button>


    </div>
  );
};
export default SignUp;
