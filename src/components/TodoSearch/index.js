import React from "react";
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";

function TodoSearch({title, placeholder}){
  const {searchValue,setSearchValue} = React.useContext(TodoContext);
  return (
    <label className="TodoSearchLabel">
      <span className="todoSearchSpan">{title}</span>
      <input className="TodosearchInput" type="search" placeholder={placeholder} value={searchValue} onChange={(event)=>{
        setSearchValue(event.target.value);
      }}/>
    </label>
  );
}
export {TodoSearch};