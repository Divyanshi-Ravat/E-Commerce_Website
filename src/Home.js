import React from 'react'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Navbar from './components/home/Navbar'
import Services from './components/Services'
import Trusted from './Trusted'
import {styled,Box} from '@mui/material'
import Banner from './components/home/Banner'
import { Fragment } from 'react'
import DataProvider from './components/contexts/DataProvider'
const Below = styled(Box)`

     
`

function Home() {
 
  return (
   <Fragment>
    <DataProvider>

    <Header/>
    <Box style={{marginTop:90}}>

   <Navbar/>
   <Box style={{paddingTop:50}}>

   <Banner/>
   </Box>
    </Box>
    </DataProvider>
  
   </Fragment>
  )
}



export default Home