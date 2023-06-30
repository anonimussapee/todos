import './ChangeAlert.css';
import { useStorageListener } from './useStorageListener';

const ChangeAlert = ({sincronize}) => {
  const {show, toggleShow}=useStorageListener(sincronize);
  if(show){
    return (
      <div className='container-alert'>
        <div className='alert-mesage'>
          <h2>Hay una actualización</h2>
          <button onClick={()=>{
            toggleShow();
          }}>Actualizar</button>
        </div>
      </div>
    );
  }else{
    return null;
  }


}

export {ChangeAlert};