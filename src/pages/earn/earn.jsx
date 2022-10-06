import React from 'react'
import one from '../../images/one.svg'
import './earn.css'

export const EarnComponent = () => {
  return (
    <div className='container'>
      <div className="claim">
        <img src={one} alt="" />
        <div className="text">
          <p>You just trashed 25kg of plastic waste, which is worth BC12,500. Keep trashing <p style={{textAlign: 'right'}}>Claim</p></p>
        </div>
      </div>
      
    </div>
  )
}
