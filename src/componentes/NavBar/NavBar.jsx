import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
    <Link to="/">
      <img  className='logoEmatix' src={"../public/img/ematixlogo.jpg"} alt="Logo Ematix" />
    </Link>

    <ul className="nav justify-content-center">  
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">          
          <NavLink to="/categoria/compus">Computadores</NavLink>    
        </li> 
       <li className="nav-item">
         <NavLink to="/categoria/peri">Perifericos</NavLink>      
        </li>
        <li className="nav-item">
           <NavLink to="/categoria/paypi">Partes y Piezas</NavLink> 
        </li>   
       </ul> 

      <CartWidget/>

  </header>
)
  
}

export default NavBar