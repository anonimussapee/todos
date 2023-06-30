import React from "react";
import ReactDOM  from "react-dom";
import { TodoContext } from "../TodoContext";

function Modal({children}){
  const { setOpenModal} = React.useContext(TodoContext);

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="background-modal-close" onClick={()=>{
        setOpenModal(false);
      }}></div>
        {children}
    </div>, document.getElementById("Modal")
  );
}

export  {Modal};