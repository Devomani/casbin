import React from 'react'
import { CheckUser } from '../authentication/modal'

export const NotificationComponent = () => {
const notification = ""

  return (
    <div>
      
    {notification === "" ? <CheckUser message="You have no notification" link="/dashboard" /> : []} 
    </div>
  )
}
