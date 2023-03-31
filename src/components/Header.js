import React from 'react'
import {AppBar,Toolbar, Typography,styled,Box,Button} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from './login/LoginDialog';
import { useState, useContext } from 'react';
import DataProvider, { DataContext } from './contexts/DataProvider';
const NavBar = styled(AppBar)`
background-color : #6d1b7b;

`
const Component = styled(Box)`
display: flex;


`
const CustomerButton= styled(Box)`
display:flex;
flex-direction:row;
padding-left:23px;
justify-content: space-between;


`
const Cart = styled(Box)`
display:flex;
`
function Header() {
  const account = useContext(DataContext)
  const [open, setopen] = useState(false)
  const openDialog=()=>{
    setopen(true);
    
  }

  
   
  return (
    <div>

      <NavBar>
          <Toolbar>
             <Component>
              <img src='./images/images.jpg' alt='logo' style={{width:75}}/>
              <Box>
                  <Typography variant='h5' style={{marginTop:12, paddingLeft:12, fontFamily:'cursive'}}>HomeStyler.in</Typography>
              </Box>
             </Component>
             <CustomerButton style={{fontFamily:'cursive'}}>
              <Typography style={{paddingLeft:700, paddingTop:10,fontFamily:'cursive'}}>Home</Typography>
              <Typography style={{paddingLeft:25, paddingTop:10,fontFamily:'cursive'}}>About</Typography>
              <Typography style={{paddingLeft:25, paddingTop:10,fontFamily:'cursive'}}>Contact</Typography>
              <Typography style={{paddingLeft:25, paddingTop:10,fontFamily:'cursive'}}>Products</Typography>

              
              
              
               
              <Button variant='outlined' size='small' style={{paddingLeft:15, paddingTop:5, marginLeft:12, backgroundColor:"#af52bf", color:"#fff"}}
              
              onClick={()=>openDialog()}
              
              >Login</Button>
               

               
              
              

              <Cart style={{paddingLeft:25, paddingTop:10}}>
                  <ShoppingCartIcon/>
                  <Typography  >Cart</Typography>
              </Cart>
             </CustomerButton>
          </Toolbar>
      </NavBar>
              <DataProvider>
      <LoginDialog open={open} setopen={setopen}/>
     </DataProvider>
     
      
    </div>
   
  )
}

export default Header