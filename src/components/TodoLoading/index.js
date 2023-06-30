import React from "react";
import "./TodoLoading.css";

function TodoLoading(){

  return (
    <React.Fragment>
    <article key='loading1' className="main--card-todo loading">
    </article>
    <article key='loading2' className="main--card-todo loading">
    </article>
    <article key='loading3' className="main--card-todo loading">
    </article>
    <article key='loading4' className="main--card-todo loading">
    </article>
    
    </React.Fragment>
  );
}
export {TodoLoading};