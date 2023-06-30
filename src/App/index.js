import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../components/TodoContext';
import {  BrowserRouter, useRoutes } from 'react-router-dom';
import { AppUI2 } from '../AppV2/App';
import { NavBar } from '../AppV2/Components/NavBar';
import { NotFound } from '../components/Pages/NotFound';


function App() {
  
  const AppRoutes = () =>{
    let routesnav = useRoutes([
      {path:'todo2/', element:<AppUI/>},
      {path:'todo2/home', element:<AppUI/>},
      {path:'todo2/todo2', element:<AppUI/>},
      {path:'todo2/v2', element:<AppUI2/>},
      {path:'todo2/*', element:<NotFound/>},


    ]);
    return routesnav;
  }


  return (
    <BrowserRouter>
      <TodoProvider>
      <NavBar/>  
      <AppRoutes/>
      </TodoProvider>
    </BrowserRouter>
   
  );
}  
//comentary


export default App;


  // <React.Fragment></React.Fragment>  o <></> para renderizar elementos sin tener que crear un contenedor ya que siempre se necesita un contenedor padre y por dentro los diferentes componentes, ademas React puede renderizar arrays
    // ademas si los componentes estan repetidos cada elemento debe contener la propiedad key con un valor unico, 