import React, { useState } from "react";
//import "./newNav.css"
export default function SousMenu() {
  const [montre, setMontre] = useState(false);
    window.onclick= (e) => {
        if(!e.target.matches(".sous-menu")){
            setMontre(false)
        }
    }
  function Change() {
    setTimeout(() => {
        setMontre(!montre);
    }, 200)
    
  }

  if (montre === true) {
    return (
      <>
        <div style={{ position: "relative" }}>
          <a>
           Categories
          </a>
          <Menu />
        </div>
      </>
    );
  } else {
    return (
      <a onClick={()=>Change()}>
         Categories
      </a>
    );
  }
}

function Menu() {
  return (
    <div className="sous-menu">
      <a>
        <h5>Business</h5>
      </a>
      <a>
        <h5>Technologie</h5>
      </a>
      <a>
        <h5>Design</h5>
      </a>
      <a>
        <h5>Langues</h5>
      </a>
      <a>
        <h5>Musique</h5>
      </a>
    </div>
  );
}
