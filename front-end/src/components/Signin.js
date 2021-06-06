import React from 'react';
import { NavLink } from 'react-router-dom';
import signinPic from '../images/signin.svg';
import SigninForm from './forms/SigninForm';

const Signin = () => {

   
   return (
      <>
         <section className="signin-sec">
            <div className="container">
               <div className="form-container signin-container signin">

                  <div className="form-content-left">
                     <img className="signin-img" src={signinPic} alt="Sign In Picture" />
                     <p>Don't have an account?
                        <span>
                           <NavLink to="/signup" className="signin-img-link">Create New One</NavLink>
                        </span>
                     </p>
                  </div>
                  
                  <div className="form-content-right">
                     <SigninForm />
                  </div>

               </div>
            </div>
         </section>
      </>
   )
}

export default Signin;
