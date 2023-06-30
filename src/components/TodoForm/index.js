import React from "react";
import "./TodoForm.css";
import { TodoButton } from "../TodoButton";
import {IconDelete} from "../TodoIcons/IconDelete";
import { TodoContext } from "../TodoContext";

function TodoForm(){
 
  const { 
    getDataAction,
    setOpenModal,
  } = React.useContext(TodoContext);

  const [formValue,setFormValue] = React.useState("");
  
  const onSubmit =(e)=>{
    e.preventDefault();
  };
  return(
    <div className="form--container">
      <IconDelete action={()=>{
        setOpenModal(false);
        setFormValue("");
        }}/>
      <form action="?" onSubmit={onSubmit} >
        <h3 key="form-h3">Creador de Todos.</h3>
        <label>
          <span>Tu nuevo todo</span>
          <textarea placeholder="Terminar mi tarea del lunes" value={formValue} onChange={(event)=>{
            
            let valueInput =event.target.value;
          
            setFormValue(valueInput);
          }}/>
        </label>
        <TodoButton value="Agregar" todoAction={()=>{
          getDataAction(formValue);
          
          setTimeout(() => {
            setFormValue("ya esta agregado :D");
          }, 500);
        }} />
      </form>
    </div>
  )
}

export {TodoForm};


