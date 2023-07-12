import React, { useReducer } from "react";

function useLocalStorage2(nameItem, initialValue){

  // const [dataItem, setDataItem] = React.useState(initialValue);
  // const [loading,setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);
  // const [sincronize,setSincronize] = React.useState(true);

  let dataJson = localStorage.getItem(nameItem);

 

  const [state , dispatch] = useReducer(reducer,initialState(initialValue));
  

  const {
    dataItem,
    loading,
    error,
    sincronize,
  } = state


  const onSincronize = (action) => {
      // setDataItem(action['payload'])
      //   setLoading(false);
      //   setSincronize(true)
        dispatch({type: actionTypes.sincronize, payload:action.payload})
  }

  const onError = (action) => {
    console.log(action['payload'])
    dispatch({type: actionTypes.error, payload:action.payload})
    // setLoading(false)
    // setError(true);
  }

  const onSave = (action) => {
    
    // setDataItem(action['payload'])
    dispatch({type: actionTypes.save, payload:action.payload})

    localStorage.setItem(action["nameItem"], JSON.stringify(action['payload']));

  }

  const onChangeSincronize = () => {
    // setLoading(true);
    // setSincronize(false);
    dispatch({type: actionTypes.changeSincronize})

  }

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        let dataparsed = JSON.parse(dataJson) || initialValue;
        onSincronize({payload:dataparsed})
      }catch (error){
        onError({payload:error})
      }
    },2000);
  },[sincronize]);
  
  const saveLocal = (data) => {
    onSave({payload: data, nameItem:nameItem})
  };

  const setSincronized = () => {
   onChangeSincronize()
  };

  return {dataItem, saveLocal, loading, error, sincronize, setSincronized};
}

const actionTypes ={
  sincronize : 'SINCRONIZE',
  error : 'ERROR',
  save : 'SAVE',
  changeSincronize : 'CHANGE_SINCRONIZE'
}

const initialState = (initialData) => ({
  'dataItem' : initialData,
  'loading' : true,
  'error' : false,
  'sincronize': true
})

const reducerObj = (state, action) => ({
  [actionTypes.sincronize] : {...state, dataItem :action.payload, loading : false, sincronize : true  },
  [actionTypes.error] : {...state, loading : false, error : true, err:action.payload },
  [actionTypes.save] : { ...state , dataItem: action.payload},
  [actionTypes.changeSincronize] : { ...state, loading: true, sincronize : false }
})

const reducer = (state, action) => {

  return reducerObj(state,action)[action.type] || state

}

export {useLocalStorage2};