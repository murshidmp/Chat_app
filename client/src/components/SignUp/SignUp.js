import React, { useState } from "react";

const SignUp = () => {
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
    await window.cookieStore.set('token', token.token)
    
    const curDate = Date.now();
    const oneHrTs = 1*60*60*1000
    const expirey = curDate  + oneHrTs
    await window.cookieStore.set('expires',expirey)
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
    </div>
  );
};
export default SignUp;
