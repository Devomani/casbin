import React from 'react'
import { Layout } from '../../layout/layout'
import { NotificationComponent } from './notification'

export const Notification = () => {
  return (
    <Layout headerTitle='Notication' main={<NotificationComponent/>}></Layout>
  )
}
