import React from 'react'
import { Layout } from '../../layout/layout'
import { HomeComponent } from './home'


export const Home = () => {
 
  
  return (
        <Layout headerTitle='Dashboard' main={<HomeComponent />
      }>
        </Layout>
        
    )
}
