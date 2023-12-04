import NewFooter from "./newFooter"
import NewNavbar from "./newNavbar"
export default function AboutUS(){
    const itma = "https://lh3.googleusercontent.com/p/AF1QipMamAWWtOv1gOSLwlD3IF-L0ZPOpfwVZBJd9IAj=s1360-w1360-h1020";
    const fst = "https://media.licdn.com/dms/image/C5603AQES3aET_MaQnA/profile-displayphoto-shrink_800_800/0/1539391037984?e=2147483647&v=beta&t=GtZ-6oWrSffwFF5X4j9abQRCLiKx7yC0x1264_9zmLw"
    const harvard="";
    const mit = ""

    return(
        <>
        
        <NewNavbar />


    <section class="hero">
            <div class="container">
                <h2>Découvrez une nouvelle façon d'apprendre en ligne</h2>
                <p>Accédez à une large gamme de cours dans différents domaines et développez vos compétences.</p>
                <a href="#" class="btn">Commencer</a>
            </div>
    </section>


    <section class="about">
            <div class="container">
                <h3>À propos de SmartGate</h3>
                <p>SmartGate est une plateforme d'apprentissage en ligne innovante qui vise à révolutionner l'éducation en offrant des cours de haute qualité dans divers domaines. Notre objectif est de permettre aux apprenants du monde entier d'accéder à une éducation de qualité, quel que soit leur lieu de résidence ou leur niveau d'expérience.</p>
        </div>
    </section>


    <section class="mission">
            <div class="container">
                <h3>Notre mission</h3>
                <p>Notre mission est de démocratiser l'éducation en offrant des cours en ligne de qualité supérieure à un large public. Nous croyons que l'apprentissage en ligne est la clé pour permettre aux individus de développer leurs compétences, d'acquérir de nouvelles connaissances et d'atteindre leurs objectifs professionnels et personnels.</p>
            </div>
    </section>


    <section class="goal">
            <div class="container">
                <h3>Notre objectif</h3>
                <p>Nous visons à permettre aux apprenants d'accéder à une éducation de qualité, quelle que soit leur situation géographique ou leur niveau d'expérience. Grâce à notre plateforme d'apprentissage en ligne, nous souhaitons offrir un large éventail de cours dans différents domaines pour aider les individus à développer leurs compétences et à atteindre leurs objectifs professionnels et personnels.</p>
            </div>
    </section>


    <section class="benefits">
            <div class="container">
                <h3>Pourquoi choisir SmartGate ?</h3>
                <ul style={{display: "flex",
                flexDirection: "raw",
            marginTop: "2%", textAlign: "left",}} >
                    <li>Large gamme de cours dans différents domaines</li>
                    <li>Instructeurs experts et expérimentés</li>
                    <li>Flexibilité d'apprentissage selon votre rythme</li>
                    <li>Plateforme conviviale et facile à utiliser</li>
                    <li>Utilisation de la technologie blockchain pour la sécurité et la transparence</li>
                </ul>
            </div>
    </section>


    <section class="statistics">
            <div class="container">
                <h3>Quelques chiffres sur SmartGate</h3>
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
                    </div>
            </div>
    </section>


    <section class="partners">
            <div class="container">
                <h3>Nos partenaires académiques</h3>
                    <div class="partners-grid">
                    <img src={itma} alt="itma" />
                    <img src={harvard} alt="harvard" />
                    <img src={mit} alt="MIT" />
                    <img src={fst} alt="FST" />
                    </div>
            </div>
    </section>

    <footer>
           <NewFooter />
    </footer>

    
        </>
    )
}