import React from 'react';


export const Validation = (values) => {
    let errors = {};

    if (!values.fullname) {
        errors.fullname = "Full name is required";
    } 

    if (!values.number) {
        errors.number = "Phone Number is required"
    } else if (!values.number.length < 11){
    errors.number = "Enter correct phone number";
    };

    if (!values.email) {
        errors.email = "Email is required";
    } 
    else if (!/\S+@\.\S+/.test(values.email)){
        errors.email = "Email is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 8){
    errors.password = "Password must be at least 8 characters";
    };

    if (!values.confirmpassword) {
        errors.password = "Enter Confirm Password"
    } else if (!values.confirmpassword.password){
    errors.confirmpassword = "Password not Match";
    };

    return errors;
    <></>

   }