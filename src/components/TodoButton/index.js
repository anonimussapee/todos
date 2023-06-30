import React from "react";
import './TodoButton.css';

function TodoButton({value,todoAction}){
  return (

    <button className="todo-button" onClick={()=>{todoAction()}}>{value}</button>
  );
}

export {TodoButton};