import React from "react";
import "./TodoEmpty.css";
import img404 from "./img404.webp";

function TodoEmpty({value}){

  return (
    <div className="status-container">

      <img src={img404}className="statusEmpty"/>
      <h3 key="statusEmpty" className="statusAfter">{value}</h3>
    </div>
  );
}
export {TodoEmpty};