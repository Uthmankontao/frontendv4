import "../page_etudiant/etudiant"

import React from "react"

export default function PageCours(){


    return(
        <>
        
                <div className="Cours">
                    <h1>Titre du Cours :</h1> <input type="text" placeholder="Champ texte" />
                    

                    <h3>Prérequis :</h3> <textarea placeholder="Champ texte pour le prérequis 1"></textarea>
                    <textarea placeholder="Champ texte pour le prérequis 2"></textarea>
                    <textarea placeholder="Champ texte pour le prérequis 3"></textarea>
                    
                    {/* Ajoutez davantage de prérequis selon vos besoins */}
                </div>

                <div className="module">
                    <h2>Module:</h2>
                    <h3>Titre:</h3>
                    <input type="text" placeholder="Champ texte pour le titre du module" />

                </div>
                
                <div className="leçon">
                    <h2>Leçon:</h2>
                    <h3>Titre :</h3>
                    <input type="text" placeholder="Champ texte pour le titre de la leçon" />

                </div>

                <div className="chapitre">
                    <h2>Chapitre 1 :</h2>
                    <h3>Titre :</h3>
                    <input type="text" placeholder="Champ texte pour le titre du chapitre" />
                </div>

                <div className="Section">
                    <h3>Section 1 :</h3>
                    <h4>Titre :</h4>
                    <input type="text" placeholder="Champ texte pour le titre de la section" />    
                </div>
                
                <div className="ressource">
                    <h2>Ressources :</h2>
                    <ul>
                        <li>
                        Image 1 : <input type="text" placeholder="Champ texte pour le lien ou l'emplacement de l'image" />
                        </li>
                        <li>
                        Texte 1 : <input type="text" placeholder="Champ texte pour le lien ou l'emplacement du texte" />
                        </li>
                        <li>
                        Audio 1 : <input type="text" placeholder="Champ texte pour le lien ou l'emplacement de l'audio" />
                        </li>
                        <li>
                        Article 1 : <input type="text" placeholder="Champ texte pour le lien ou l'emplacement de l'article" />
                        </li>
                        <li>
                        Vidéo 1 : <input type="text" placeholder="Champ texte pour le lien ou l'emplacement de la vidéo" />
                        </li>
                    </ul>
                </div>
        </>
    )
}