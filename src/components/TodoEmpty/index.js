import React from "react";
import "./TodoEmpty.css";
import img404 from "./img404.webp";

function TodoEmpty(){

  return (
    <div className="status-container">

      <img src={img404}className="statusEmpty"/>
      <h3 key="statusEmpty" className="statusAfter">No hay nada aquí, ¿quíeres crear un Todo?</h3>
    </div>
  );
}
export {TodoEmpty};