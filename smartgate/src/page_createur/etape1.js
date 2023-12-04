export default function Etape1(){


    return(
        <>
        <h3 style={{textAlign: "left"}}>Etape 1 sur 3</h3>
        <div className="tete">
        <h1>Commençons par découvrir quel type de cours vous souhaitez créer</h1>
        </div>
        
        <section className="etape1">
            <div className="container-z">
                    <a href="etape2">
                    <img src="{}" alt=""/>
                    <h2 style={{color: "black"}}>Cours</h2>
                       
                    </a>
                    <p>
                        Créer des expériences d'apprentissage<br/>
                        exceptionnelles grâce des sessions <br/>vidéos, des quiz, des exercices de codages.
                        </p>
            </div>
            <div class="container-z">
                <a href="etape2" >
                    <img src="{}" alt=""/>
                    <h2 style={{color:"black"}}>Exercices</h2>  
                </a>
                <p>Aider les participants à se preparer <br/>
                        aux examens de certifications<br/>en leur fournissantdes questions de pratique.</p>
            </div>
        </section>
        </>
    )
}


