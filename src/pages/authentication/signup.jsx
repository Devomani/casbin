import React, { useEffect } from 'react'
import { SIGN_UP } from '../../App'
import { AuthLayout } from '../../layout/authLayout'
import SignupForm from './Signup/SignupForm'

export const SignUp = () => {
  useEffect(() => {
    if (localStorage.getItem("UserDetails")) {
      window.location.href = SIGN_UP
    }
  }, [])
  return (
    <AuthLayout headerTitle= 'Sign Up' main ={<SignupForm/>}></AuthLayout>
  )
}
