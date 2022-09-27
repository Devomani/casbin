import React from 'react';


export const Validation = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "email is required";
    } 
    else if (!/\S+@\.\S+/.test(values.email)){
        errors.email = "email is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8){
    errors.password = "Password must be at least 8 characters";
    };

    return errors;
    <></>
    

   }