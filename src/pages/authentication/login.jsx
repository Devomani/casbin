import React from 'react'
import { AuthLayout } from '../../layout/authLayout'
import LoginForm from './LoginForm'

export const Login = () => {
  return (
    <AuthLayout headerTitle= 'Login' main={<LoginForm/>}>
    </AuthLayout>
  )

}


