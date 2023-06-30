import React from "react";
import { TodoIcon } from "./";

function IconDelete({action}){
  return (<TodoIcon
    type="delete"
    color="white"
    actionScript={action}
    />);
 }

export {IconDelete};
