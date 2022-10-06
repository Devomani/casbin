import React from 'react'
import './App.css'
import 'antd/dist/antd.min.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from './pages/home/index'
import { Earn } from './pages/earn'
import { Trash } from './pages/trash'
import { Notification } from './pages/notification'
import { Login } from './pages/authentication/login'
import { SignUp } from './pages/authentication/signup'
import { LandingPage } from './pages/landingPage/landingPage'
import { CheckUser } from './pages/authentication/modal'

export const SIGN_UP = window.btoa("/checking")
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<LandingPage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/dashboard' element= {<Home />}></Route>
        <Route path='/earn' element= {<Earn />}></Route>
        <Route path='/trash' element= {<Trash />}></Route> 
        <Route path='/notification' element= {<Notification />}></Route>
        <Route path={SIGN_UP} element= {<CheckUser message="You already have an account, kindly login to continue" link="/login" />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
