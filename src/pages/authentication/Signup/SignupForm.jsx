import React from 'react'
import { useState } from 'react'
import "./SignupForm.css"
import { Validation } from './Validation'



//function for the signup Form
const SignupForm = () => {
 
  //set the state for the input entry so it will be updating when inputing values
  const [values, setValues] = useState({
   
    //set values to Empty
    fullname: "",
    number: "",
    email: "",
    passwword: "",
    confirmpassword: ""
  });

  //Manage errors using state

  const [errors, setErrors] = useState({});

  //function to handle event changing 
  const handleChange = (event) => {
    setValues({...values,
      [event.target.name]: event.target.value,
    });
  }

 //Prevent page for Reloading after inputing values
 const handleSignupSubmit = (event) => {
  event.preventDefault();

  //handle Error validation
  setErrors(Validation(values));
 };
  
  return (
    // <div className='container'>
        <form>
          <div className='login-header'>
            <img src="/Images/Back Arrow.png" alt="back arrow" />
            <h2>Sign Up</h2>
          </div>
          <div className='fullname'>
            <label className='label'>Full Name</label>
            <input className='input' 
            type="tex" 
            name = "fullname" 
            placeholder='Full Name' 
            value={values.fullname} 
            onChange = {handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
           
          <div>
            <label className='label'>Phone No</label>
            <input className='input' 
            type="number" 
            name = "number" 
            placeholder='Phone Number' 
            value={values.number} 
            onChange = {handleChange}
            />
            {errors.number && <p className="error">{errors.number}</p>}
          </div>
          
          <div className='email'>
            <label className='label'>Email Address</label>
            <input className='input' 
            type="tex" 
            name = "email" 
            placeholder='Email' 
            value={values.email} 
            onChange = {handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className='password'>
            <label className='label'>Password</label>
            <input className='input' 
            type="password" 
            name = "password" 
            placeholder='Password' 
            value={values.password} 
            onChange = {handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className='confirm-password'>
          <label className='label'>Confirm Password</label>
            <input className='input' 
            type="password" 
            name = "confirmpassword" 
            placeholder='Confirm Password' 
            value={values.confirmpassword} 
            onChange = {handleChange}
            />
            {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
          </div>
          <div  className='btn'>
            <button className='signupBtn' onClick={handleSignupSubmit}>Sign Up</button>
          </div>
        </form>
    // </div>
  )
}

export default SignupForm