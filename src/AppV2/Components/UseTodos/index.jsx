import React from 'react';
import { useLocalStorage2 } from './useLocaleStorage2';

const UseTodos = () => {

const  {
  dataItem:todo,
  saveLocal:setTodo,
  loading,
  error,
  sincronize,
  setSincronized,
  } = useLocalStorage2('TODO_V2',[]);
  const [searchValue, setSearchValue] = React.useState("");

  const [congratulationStatus, setCongratulationStatus] = React.useState(false);

  const [openModal, setOpenModal] = React.useState(false);
  // const toggleCongratulation = () => {
  //   let TodoCongratulations= document.querySelector('.main--congratulation-background');
  //       TodoCongratulations.classList.toggle('hidden');
  // }
  const toggleCongratulation = () => {
   setCongratulationStatus(false);
  }
  
  
  const completed = todo.filter(item=>{ return !!item.status}).length ; 


  const getDataAction = (data) =>{
    if(todo.length === 0){
      let newTodoData = [{name:data, status:false, id:1}];
      setTodo(newTodoData);
    }else{

      let todoForAdd = [...todo]
      let lastIndex = todoForAdd.sort((a,b)=>{return b.id - a.id; });
      let newValue ={name:data, status:false, id:(lastIndex[0].id +1)};
      todoForAdd.push(newValue);
      setTodo(todoForAdd);
    }
    
  };
  
  // document.addEventListener('submit',(e)=>{
  //   e.preventDefault();
  // })

  const changeStatus = (id) => {
    let newTodos = [...todo];
    let idIndex = newTodos.findIndex(item => item.id === id);
    if(newTodos[idIndex].status){
      newTodos[idIndex].status = false;
    }else{
      newTodos[idIndex].status = true;
    }
    setTodo(newTodos);
    let completedTask = newTodos.filter(item=>{ return !!item.status}).length ; 
    if(completedTask > 0 & completedTask === newTodos.length){
      setCongratulationStatus(true);
    }

  };

  const deleteTask = (id) => {
    let newTodos = [...todo];
    let newTodosFiltered = newTodos.filter(item =>{return item.id !== id});

    setTodo(newTodosFiltered);

    // let completedTask = newTodosFiltered.filter(item=>{ return !!item.status}).length ; 
    // if(completedTask > 0 & completedTask === newTodosFiltered.length){
    //   setCongratulationStatus(true);
    // }
  };

  // fucntion search
  const searchUnsorted = todo.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase()) 
    });
  const  searchTodo = searchUnsorted.sort((a,b)=>{return b.id - a.id })

  return {
    searchValue,
    setSearchValue,
    completed,
    todo,
    searchTodo,
    changeStatus,
    deleteTask,
    loading,
    error,
    toggleCongratulation,
    congratulationStatus,
    openModal,
    setOpenModal,
    getDataAction,
    sincronize,
    setSincronized,
  };
  
}

export {UseTodos};
