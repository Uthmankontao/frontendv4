//import "./demo.css"
import datascience from "./images/datascience.jpeg"

export default function Demon_module(){
    // file representing the structure of a module
    return (
        <>
        <div id="containerBou">
            <h1> Programmation : Part 1</h1>
            <section className="main_content">
                <SideMenu />
                <Center />

            </section>

        </div>

        </>

    )
}

function SideMenu(props){
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    return (
        <>
        <div className = "side">
            <div style={{
                // marginLeft : '8vmin'
            }}>
                <h2>Chapitres : </h2>
                {num.map((numero, id) => {
                    return <h3>Chapitre {numero}</h3>
                })}
            </div>
        </div>
        </>
    )
}

function Center(){
    return (
        <>
        <div className="center">
            <h2 style={{
                textAlign : 'center',
            }}>Javascript Module 1 Introduction :</h2>


            <h3 style={{
                fontSize : '20px',
            }}>Ceci est un example de texte de cours Bla bla blab blab blab blbab balba
                Ceci est un example de texte de cours Bla bla blab blab blab blbab balba
                Ceci est un example de texte de cours Bla bla blab blab blab blbab balba
                Ceci est un example de texte de cours Bla bla blab blab blab blbab balba
                Ceci est un example de texte de cours Bla bla blab blab blab blbab balba
                Ceci est un example de texte de cours Bla bla blab blab blab blbab balba
                </h3>

                <img src={datascience} alt="datascience" />


                <button style={{
                    right : '60px',
                }}>
                <h2>Next</h2>
            </button>
                <button style={{
                    left : '60px',
                }}><h2>Precedent</h2>
            </button>
        </div>

        </>

    )
}