//notre premier button
export function Button1(props){
    return(
        <button onClick={()=>{props.changer()}}>{props.nom}</button>
    )
    
}

export function Button2(props){
    return(
        <button onClick={()=>{props.changer()}}>{props.nom}</button>
    )
    
}