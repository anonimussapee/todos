import React from "react";
import { useLocalStorage } from "./useLocaleStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){
   // const todosList = [
  //   {name:"hacer los deberes de programación", status:true, id: 1},
  //   {name:"hacer los deberes de Inglés", status:true, id: 2},
  //   {name:"terminar el curso de webpack", status:false, id: 3},
  //   {name:"hacer un nuevo portafolio", status:false, id: 4},
  //   {name:"terminar el curso de Introducción a React", status:false, id: 5},
  //   {name:"certificar el curso definitivo de html y css", status:false, id: 6},
  //   {name:"conseguir nivel avanzado en inglés", status:false, id: 7},
  //   {name:"darle medicina al gato loco", status:false, id: 8},
  //   {name:"desarrollar mi producto", status:false, id: 9},
  // ];
  // let data = localStorage.getItem('TodoList') || [];
  // localStorage.setItem('TodoList', JSON.stringify(todosList));
  
  // let TodosList =JSON.parse(localStorage.getItem('TodoList')) || todosList;
  const {
    dataItem:todo,
    saveLocal:setTodo,
    loading,
    error
   } = useLocalStorage("DataTodo",[]);

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

    
  return (
    <TodoContext.Provider value={{
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
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider};

