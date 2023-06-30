import React from "react";

function useLocalStorage2(nameItem, initialValue){

  const [dataItem, setDataItem] = React.useState(initialValue);
  const [loading,setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sincronize,setSincronize] = React.useState(true);

  let dataJson = localStorage.getItem(nameItem);

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        let dataparsed = JSON.parse(dataJson) || initialValue;
        setDataItem(dataparsed)
        setLoading(false);
        setSincronize(true)
      }catch (error){
        setLoading(false)
        setError(true);
      }
    },2000);
  },[sincronize]);
  
  const saveLocal = (data) => {
    setDataItem(data)
    localStorage.setItem(nameItem, JSON.stringify(data));
  };

  const setSincronized = () => {
    setLoading(true);
    setSincronize(false);
  };

  return {dataItem, saveLocal, loading, error, sincronize, setSincronized};
}

export {useLocalStorage2};