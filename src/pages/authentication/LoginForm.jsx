import React, { useState } from "react";
import "./LoginForm.css"
import { Validation } from "./Validation";



//funtion for login form
const LoginForm = ()=> {

    //set the satet for value inpute
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    
    //set state to manage errors
    const [errors, setErrors] = useState({});

    // fuction to handle change in event
    const handleChange = (event) => {
        setValues ({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    // set prevent default to prevent page for reloading
    const handleLoginSubmit = (event) =>{
        event.preventDefault();

        // manage errors
        setErrors(Validation(values));
    };
    return (
        //the app body
    // <div className = "container">
        // <div className="app-container"></div>
        // <div className ="app-body">    
            // <div className="main">
                <form className="form-header">
                    <h3 className="title">Login</h3>
                    <div className="signSection">
                        <div className="google-login">
                            <img src="/Images/google.svg" alt="" />
                            <span className="span1">Sign with Google</span></div>
                        <div className="facebook-login">
                            <img className="fb-icon" src="/Images/Facebook.svg" alt="black" color="black"/>
                        </div>
                        <div className="apple-login">
                            <img className="apple-icon" src="/Images/apple.svg" alt="" width="50px" />
                        </div>
                    </div>
                    <div className="email">
                        <label className="label">Phone Number or Email Address</label><br></br>
                        <input 
                           className="input" 
                           type="email" 
                           name="email"
                           placeholder="Phone Number or email address"
                           required
                           value={values.email}
                           onChange={handleChange} 
                          />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="pwd">
                        <label className="label">Enter your Password</label><br></br>
                        <input 
                            className="input" 
                            type="password" 
                            name="password"
                            placeholder="Password"
                            required
                            value={values.password}
                            onChange={handleChange}
                             />
                            {errors.password && <p className="error">{errors.password}</p>}
                            <p className="forget-para">Forget Password</p>
                    </div>
                    <div>
                        <button className="loginBtn" onClick={handleLoginSubmit}>Login</button>
                    </div>
                    <p className="no-account-para">No account ? <a href="/"><span>Sign up</span></a> </p>
                 </form>
            // </div>
        // </div>
    // </div>
    );    
}
    
        


        export default LoginForm