import React, {useState} from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
export default function SignUp (){
    const [prenom, setPrenom] =useState("");
    const [nom, setNom] =useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        });

    };


    return(
        <div className="body">
            <div className="sign-Up-container">
            <form onSubmit={signUp}>
                <h1>Création de votre compte</h1>
                <label>Prenom</label>
                <input type="prenom" placeholder="votre prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)}></input>
                <label>Nom</label>
                <input type="nom" placeholder="votre nom" value={nom} onChange={(e) => setNom(e.target.value)}></input>
                <label>Email</label>
                <input type="email" placeholder="votre adresse mail" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Mot de passe</label>
                <input type="password" placeholder="votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)}></input><br/>
                <button type="submit">Sign Up</button>
               
            </form>
            <a href="login">Already have an account ? Sign In here</a>
        </div>
        </div>
        
    );
};

