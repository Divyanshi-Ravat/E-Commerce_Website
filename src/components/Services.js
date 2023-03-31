import React from 'react'
import {Box,styled} from '@mui/material';
import { display } from '@mui/system';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PaymentIcon from '@mui/icons-material/Payment';
import ShieldIcon from '@mui/icons-material/Shield';

const Wrapper = styled(Box)`
max-width: 60rem;
margin: 0 auto;
margin-top: 120px;
font-family : cursive;
padding-left:7rem;
padding-right:7rem;

color: black;

`

const Grid = styled(Box)`
display:grid;
coloum-gap:50px;

gap:1rem;
grid-template-columns: repeat(3,1fr);

`

const GridSecond = styled(Box)`
display:grid;
gap:1rem;
grid-template-rows: repeat(2,1fr);
`


function Services() {
  return (
    <Wrapper>

    <Grid >
   
    
        <div style={{padding:60, backgroundColor:'#f1e3dd', borderRadius:50}}>
        <LocalShippingIcon/>
           <p>Super fast and free delivery</p> </div>
        <GridSecond>

        <div style={{padding:60, backgroundColor:'#f1e3dd', borderRadius:50}}>
            <ShieldIcon/>
            <p> Non-Contact Shipping</p>
           </div>
        <div style={{padding:60, backgroundColor:'#f1e3dd', borderRadius:50}}>
            <CurrencyExchangeIcon/>
            <p> Money Back Gurantted</p>
           
            </div>
        </GridSecond>
        <div style={{padding:60, backgroundColor:'#f1e3dd', borderRadius:50}}>
        <PaymentIcon/>
            <p>
                Super Secure Payment System
            </p>
        </div>
    </Grid>
    </Wrapper>
  )
}

export default Services