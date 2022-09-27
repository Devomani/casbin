import React from 'react'
import { AuthLayout } from '../../layout/authLayout'
import SignupForm from './SignupForm'

export const SignUp = () => {
  return (
    <AuthLayout headerTitle= 'Sign Up' main= {<SignupForm/>}>
        
    </AuthLayout>
  )
}
