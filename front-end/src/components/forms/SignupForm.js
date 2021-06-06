import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignupForm = () => {

   const history = useHistory();

   const [user, setUser] = useState({
      firstname: "",lastname: "", email: "", password: "", cPassword: "", mobile: ""
   });

   let name, value;

   const handleInputs = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.vale;

      setUser({ ...user, [name]:value });
   }

   const PostData = async (e) => {
      e.preventDefault();

      const { firstname, lastname, email, password, cPassword, mobile } = user;

      const res = await fetch("/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify ({
            firstname, lastname, email, password, cPassword, mobile
         })
      });

      const data = await res.json();

      if(res.status === (422) || !data) {
         window.alert("Please check your details");
         console.log("Please check your details");
      } else {
         window.alert("Registered Successfully");
         console.log("Registered Successfully");

         history.push("/sigin");
      }
   }

   return (
      <>
      <form method="POST" className="register-form" id="register-form">
         <h1>Create Account</h1>         
         <div className="form-group">
            <label htmlFor="firstname" />
            <input type="text" name="firstname" id="firstname" placeholder="First Name" autoComplete="off"
               value={ user.firstname }
               onChange={handleInputs }
            />   
         </div>
         
         <div className="form-group">
            <label htmlFor="lastname" />
            <input type="text" name="lastname" id="lastname" placeholder="Last Name" autoComplete="off"
               value={ user.lastname }
               onChange={handleInputs }
            />   
         </div>

         <div className="form-group">
            <label htmlFor="email" />
            <input type="email" name="email" id="email" placeholder="Email" autoComplete="off"
               value={ user.email }
               onChange={handleInputs }
            />   
         </div>

         <div className="form-group">
            <label htmlFor="password" />
            <input type="password" name="password" id="password" placeholder="Password" autoComplete="off"
               value={ user.password }
               onChange={handleInputs }
            />   
         </div>

         <div className="form-group">
            <label htmlFor="cPassword" />
            <input type="password" name="cPassword" id="cPassword" placeholder="Confirm Password" autoComplete="off"
               value={ user.cPassword }
               onChange={handleInputs }
            />   
         </div>

         <div className="form-group">
            <label htmlFor="mobile" />
            <input type="tel" name="mobile" id="mobile" placeholder="Mobile No." autoComplete="off"
               value={ user.mobile }
               onChange={handleInputs }
            />   
         </div>

         <button className="form-input-btn" type='submit' onClick={ PostData } >Sign Up</button>
      </form>
      </>
   )
}

export default SignupForm;
