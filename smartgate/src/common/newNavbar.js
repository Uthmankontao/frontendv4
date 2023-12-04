import "./newNav.css"
import SousMenu from "./sousMenu"
import tahia5 from "./images/tahia5.png"
export default function NewNavbar(){



    return(
        <>
        
        
            <div class="main">
            <img src={tahia5} alt="logo" style={{width: "50px"}}/>
                <h2 style={{color:"black" }}>SmartGate</h2>
                <ul class="menu">
                    <li><a href="/">Accueil</a></li>
                    <li><a href="Etudiant">Cours</a></li>
                    <li><a href="#"><SousMenu /></a></li>
                    <li><a href="sign">Inscription</a></li>
                    <li><a href="createur">Enseigner</a></li>
                    <li><a href="login">Connexion</a></li>
                    <li><a href="#">Whitepaper</a></li>
                    <li><a href="#">Token SGT</a></li>
                    <li><a href="#">Wallet</a></li>
                    </ul>
		        <div class="search">
                    <form action="#" method="GET">
                    <input type="text" name="search" placeholder="Rechercher un cours"/>
                    <button type="submit">Rechercher</button>
                    </form>
                </div>
            
            </div>
        
        </>
    )
}