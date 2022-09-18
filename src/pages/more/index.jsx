import React from 'react'
import { Layout } from '../../layout/layout'
import { MoreComponent } from './more'


export const More = () => {
  return (
    <Layout headerTitle='More' main={<MoreComponent/>} ></Layout>
  )
}
