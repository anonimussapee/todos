import React from "react";
import "./TodoError.css";
import img404 from "../TodoEmpty/img404.webp";

function TodoError(){

  return (
    <div className="status-container">

      <img src={img404}className="statusError"/>
      <h3 key="statusError" className="statusAfter">Hubo un error en obtener datos del API</h3>
    </div>
  );
}
export {TodoError};