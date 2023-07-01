import { TodoButton } from '../Components/TodoButton';
import { TodoTitleBig } from '../Components/TodoTitleBig';
import { TodoItem } from '../Components/TodoItem';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoCounter } from '../Components/TodoCounter';
import { TodoEmpty } from "../Components/TodoEmpty";
import {TodoError} from "../Components/TodoError"
import { TodoLoading } from "../Components/TodoLoading";
import { TodoCongratulations } from "../Components/TodoCongratulations";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";
import { UseTodos } from '../Components/UseTodos';
import { TodoList } from '../Components/TodoList';
import { TodoHeader } from '../Components/TodoHeader';
import { ChangeAlert } from '../Components/ChangeAlert';

function AppUI2(){
  
  const {
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
    setSincronized,
  }= UseTodos();

  return (
    <section className="App">
      <TodoHeader loading={loading}>
        <TodoTitleBig value={"Haz tu lista de Todos por hacer"}/>

        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} title={"buscar Todos"} placeholder={"tarea importante"} />

        <TodoCounter completed={completed} todo={todo}/>

      </TodoHeader> 
 
    {congratulationStatus && <TodoCongratulations value={"Felicidades terminaste tu lista de Todos, ERES LO MAXIMO PERO.. ¿ESO ES TODO?"} action={toggleCongratulation} />}

{/* 
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

      </div>  */}
    <TodoList 
    searchValue={searchValue}
    searchTodo={searchTodo}
    loading={loading} 
    onLoading={()=><TodoLoading/>} 
    error={error}
    onError={()=><TodoError/>} 
    onEmpty={()=><TodoEmpty value='No hay Nada, Crea tu primer TODO'/>} 
    onEmptySearch={()=><TodoEmpty value={`No hay resutados para: ${searchValue}`}/>}
    todo={todo}
    render={item => {
        return (<TodoItem key={item.id}   value={item.name} status={item.status} onComplete={()=>{
          changeStatus(item.id)
        }} onDelete={()=>{
          deleteTask(item.id);
        }} />)
      }}
    >
     {/* {item => {
        return (<TodoItem key={item.id}   value={`${item.name } esto es muy loco`} status={item.status} onComplete={()=>{
          changeStatus(item.id)
        }} onDelete={()=>{
          deleteTask(item.id);
        }} />)
      }}    */}
    </TodoList>    
    <TodoButton value={"Crear Todo's"} todoAction={()=>{
      setOpenModal(true)
    }}
    loading={loading}/>
    {openModal && (<Modal setOpenModal={setOpenModal}><TodoForm getDataAction={getDataAction} setOpenModal={setOpenModal} setSearchValue={setSearchValue}/></Modal>)}
    <ChangeAlert sincronize={setSincronized}/>
  </section>
  );
}
export {AppUI2};