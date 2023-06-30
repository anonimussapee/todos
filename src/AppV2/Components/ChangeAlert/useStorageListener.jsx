import { useState } from 'react';

const useStorageListener = (setSincronize) => {
  const [show, setShow] = useState(false);
  window.addEventListener('storage', (change)=>{
    if(change.key === 'TODO_V2'){
      setShow(true);
    }
  });

  const toggleShow = () => {
    setShow(false);
    setSincronize();
  }

  return {
   show,
   toggleShow,
  };

}

export {useStorageListener};