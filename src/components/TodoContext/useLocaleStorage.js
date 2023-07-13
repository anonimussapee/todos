import React from "react";

function useLocalStorage(nameItem, initialValue){

  // const [dataItem, setDataItem] = React.useState(initialValue);
  // const [loading,setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);

  const [state, dispatch] = React.useReducer(reducer,initialState(initialValue))

  const {
    dataItem, loading, error
  } = state

  let dataJson = localStorage.getItem(nameItem);

  const onSaveData = (action) => {
      // setDataItem(action.payload)
      // setLoading(false);
      dispatch({type:actionTypes.save, payload:action.payload})
  }

  const onError = (action) =>{
    console.log('error Loco',action.payload)
    // setLoading(false)
    // setError(true);
    dispatch({type:actionTypes.error})
  }
  

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        let dataparsed = JSON.parse(dataJson) || initialValue;
        onSaveData({payload:dataparsed}) 
      }catch (error){
       onError({payload:error})
      }
    },2000);
  },[]);
  
  const saveLocal = (data) => {
    onSaveData({payload : data})
    localStorage.setItem(nameItem, JSON.stringify(data));
  };
  return {dataItem, saveLocal, loading, error};
}


const initialState = (initialValue) => ({
  'dataItem':initialValue,
  'loading':true,
  'error':false,
})

const actionTypes = {
  save : 'SAVE' ,
  error: 'ERROR'
}

const reduceObj = (state, action) => ({
  [actionTypes.save] : {...state, loading:false, dataItem:action.payload },
  [actionTypes.error] : {...state, loading:false, error:true,}
})

const reducer = (state, action) => {
  return reduceObj(state, action)[action.type] || state
}


export {useLocalStorage};