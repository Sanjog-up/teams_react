import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserProfile from './components/user-profile';
import Greet from './components/greet';
import Button from './components/button';
import UserList from './components/user-list';
import ShowCount from './components/show.component';
import LoginFormComponent from './components/form-component';
import { useEffect, useRef } from 'react';

function App() {
  const onClick = () => {
    console.log("button clicked")
  }

const [count, setCount] = useState(0);
const [email, setEmail] = useState("");

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

// let count = 0;

console.log("rerender app component");

// const add = () => {
//   useState();
// }
// if(true){
//   useState();
// }

const isAdmin = true;

// useEffect(() => {
//   console.log("effect", count);

// cleanup function
//   return () => {
//     console.log("cleanup");
//   };
// }, [count, email]);


// useRef
// Dom ref
// const buttonRef = useRef(null);

// useEffect(() => {
//   console.log(buttonRef.current);
//   buttonRef.current.style.backgroundColor = "red";
//   buttonRef.current.style.color = "white";
// }, [count]);


//* manage state w/o rerendering   
const countRef = useRef(0);

const result = useMemo(() => {
  console.log("calculating");
  for(let i =0; i < 9000000000; i++){}
return 1000 * count;
}, [count]);

  return (
    <main id = {"asf"} className= "abc">
      <button 
      // ref={buttonRef}
       onClick={()=> {
        setCount(count + 1);
        // countRef.current++;
        // count ++;
        // console.log("on click ", count);
      }}> 
        Increase Count
      </button>
      <ShowCount count = {count} />

      <p>res: {result}</p>


      
      <p>{email}</p>

      {/* <Greet name="John" age = {26} /> */}
      <Greet name="Jane" age = {30} />
      <Greet name="Bob" age = {35} />
      <Greet />
      <ShowCount count = {count} />
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


    <input 
    // input change event 
    onChange={(e) => {
      // console.log(e.target.value);
      setEmail(e.target.value);
    }}
    type="text" 
    placeholder='Enter your name' 
    name= "text"
    />
    <input type="text" placeholder='Enter your name' name= "text"/>
    <input type= "checkbox"/>
    <input type="range" min = {0} max = {100} />
    <input type="date"/>
    <input type="file"/>
    <input type = "password"/>
    <input type = "email"/>
    
    <LoginFormComponent />

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