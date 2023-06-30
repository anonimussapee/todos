import React from "react";
import './TodoTitleBig.css'

function TodoTitleBig({value, loading}){
  return (
    <h1 className={`title-big ${loading && 'title--loading'}`}>{value}</h1>
  );
}
export {TodoTitleBig};