import React from "react";
import './TodoTitleBig.css'

function TodoTitleBig({value}){
  return (
    <h1 className="title-big">{value}</h1>
  );
}
export {TodoTitleBig};