import React, { useState } from 'react'
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

    const histroy = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = e => {
        e.preventDefault();
        // login logistics
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            // logged in (back to homepage)
            histroy.push("/");
        })
        .catch((e)=> alert(e.message));

    };

    const register = event => {
        event.preventDefault();
        // register logistics 
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{
            //created user with email n password, redirect to home page
            histroy.push("/");
        })
        .catch((e)=> alert(e.message));
        
    }

    return (
        <div className="login">
             <Link to="/">
                 <img className="login__logo"
                 src="http://dogzone.com.au/wp-content/themes/dogzone/library/images/DogZone-logo-horizontal.png"
                 alt="logo_img"
                 />
             </Link>
             <div className="login__container">
                 <h1>SignIn</h1>
                 <form>
                     <h5>E-mail/USername</h5>
                     <input value={email} onChange={event => setEmail(event.target.value)} type="email"></input>
                     <h5>Password</h5>
                     <input value={password} onChange={event => setPassword(event.target.value)} type="password"></input>
                     <button onClick={login} className="login__signInButton" type="submit">Sign In</button>
                 </form>

                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. 
                    Please see our Privacy Notice, our Cookies Notice and 
                    our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon account</button>
             </div>
        </div>
    )
}

export default Login;
