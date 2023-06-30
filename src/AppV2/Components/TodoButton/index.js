import React from "react";
import './TodoButton.css';

function TodoButton({value,todoAction, loading}){
  return (

    <button className={`todo-button ${loading && 'title--loading'}`}  disabled={loading && true} onClick={()=>{todoAction()}}>{value}</button>
  );
}

export {TodoButton};