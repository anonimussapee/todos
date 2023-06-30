import React from "react";
import './TodoCongratulations.css';
import { IconDelete } from "../TodoIcons/IconDelete";

function TodoCongratulations({value, action}) {

  return (
    <section className="main--congratulation-background ">
      <div className="background-close" onClick={()=>{
        action()
      }}></div>
      <div className="panel-congratulation">
      <ul className="background">
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
   <li></li>
      </ul>
        <p className="panel-message">{value}</p>
        <IconDelete action={()=>{
          action()
        }}/>
      </div>
    </section>
  );
}

export {TodoCongratulations};