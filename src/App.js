import React from 'react'
import './App.css'
import 'antd/dist/antd.min.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home} from './pages/home/index'
import { Login } from './pages/authentication/login'
import { SignUp } from './pages/authentication/signup'
import { Earn } from './pages/earn'
import { More } from './pages/more'
import { Trash } from './pages/trash'
import { Notification } from './pages/notification'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Login />}></Route>
        <Route path='/dashboard' element= {<Home />}></Route>
        <Route path='/register' element= {<SignUp />}></Route>
        <Route path='/earn' element= {<Earn />}></Route>
        <Route path='/more' element= {<More />}></Route>
        <Route path='/trash' element= {<Trash />}></Route> 
        <Route path='/notification' element= {<Notification />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
