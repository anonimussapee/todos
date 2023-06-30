import React from "react";
import './TodoCounter.css';

function TodoCounter({completed, todo, loading}){


  let alltodos = todo.length;

  let element ;
  
  if( completed === 0 && alltodos === 0){
    element = [ <h2 key={'todocountTitle1'}  className={`todo-counter  ${loading && 'title--loading'}`}>No tienes Todos por hacer</h2>];
    // element = [ <h1 className="todo-counter">Ya terminaste todos tus Todos, felicidades pero ¿es suficiente para tí?</h1>];
      // let TodoCongratulations= document.querySelector('.main--congratulation-background');
      // TodoCongratulations.classList.toggle('hidden');
      
  }else{
    element = [ <h2 key={'todocountTitle3'} className={`todo-counter  ${loading && 'title--loading'}`}>Has completado {completed} de {alltodos}</h2>];
  }
  /**else if( completed > 0 && alltodos === completed){
    element = [ <h2 key={'todocountTitle2'}
      className="todo-counter">Has completado {completed} de {alltodos}</h2>,<TodoCongratulations value={"Felicidades terminaste tu lista de Todos, ERES LO MAXIMO PERO.. ¿ESO ES TODO?"} action={action}/>];
    setTimeout(() => {
      action()
    }, 400);
    // element = [ <h1 className="todo-counter">Ya terminaste todos tus Todos, felicidades pero ¿es suficiente para tí?</h1>];
      // let TodoCongratulations= document.querySelector('.main--congratulation-background');
      // TodoCongratulations.classList.toggle('hidden');
      
  }**/
  
  return (
    element
  );
}
export {TodoCounter};