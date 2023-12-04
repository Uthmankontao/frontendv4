import { useState } from "react"

export default function Rex(){
    const [nom, setNom] = useState([])
    fetch("http://127.0.0.1:8000/test/")
    .then(response => response.json())
    .then(data => {
        setNom(data)
    })
    
    function Remplacenom(evt){
        console.log(nom)
    }
    

    return(
        <>
        <h1>Police</h1>
        <input type="text" onChange={(Event)=>Remplacenom(Event)}/>

        </>
        
    )
}