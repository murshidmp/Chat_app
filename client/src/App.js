import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import ChatDash from './components/ChatDash/ChatDash'
import { useState, useEffect } from 'react';
import './App.css';

function App() {
const [isToken, setIsToken] = useState(false);
const [isSignIn, setIsSignIn] = useState(false);

// check cookie
useEffect(()=>{
  if (getCookie("signUpToken"))
    setIsToken(true);
},[])
// 
// if  cookie , change isToken true

  return (
    <div >
      {isToken ?
        <ChatDash/>
      : isSignIn ?
          <SignIn setSignIn = {setIsSignIn}/>
          :
        <SignUp cHandler={{
          setCookie,getCookie,checkCookie
        }} setToken={setIsToken} setSignIn = {setIsSignIn}/>
      
      }
      
    </div>
  );
}
function setCookie(cname, cvalue, exdays) {
  console.log()     
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires="+d.toISOString();
  document.cookie=encodeURIComponent(cname) 
     + "=" + encodeURIComponent(cvalue)
     + (expires);
     console.log(expires)

}

function getCookie(cname) {        
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
     //your code goes here
  } else {
     //your code goes here
    if (user != "" && user != null) {
      setCookie("username", user, 5);
    }
  }
}


export default App;
