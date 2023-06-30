import React from "react";
import './TodoSearch.css'

function TodoSearch({title, placeholder, searchValue, setSearchValue, loading}){
  return (
    <label className={`TodoSearchLabel`}>
      <span className={`todoSearchSpan  ${loading && 'title--loading'}`}>{title}</span>
      <input className="TodosearchInput" disabled={loading && true} type="search" placeholder={placeholder} value={searchValue} onChange={(event)=>{
        setSearchValue(event.target.value);
      }}/>
    </label>
  );
}
export {TodoSearch};