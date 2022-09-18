import React from 'react'
import './style.css'
import {HomeOutlined, MoneyCollectOutlined, BellOutlined, MenuOutlined, DeleteOutlined} from '@ant-design/icons'
import { Image } from 'antd'
import {Link} from 'react-router-dom'


export const Layout = (props) => {
  return (
    <div className='container'>
      <header>
        <div className="header-wrapper">  
          <div className="image">
            <Image style={{width: 40, height: 40, borderRadius: '50%'}} src='data:image/jpeg;base64,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' alt ='logo'/> 
          </div>
          <div className="header-title"> <h1  style={{color: 'white', fontWeight: 500}}>{props.headerTitle}</h1></div>
          <div className="header-icon"> <Link to='/notification' style={{color: 'white'}}> <BellOutlined style={{fontSize: 30}} /></Link></div>
        </div>
      </header>
      <main>
        {props.main}
      </main>
      <footer>
        <ul>
        <Link to="/dashboard" style={{color: 'white'}}><li><HomeOutlined /> Home </li></Link>
        <Link to="/trash" style={{color: 'white'}}><li><DeleteOutlined /> Trash</li></Link>
        <Link to='/earn' style={{color: 'white'}}> <li><MoneyCollectOutlined /> Earn</li></Link>
        <Link to='/more' style={{color: 'white'}}><li><MenuOutlined /> More</li> </Link>
        </ul>
      </footer>
       
    </div>
  )
}
