import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import Button from '../components/button';
import ShowCount from '../components/show.component';
import LoginFormComponent from '../components/form-component';
import React from 'react';

function  HomePage() {
  const [count, setCount] = useState(0);
  // const [email, setEmail] = useState("");
  const buttonRef = useRef(null);
  const countRef = useRef(0);

// const UserList = users.map((user) => {
//   return <UserProfile user = {user} />;
// });

// let onSignUpClick = () => {
//   console.log("Sign Up ")
// }
// let onLoginClick = () => {
//   console.log("Login ")
// }
// const Admin = () => {
//   return <h1>This is Admin</h1>
// }

// const User = () => {
//   return <h1>This is User</h1>
// }

// let count = 0;

console.log("rerender app component");

// const add = () => {
//   useState();
// }
// if(true){
//   useState();
// }

// const isAdmin = true;

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


// * manage state w/o rerendering   
// const countRef = useRef(0);

// const result = useMemo(() => {
//   console.log("calculating");
//   for(let i =0; i < 9000000000; i++){}
// return 1000 * count;
// }, [count]);

// fn1:on
// fn2:on

//* useCallback
const callback = useCallback(()=>{
  setCount(count + 1);
}, [count]); 

  return (
    <main id = {"asdf"} className= "page">
      <h1>Home Page</h1>
      {/* <button
        // ref={buttonRef}
        onClick={() => {
          // setCount(count + 1);
          countRef.current++;
          // count++;
          console.log("on click", countRef.current);
        }}
      >
        Increase
      </button> */}

      {/* <button
        // ref={buttonRef}
        onClick={onClick}
      >
        Increase
      </button> */}
      <Button label={"+"} onClick={callback} />
      {/* <Greet /> */}
      <ShowCount count={count} />

      <li>JSX: js extended syntax for xml</li>
      <li>Functional Component</li>
      <li>Props</li>
      <li>MPA</li>
      <li>SPA: single page application</li>
      <li>SSR & CSR && ssg</li>
      <li>Reloading & Rerendering </li>
      <li>DOM & VDOM </li>
      <li> Diffing & Reconciliation </li>
      <li>Conditional Rendering [ternary op , && - short circuiting]</li>
      <li>List rendering</li>
      <li>Hooks </li>
      <li>
        useState() , useEffect() , useRef() , useMemo , useCallback , useContext
        ,{" "}
      </li>
      {/* <h1>1</h1>   */}
      {/*  */}
      {/* <button onClick={onClick}>Click Me</button> */}
      {/* user profile */}
      {/* <UserProfile user={users[0]} /> */}
      {/* {UserList} */}
      {/* {users.map((user) => {
        return <UserProfile user={user} />;
      })} */}
      {/* <UserList users={users} /> */}
      {/* <h1></h1> */}
      {/* <Button label={"Sign Up"} onClick={onSignupClick} /> <br />
      <Button label={"Login"} onClick={onLoginClick} /> */}
      {/* {isAdmin ? <Admin /> : <User />}
      {isAdmin && <Admin />} */}
      {/* <p>{isAdmin ? "Hello Admin" : "Hello User"}</p>
      <span style={{ background: "red", width: "100px" }}>
        Hello jbhlfsadj hdjsbfgds f
      </span> */}
      {/* <span>World</span>
      <div
        style={{ background: "red", width: "100px", display: "inline-block" }}
      >
        div tag
      </div>
      <div
        style={{ background: "blue", width: "100px", display: "inline-block" }}
      >
        div tag
      </div> */}
      {/* <Admin />
      <User /> */}
      {/* <Component /> */}
      {/* <Comp /> */}

      <input
        // input change event
        onChange={(e) => {
          // console.log(e.target.value);
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="This is text input"
        name="text"
      />
      <input type="checkbox" />
      <input type="range" min={0} max={100} />
      <input type="date" />
      <input type="file" />
      <input type='file'/>

      <LoginFormComponent/>
    </main>
  );
}



export default HomePage;


//! semantic tag
// main,nav, aside, article, section, header, footer

//! inline , block, inline-block

//! positioons : static , relative, fixed, absolute, sticky:

// css selection:
// id selector -> # id_name
// universal -> *