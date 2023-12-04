import React, {useState} from "react";
import { auth } from "../firebase";
import AuthDetails from "./authDetail";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./authentication.css"
export default function SignIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        });

    };


    return(
        <>
        <div className="body">
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Connexion à votre compte</h1>
                <label>Email</label>
                <input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Mot de passe</label>
                <input type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>
                <button type="submit">Log In</button>
            </form>
            <a href="sign">Don't have an account ? Sign Up here</a>
        </div>

        <AuthDetails />
        </div>
        
        </>
        
    );
};
