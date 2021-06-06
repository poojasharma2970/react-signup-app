import React from 'react';
import { NavLink } from 'react-router-dom';
import signupPic from '../images/signup.svg';
import SignupForm from './forms/SignupForm';

const Signup = () => {   

   return (
      <>
         <section className="signup-sec">
            <div className="container">
               <div className="form-container signup-container signup">
                  
                  <div className="form-content-left">
                     <SignupForm />
                  </div>

                  <div className="form-content-right">
                     <img className="signup-img" src={signupPic} alt="Welcome" />
                     <p>Already have an account?
                        <span>
                           <NavLink to="/signin" className="signup-img-link">SignIn</NavLink>
                        </span>
                     </p>
                  </div>

               </div>
            </div>
         </section>
      </>
   )
}

export default Signup;
