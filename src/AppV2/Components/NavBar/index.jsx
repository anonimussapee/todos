import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
return (
  <nav>
    <ul>
      <NavLink to='/' className={({isActive})=>isActive? "underline": null} >
        <li>TODO Version 1</li>
      </NavLink>
      <NavLink to='/v2' className={({isActive})=>isActive? "underline": null} >
        <li>TODO Version 2 NEW</li>
      </NavLink>
    </ul>
   
  </nav>
);

}

export {NavBar};