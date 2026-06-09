import { useState } from "react";


const LoginFormComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log("email", email);
        console.log("password", password);
    }
    return (
        <form
        //  onReset={(e) => {
          // console.log(e);
        // }}
        onSubmit={onFormSubmit}
        >
            <input 
            onChange={onEmailChange}
            type="email" placeholder='Enter your email' name= "email"/>
            <br/>
            <input 
            onChange={onPasswordChange}
            type = "password" placeholder='Enter your password' name= "password"/>
        
            <br />
            <button type="submit">Login</button>
            {/* <button type="reset">Reset</button> */}
        </form>
    );
}

export default LoginFormComponent;