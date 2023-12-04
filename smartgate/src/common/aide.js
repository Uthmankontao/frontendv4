import NewFooter from "./newFooter";
import NewNavbar from "./newNavbar";
//import "./newNav.css"
export default function Aide(){



    return(
        <>
        
        <NewNavbar />
        <section class="hero" >
        <div class="container">
            <h2>Besoin d'aide ?</h2>
            <p>Vous trouverez ici des réponses aux questions fréquemment posées sur l'utilisation de SmartGate.</p>
        </div>
    </section>

    <section class="faq" >
        <div class="container" style={{marginTop: "40px"}}>
            <h3>Questions fréquentes</h3>
            <div class="faq-item" style={{marginTop: "40px"}}>
                <h4>Comment créer un compte sur SmartGate ?</h4>
                <p>Pour créer un compte sur SmartGate, cliquez sur le bouton "Inscription" en haut à droite de la page d'accueil. Remplissez le formulaire d'inscription en fournissant les informations requises et suivez les instructions pour valider votre compte.</p>
            </div>
            <div class="faq-item" style={{marginTop: "40px"}}>
                <h4>Comment acheter un cours sur SmartGate ?</h4>
                <p>Pour acheter un cours sur SmartGate, suivez les étapes suivantes :
                <ul>
                    <li>Connectez-vous à votre compte SmartGate.</li>
                    <li>Recherchez le cours qui vous intéresse à l'aide de la barre de recherche.</li>
                    <li>Cliquez sur le cours pour accéder à sa page.</li>
                    <li>Cliquez sur le bouton "Acheter maintenant" pour ajouter le cours à votre panier.</li>
                    <li>Procédez au paiement en suivant les instructions.</li>
                </ul>
                </p>
            </div>
            <div class="faq-item" style={{marginTop: "10px"}}>
                <h4>Comment contacter le support technique ?</h4>
                <p>Si vous rencontrez un problème technique ou avez besoin d'aide, vous pouvez contacter notre support technique par e-mail à l'adresse suivante : support@smartgate.com. Notre équipe sera ravie de vous aider.</p>
            </div>
        </div>
    </section>

    <section class="contact">
        <div class="containerformulaire" style={{marginTop: "10px"}}>
            <h3>Nous contacter</h3>
            <p style={{textAlign: "center",}}>Si vous avez des questions ou des commentaires, n'hésitez pas à nous contacter en utilisant le formulaire ci-dessous :</p>
            <form action="#" method="POST">
                <label for="name">Nom :</label>
                <input type="text" id="name" name="name" required />

                <label for="email">E-mail :</label>
                <input type="email" id="email" name="email" required />

                <label for="message">Message :</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    </section>

    <footer>
        <NewFooter />
    </footer>
        </>
    )
}