import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserProfile from './components/user-profile';
import Greet from './components/greet';
import Button from './components/button';


function App() {
  const onClick = () => {
    console.log("button clicked")
  }
let x = 10;
let user = {name: "John",email: "john@example.com"};
let onSignUpClick = () => {
  console.log("Sign Up ")
}
let onLoginClick = () => {
  console.log("Login ")
}
  return (
    <main>
      <Greet name="John" age = {26} />
      <Greet name="Jane" age = {30} />
      <Greet name="Bob" age = {35} />
      <Greet />
      <p>{x}</p>
      {/* <li>JSX: js extended syntax for xml</li> */}
      <button onClick={onClick}>Click ME</button>
    <UserProfile user = {user} />
    <UserProfile user = {{ name: "Jane", email: "jane@example.com" }} />
    {/* {UserProfile()} */}
    <Button Label= {"Sign Up"} onClick={onSignUpClick}/> <br />
    <Button Label= {"Login"} onClick={onLoginClick}/> 
    
    </main>
  );

}

export default App;