import React from "react";
import { TodoButton } from '../components/TodoButton';
import { TodoTitleBig } from '../components/TodoTitleBig';
import { TodoItem } from '../components/TodoItem';
import { TodoSearch } from '../components/TodoSearch';
import { TodoCounter } from '../components/TodoCounter';
import { TodoEmpty } from "../components/TodoEmpty";
import {TodoError} from "../components/TodoError"
import { TodoLoading } from "../components/TodoLoading";
import { TodoCongratulations } from "../components/TodoCongratulations";
import { TodoContext } from "../components/TodoContext";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";

function AppUI(){
  
  const {
    loading,
    error,
    searchTodo,
    changeStatus,
    deleteTask,
    congratulationStatus,
    toggleCongratulation,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <section className="App">

    <TodoTitleBig value={"Haz tu lista de Todos por hacer"}/>

    <TodoSearch title={"buscar Todos"} placeholder={"tarea importante"} />
    
    <TodoCounter />

    {congratulationStatus && <TodoCongratulations value={"Felicidades terminaste tu lista de Todos, ERES LO MAXIMO PERO.. ¿ESO ES TODO?"} action={toggleCongratulation} />}


      <div className="container">
        {loading && <TodoLoading/>}
  
        {error && <TodoError/>}
  
        {(searchTodo.length>0 &&searchTodo.map(item => {
          return (<TodoItem key={item.id}  value={item.name} status={item.status} onComplete={()=>{
            changeStatus(item.id)
          }} onDelete={()=>{
            deleteTask(item.id);
          }} />)
        })) || (searchTodo.length === 0&& !loading && !error && <TodoEmpty/>)}
  
      </div> 

    <TodoButton value={"Crear Todo's"} todoAction={()=>{
      setOpenModal(true)
    }}/>
    {openModal && (<Modal><TodoForm /></Modal>)}
  </section>
  );
}
export {AppUI};