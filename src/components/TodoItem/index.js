import React from "react";
import './TodoItem.css';
import { IconComplete } from "../TodoIcons/IconComplete.js";
import { IconDelete } from "../TodoIcons/IconDelete.js";

function TodoItem({value, status, onComplete, onDelete}){
  return (
    <article className="main--card-todo">
      {/* <span className={(status && "material-symbols-outlined cursor tocomplete finished iconCircle " )|| "material-symbols-outlined cursor tocomplete iconCircle "} onClick={onComplete}>
        &#xE86C; 
      </span> */}
      <IconComplete action={onComplete} status={status}/>
      <p className={(status && "todo-work completeTask")|| "todo-work"}>
        {value}
      </p>
      <IconDelete action={onDelete}/>
      {/* <span className="material-symbols-outlined cursor delete iconCircle" onClick={onDelete}>
        &#xE872;
      </span> */}

    </article>
  );
}

export {TodoItem};