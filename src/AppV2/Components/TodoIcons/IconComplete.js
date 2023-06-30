import React from "react";
import { TodoIcon } from "./";

function IconComplete({action, status}){
  return (<TodoIcon
  type="complete"
  color={status ? "white" : "#a6a2a2"}
  actionScript={action}
  />);
 }

export {IconComplete};
