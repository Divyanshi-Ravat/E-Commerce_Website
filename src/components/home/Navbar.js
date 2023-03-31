import React from 'react'
import { navData } from '../constants/NavConstant'
import {Box, styled, Typography} from '@mui/material'
import Banner from './Banner'

const Components = styled(Box)`
display:flex;
margin: 40px 140px 0 140px;
justify-content: space-between;
`
const Text = styled(Typography)`
font-size:14px;
font-weight:1000px;
`
function Navbar() {
  return (
    <div >

      <Components >
      
          {
  
            navData.map((data,i)=>{
             return<span key={i} style={{textAlign:'center',fontFamily:'cursive'}}>
             <img src={data.url} style={{width:80}} alt="img"/>
             <Typography style={{fontSize:14, fontWeight:20, wordSpacing:0,paddingRight:10,fontFamily:'cursive'}}>{data.text}</Typography>
             </span>
  
            })
          
          }
          
          
      </Components>
    
    </div>
  )
}

export default Navbar