export default function Etape2(){


    return(
        <>
         <h3 style={{textAlign: "left"}}>Etape 2 sur 3</h3>
         <div className="tete"><h1>Donnez un nom à votre cours</h1></div>
            
        <section className="etape2">
            
            <div className="namecontainer">
                <form>
                    <input type="texte" placeholder="Donner un nom comme par exemple: Cours de programmation Java"/>
                    <a href="etape3" className="btne" style={{color: "white", margin:"1rem"}}>Valider</a>
                </form>
            </div>
        </section>
        
        </>
    )
}