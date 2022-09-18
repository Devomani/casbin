import React from 'react'
import './style.css'


export const AuthLayout = (props) => {
  return (
    <div className='container'>
      <header>
        <div className="header-wrapper">  
          
          <div className="header-title" style={{display: 'flex', width: '100%', justifyContent: 'center'}}> <h1  style={{color: 'white', fontWeight: 500, textAlign: 'center'}}>{props.headerTitle}</h1></div>
        </div>
      </header>
      <main>
        {props.main}
      </main>
     
       
    </div>
  )
}
