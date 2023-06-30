import React from "react";
import ReactDOM  from "react-dom";

function Modal({children, setOpenModal}){
 

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