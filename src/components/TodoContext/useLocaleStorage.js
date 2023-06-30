import React from "react";

function useLocalStorage(nameItem, initialValue){

  const [dataItem, setDataItem] = React.useState(initialValue);
  const [loading,setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  let dataJson = localStorage.getItem(nameItem);

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        let dataparsed = JSON.parse(dataJson) || initialValue;
        setDataItem(dataparsed)
        setLoading(false);
      }catch (error){
        setLoading(false)
        setError(true);
      }
    },2000);
  },[]);
  
  const saveLocal = (data) => {
    setDataItem(data)
    localStorage.setItem(nameItem, JSON.stringify(data));
  };
  return {dataItem, saveLocal, loading, error};
}

export {useLocalStorage};