import "./createur.css"
import NewFooter from "../common/newFooter"
import NewNavbar from "../common/newNavbar"
import poster_prof from "./images_createur/poster_prof.jpg"
import { Link } from 'react-router-dom';
export default function Createur(){




    return(
        <>

        <NewNavbar />


        <section className="NiveauPoster"></section>

        <div className="container">
            <h2>Transmettez vos connaissances</h2>
            <p style={{marginTop: "2%"}}>
            Se lancer en tant que créateur de contenu ouvre un monde d'opportunités infinies. 
            Les raisons sont innombrables : partager sa passion, inspirer les autres, 
            créer une communauté engagée, et bien plus encore. Explorez les horizons de la créativité et plongez dans cette aventure captivante dès aujourd'hui.
            </p>
            
            <a href="creer"><button class="btne" style={{color:"white"}}>Transmettez vos connaissances</button></a>
        </div>

        <div className="poster_professeur"><img src={poster_prof} alt="poster"/></div>
        
        <section className="Motivation"></section>
        <h1>Il existe d'innombrables raisons de se lancer comme créateur de contenu </h1>
        <div class="container">

            <div className="Creation">
                <h2>Créer des cours à votre image.</h2>
                <p>Libérez votre créativité en publiant vos cours selon vos envies, tout en conservant un contrôle total sur votre contenu.</p>
            </div>
            

            <div className="Inspiration">
                <h2>Stimulez l'inspiration des participants.</h2>
                <p>Enseignez vos connaissances et accompagnez les participants dans l'exploration de leurs intérêts, l'acquisition de nouvelles compétences et l'avancement de leur carrière.</p>
            </div>              
            
            <div className="Recompense_">
                <h2>Profitez des récompenses.</h2>
                <p>Étendez votre réseau professionnel et votre expertise tout en gagnant de l'argent pour chaque inscription payante.</p>
            </div>
        </div> 
            
        
        
        

        <section class="statistics">
            <div class="container">
                    <div class="stats-grid">
                        <div class="stat-card">
                            <h4>+1000</h4>
                            <p>Cours disponibles</p>
                        </div>

                        <div class="stat-card">
                            <h4>+50000</h4>
                            <p>Apprenants inscrits</p>
                        </div>

                        <div class="stat-card">
                            <h4>+300</h4>
                            <p>Instructeurs qualifiés</p>
                        </div>

                        <div class="stat-card">
                            <h4>+100000</h4>
                            <p>Certifications délivrées</p>
                        </div>
                        <div class="stat-card">
                            <h4>+80</h4>
                            <p>Langues</p>
                        </div>
                        <div class="stat-card">
                            <h4>+100</h4>
                            <p>Pays</p>
                        </div>
                    </div>
            </div>
    </section>



        <section className="Commentfaire"></section>
        <h1>Comment faire pour la première fois</h1>


        <section className="Commencez"></section>
        <h1>Prenez le chemin de formateur dès aujourd'hui !</h1>
        <div class="container">
            
            <p>Intégrez l'une des plus grandes plateformes d'apprentissage en ligne au monde
            et ouvrez-vous à un univers de possibilités. <br/> En devenant formateur sur cette plateforme, 
            vous pourrez partager vos connaissances et compétences avec un public mondial avide d'apprendre.</p>
            <a href="creer" class="btn">Commencer</a>
        </div>










        <NewFooter />
        </>
    )
}