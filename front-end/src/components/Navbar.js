import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-primary">
            <NavLink className="navbar-brand" to="/">AVALEN</NavLink>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <NavLink to="/signin" className="nav-link"> 
                        <button type="button" className="btn">Sign In</button>
                     </NavLink>
                  </li>

                  <li className="nav-item">
                     <NavLink to="/signup" className="nav-link"> 
                        <button type="button" className="btn btn-primary">Create Account</button>
                     </NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </>
   )
}

export default Navbar;
