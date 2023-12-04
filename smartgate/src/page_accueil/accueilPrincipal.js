import "./accueilPrincipal.css"
import poster from "./images/poster.jpg"
import python from "./images/python.png"
import math from "./images/math.jpeg"
import javascript from "./images/javascript.png"
import webdev from "./images/webDev.jpeg"
import musique from "./images/musique.jpeg"
import datascience from "./images/datascience.jpeg"
import digitalmarketing from "./images/digital marketing.jpeg"
import infosystem from "./images/infosystem.jpeg"
import graphicdesign from "./images/graphicdesign.jpeg"
import NewNavbar from "../common/newNavbar"
import NewFooter from "../common/newFooter"
import { Link } from 'react-router-dom';



export default function AccueilPrincipal(){



    return(
        <>
        
        
        {/* Notre barre de navigation */}
              
                    < NewNavbar />

                    
                

        {/* Notre section présentation */}
                <section class="hero">
                <div class="container">
        <h2 style={{color: "black"}}>Découvrez une nouvelle façon d'apprendre en ligne</h2>
        <p>Accédez à une large gamme de cours dans différents domaines et développez vos compétences.</p>

        <Link  to="cours"><button class="btne" style={{color:"white"}}>Commencer</button></Link>

        </div>

    <div class="Poster">
    <img src={poster} alt="poster" style={{borderRadius:"10px"}} />
    </div>

    <div className="barreRecherche" style={{
        marginBottom: "1%",
    }}>
                    <form action="#" method="GET" style={{textAlign:"center",}}>
                    <input  type="text" name="search" placeholder="Rechercher un cours" style={{
                        color: "black", textAlign: "center", backgroundColor: "white", width:"100%", height: "55px", padding: "10px", fontSize: "16px", border: "1px solid", borderRadius: "15px"}}/>
                    <button style={{borderRadius:"18px"}} type="submit">Rechercher</button>
                    </form>
    </div>
</section>

<section class="categories">
    <div class="container">
        <h3>Explorez nos catégories de cours</h3>
        <ul class="category-list">
            <li><a href="#" style={{margin:"3rem"}}>Technologie</a></li>
            <li><a href="#" style={{margin:"3rem"}}>Business</a></li>
            <li><a href="#" style={{margin:"3rem"}}>Design</a></li>
            <li><a href="#" style={{margin:"3rem"}}>Langues</a></li>
            <li><a href="#" style={{margin:"3rem"}}>Musique</a></li>
        </ul>
    </div>
</section>

<section class="popular-courses">
    <div class="container">
        <h3>Cours populaires</h3>
        <div class="course-grid">
            <div class="course-card">
            <img src={webdev} alt="developpement" />
                <h4>Introduction to Web Development</h4>
                <p>Learn the basics of web development and create your first website.</p>
                <button>En savoir plus</button>
            </div>
            <div class="course-card">
            <img src={datascience} alt="datascience" />
                <h4>Data Science for Beginners</h4>
                <p>Discover the world of data science and learn how to analyze and interpret data.</p>
                <button>En savoir plus</button>
            </div>
            <div class="course-card">
                <img src={graphicdesign} alt="design" />
                <h4>Introduction to Graphic Design</h4>
                <p>Master the principles of graphic design and create stunning visual compositions.</p>
                <button>En savoir plus</button>
            </div>
	    <div class="course-card">
            <img src={musique} alt="musique" />
                <h4>Introduction to Music</h4>
                <p>Learn the basics of Music to begin your career.</p>
                <button>En savoir plus</button>
            </div>
            <div class="course-card">
                <img src={math} alt="mathematiques" />
                <h4>Mathematics</h4>
                <p>Discover the fundamentals of Mathematics.</p>
                <button>En savoir plus</button>
            </div>
            <div class="course-card">
                <img src={javascript} alt="javascript" />
                <h4>Learn to programm with Javascript</h4>
                <p>Join us to learn javascript the most used language of programmation to make your web page interactive.</p>
                <button>En savoir plus</button>
            </div>
        </div> 

        <h3>Les plus récents</h3>
        <div class="course-grid">
            
            <div class="course-card">
                <img src={digitalmarketing} alt="marketing" />
                <h4>Get started with digital marketing</h4>
                <p>Dive into digital marketing and unlock endless possibilities for online success.</p>
                <button>En savoir plus</button>
            </div>
            <div class="course-card">
                <img src={python} alt="python" />
                <h4>Learn the basics of Python language</h4>
                <p>
                    Discover the foundations of Python and unlock a world of coding possibilities.</p>
                    <button>En savoir plus</button>
            </div>
            <div class="course-card">
                <img src={infosystem} alt="SI" />
                <h4>Discover the world of information system</h4>
                <p>
                    Uncover the dynamic universe of information systems and embrace the power of knowledge.</p>
                    <button>En savoir plus</button>
            </div>
        </div>
        
    </div>
</section>

<footer>
<NewFooter />
</footer>
        </>
    )
       
}