import React from 'react'
import { Layout } from '../../layout/layout'
import { TrashComponent } from './trash'

export const Trash = () => {
  return (
    <Layout headerTitle='Trash' main={<TrashComponent/>}></Layout>
  )
}
