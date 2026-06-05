import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserProfile from './components/user-profile';
import Greet from './components/greet';
import Button from './components/button';
import UserList from './components/user-list';

function App() {
  const onClick = () => {
    console.log("button clicked")
  }
let x = 10;
let users = [{name: "John",email: "john@example.com"}, {name: "Jane",email: "jane@example.com"}, {name: "Bob",email: "bob@example.com"}, {name: "Alice",email: "alice@example.com"}];
// a ->b

// const UserList = users.map((user) => {
//   return <UserProfile user = {user} />;
// });

let onSignUpClick = () => {
  console.log("Sign Up ")
}
let onLoginClick = () => {
  console.log("Login ")
}
const Admin = () => {
  return <h1>This is Admin</h1>
}

const User = () => {
  return <h1>This is User</h1>
}
const isAdmin = true;
  return (
    <main>
      <Greet name="John" age = {26} />
      <Greet name="Jane" age = {30} />
      <Greet name="Bob" age = {35} />
      <Greet />
      <p>{x}</p>
      <li>Functional component</li>
      <li>todo: props</li>
      {/* <li>JSX: js extended syntax for xml</li> */}
      <li>MPA</li>
      <li>SPA: single page application</li>
      <li>SSR & CSR && SSF</li>
      <li>Reloading and Rendering</li>

      <li>DOM & VDOM</li>
      <li>Diffing & Reconciliation</li>
      {/* react copies a lightweight version of the DOM that is called the virtual DOM if a react component is changed it updates the virtual DOM old and new  and then compares it with the actual DOM that is called diffing then changing or updating in actual DOM is reconciliation or rerendering */}
      {/* Conditional rendering  */}
      <li>userState(), useEffect(), </li>
      <button onClick={onClick}>Click ME</button>
      {/* user profile */}
    {/* {UserList} */}
    {/* {users.map((user) => {
      return <UserProfile user = {user} />;
    })} */}
    <UserList users = {users} />
    <Button label= {"Sign Up"} onClick={onSignUpClick}/> <br />
    <Button label= {"Login"} onClick={onLoginClick}/> 
    {isAdmin ? <Admin /> : <User />}
    {isAdmin && <Admin />}
    <p>{isAdmin ? "Hello Admin" : "Hello User"}</p>
    </main>
  );

}


export default App;


//! semantic tag
// main,nav, aside, article, section, header, footer

//! inline , block, inline-block

//! positioons : static , relative, fixed, absolute, sticky:

// css selection:
// id selector -> # id_name
// universal -> *