import python from "./images/python.png"
import math from "./images/math.jpeg"
import javascript from "./images/javascript.png"
import webdev from "./images/webDev.jpeg"
import musique from "./images/musique.jpeg"
import musique2 from "./images/musique2.jpeg"
import musique3 from "./images/musique3.jpeg"
import datascience from "./images/datascience.jpeg"
import digitalmarketing from "./images/digital marketing.jpeg"
import infosystem from "./images/infosystem.jpeg"
import graphicdesign from "./images/graphicdesign.jpeg"
import langue1 from "./images/langue1.jpeg"
import langue2 from "./images/langue2.jpeg"
import langue3 from "./images/langue3.jpeg"
import marketing2 from "./images/marketing2.jpeg"
import marketing3 from "./images/marketing3.jpeg"
import design4 from "./images/design4.jpeg"
import design2 from "./images/design2.jpeg"
import desidn3 from "./images/desidn3.jpeg"

import React from 'react';

import NewFooter from "../common/newFooter"
import NewNavbar from "../common/newNavbar"
import "./etudiant.css"

export default function Etudiant(){


 



    return(
        <>
            

            <NewNavbar />


            <section>

            <div class="contenu">
                <p style={{textAlign: "center", fontSize:"24px"}}><h1>Bienvenue dans la communauté Smartgate</h1>
                    Le plus grand site de formation dans le monde</p> 
                    
                    <div className="barreRecherche">
                    <form action="#" method="GET" style={{textAlign:"center",}}>
                    <input  type="text" name="search" placeholder="Rechercher un cours" style={{
                        color: "black", textAlign: "center", backgroundColor: "white", width:"100%", height: "55px", padding: "10px", fontSize: "16px", border: "1px solid", borderRadius: "15px"}}/>
                    <button style={{borderRadius:"18px"}} type="submit">Rechercher</button>
                    </form>
                    </div>
                    
                
            </div>
            </section>


        <section class="popular-courses">

            <div class="container">

                <h3 style={{marginTop: "5%"}}>Technologie</h3>
                <div class="course-grid">
                    
                    <div class="course-card">
                    <img src={datascience} alt="datascience" />
                        <h4>Data Science for Beginners</h4>
                        <p>Discover the world of data science and learn how to analyze and interpret data.</p>
                        <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                    <div class="course-card">
                        <img src={python} alt="python" />
                        <h4>Learn the basics of Python language</h4>
                        <p>
                            Discover the foundations of Python and unlock a world of coding possibilities.</p>
                            <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                    <div class="course-card">
                        <img src={infosystem} alt="SI" />
                        <h4>Discover the world of information system</h4>
                        <p>
                            Uncover the dynamic universe of SI.</p>
                            <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                </div>

                <h3 style={{marginTop: "5%"}}>Business</h3>
                <div class="course-grid">
                    
                    <div class="course-card">
                        <img src={digitalmarketing} alt="marketing" />
                        <h4>Get started with digital marketing</h4>
                        <p>Dive into digital marketing and unlock endless possibilities for online success.</p>
                        <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                    <div class="course-card">
                        <img src={marketing2} alt="marketing" />
                        <h4>Foundations of Digital Marketing</h4>
                        <p>
                            Learn the fundamental principles and strategies of digital marketing to effectively promote products or services online.</p>
                            <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                    <div class="course-card">
                        <img src={marketing3} alt="marketing" />
                        <h4>Business Strategy and Product Development</h4>
                        <p>
                            Gain insights into strategic planning and product development processes to drive business growth and success.</p>
                            <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                </div>

                <h3 style={{marginTop: "5%"}}>Musique</h3>
                <div class="course-grid">
                    
                    <div class="course-card">
                        <img src={musique2} alt="musique" />
                        <h4>Advanced Techniques in Electric Guitar Playing</h4>
                        <p>Master advanced techniques and skills in playing the electric guitar to enhance your musical abilities and expand your repertoire.</p>
                        <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                    <div class="course-card">
                        <img src={musique3} alt="musique" />
                        <h4>Studio Mixing and Music Production</h4>
                        <p>
                            Learn the art of studio mixing and music production techniques to create professional-level recordings and polished music tracks.</p>
                            <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                    <div class="course-card">
                        <img src={musique} alt="musique" />
                        <h4>Introduction to Music</h4>
                        <p>Learn the basics of Music to begin your career.</p>
                        <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                </div>

                <h3 style={{marginTop: "5%"}}>Design</h3>
                <div class="course-grid">
                    
                    <div class="course-card">
                        <img src={design2} alt="design" />
                        <h4>Graphic Design and Creating Impactful Visuals</h4>
                        <p>Develop skills in graphic design to create visually appealing and impactful designs for various media platforms and communication purposes.</p>
                        <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                    <div class="course-card">
                        <img src={desidn3} alt="design" />
                        <h4>Introduction to User Experience UX Design</h4>
                        <p>
                        Learn the art of studio mixing and music production techniques to create professional-level recordings and polished music tracks.</p>
                            <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                    <div class="course-card">
                        <img src={design4} alt="design" />
                        <h4>Creative Exploration in Interior Architecture</h4>
                        <p>
                        Dive into the world of interior architecture and unleash your creativity to design innovative and visually captivating spaces.</p>
                            <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                </div>

                <h3 style={{marginTop: "5%"}}>Langues</h3>
                <div class="course-grid">
                    
                    <div class="course-card">
                        <img src={langue1} alt="langue" />
                        <h4>Intensive Spanish Learning for Beginners</h4>
                        <p>Immerse yourself in an accelerated Spanish language program designed specifically for beginners.</p>
                        <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                    <div class="course-card">
                        <img src={langue2} alt="langue" />
                        <h4>Advanced French Conversation for Professionals</h4>
                        <p>
                        Enhance your proficiency in French by engaging in advanced conversations tailored for professionals.</p>
                            <a href="cours"><button class="btne">Suivre ce cours</button></a>
                    </div>
                    <div class="course-card">
                        <img src={langue3} alt="langue" />
                        <h4>Introduction to Japanese Language and Culture</h4>
                        <p>
                        Embark on a journey to learn the basics of the Japanese language, including essential vocabulary.</p>
                            <a href="cours"><button class="btne">Suivre ce cours</button></a>
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