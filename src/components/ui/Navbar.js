import {  Link } from 'react-router-dom';
import { BurgerButton } from './BurgerButton';
import { Input } from './Input';
import { navItems } from "../../data/NavItems";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTenge} from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <>
       <nav className="navbar">
        <Link to="/" className="navbar-logo">
          VETEZDA
          <FontAwesomeIcon icon={faTenge} />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
          <div className="input_burger"> 
              <Input />
          </div>
          <div className="burgerBotton">
              <BurgerButton />  
          </div>
      </nav>
    </> 
  )
}
