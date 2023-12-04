import React, { useState } from 'react';
export default function Etape3(){

    


    return(
        <>
        <h3 style={{textAlign: "left"}}>Etape 3 sur 3</h3>
        <div className="tete"><h1>Quelle catégorie correspond le mieux aux connaissances que vous souhaitez partager ?</h1></div>
        
            <section className='etape3'>
                
                <form>
                        <select >
                            <option>-- Sélectionnez une catégorie --</option>
                            <option>Business</option>
                            <option >Technologies</option>
                            <option >Langues</option>
                            <option >Design</option>
                            <option >Musique</option>
                        </select>
                        <br />
                        <a href="ajouter" className="btne" style={{color: "white", margin:"1rem"}}>Soumettre</a>
                </form>
            </section>
                
                    

        </>
    )
}