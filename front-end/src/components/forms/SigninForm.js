import React from 'react'

const SigninForm = () => {
   return (
      <>
      <form className="signin-form" id="signin-form">
         <h1>Sign In</h1>
         <div className="form-group">
            <label htmlFor="email" />
            <input type="email" name="email" id="email" placeholder="Email" autoComplete="off"/>   
         </div>

         <div className="form-group">
            <label htmlFor="password" />
            <input type="password" name="password" id="password" placeholder="Password" autoComplete="off"/>   
         </div>

         <button className='form-input-btn' type='submit'>Sign In</button> 
      </form>
      </>
   )
}

export default SigninForm;
