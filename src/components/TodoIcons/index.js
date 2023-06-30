import { ReactComponent as CheckSvg} from "./check.svg";
import { ReactComponent as DeleteSvg} from "./delete.svg";
import "./TodoIcons.css";

const LibraryIcons ={
  'complete' :(color) =>  <CheckSvg fill={color}/>,
  'delete' :(color) => <DeleteSvg fill={color}/>,
}


function TodoIcon({ type, actionScript, color}){ 

 return (<span className={`todoIcons iconCircle ${type}  cursor`} onClick={actionScript}>
 {LibraryIcons[type](color)}
</span> );
 }

export {TodoIcon};
