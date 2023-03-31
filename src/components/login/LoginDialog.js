import React,{useState} from 'react'
import {Dialog, DialogContent, DialogContentText, Button, TextField, Typography,styled} from '@mui/material'
import { Box, maxWidth, padding } from '@mui/system'

 import DataProvider, { DataContext } from '../contexts/DataProvider'
 import { useContext } from 'react'
 import { UserContext } from '../../App'
 import {TransferDataToBackened} from '../service/api'
const Container = styled(Box)`
height:70vh;
width:100vh;

`
const BoxLeft = styled(Box)`
height:100%;
width:45%;
background: #2874f0 url(https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) 100%; 
`
const BoxRight = styled(Box)`
display: flex;
flex-direction: column;
padding: 34px 45px;
flex:1;

`
const values = {
    name:"",
    email:"",
    number:"",
    password:"",
    repassword:""

}
function LoginDialog({open, setopen}) {

  
    
    const [signuser, setsignuser] = useState({
        name:"",
        email:"",
        number:"",
        password:"",
        repassword:""
    })
    const InitialState={
        login:{
            view: 'login',
            heading: 'Enjoy your journey'
        },
        signin:{
            view: 'signin',
            heading: 'Welcome to our website'
        }

    }


 
   
    const [toogle, settoogle] = useState(InitialState.login)
    const [account,setaccount] = useContext(DataContext)
    const handleOpen =()=>{
        setopen(true)
    }
    const handleclose =()=>{
        setopen(false)
    }
    const Signin =()=>{
        settoogle(InitialState.signin)
    }
    const Login =()=>{
        settoogle(InitialState.login)
    }

    const DataTObackened=async()=>{
        // const{name,email,number,password,repassword} = signuser;
        //  console.log(toogle)
        
        //  let response = await AuthenticationSignup(toogle)
        //  if(!response) return;
        //  handleclose();
        //  setaccount(toogle.name)
     
       let response = await TransferDataToBackened(signuser)
       
       
        
       
    }
   
   
    
   let name, value;
    const SaveDetails=(e)=>{
        //  settoogle({
        //      ...toogle,
        //     [e.target.name]:e.target.value
        //  })
        console.log(e)
        name= e.target.name;
        value = e.target.value;
        setsignuser({
            ...signuser,
            [name]:value
            //name is dynamic therefore square brackets
        } )
        
    }

  return (
    <div>
        <DataProvider>

        <Dialog open={open} onClose={handleclose} PaperProps={{sx:{maxWidth:"unset"}}} >
            
        
           
        {toogle.view==='login'?
           <Container style={{display:'flex'}} >
            <BoxLeft>
              

                  
            <Typography variant='h4' color={"white"} sx={{textTransform:"none",background:"rgba(52,52,52,0.3)",padding:5}}  >LOGIN </Typography>
  
              
            <Typography color={"white"} sx={{textTransform:"none",background:"rgba(52,52,52,0.3)"}} >{toogle.heading}</Typography>
            </BoxLeft>
           <BoxRight >
            <TextField
            sx={{margin:2}}
            label="Enter name"
            variant='standard'
            ></TextField>
             <TextField
             sx={{margin:2}}
            label="Enter password"
            variant='standard'
            ></TextField>
            <Button sx={{margin:2}} variant='contained' >Login</Button>
            <Typography sx={{margin:2}} >Or</Typography>
            <Button sx={{margin:2}} variant='contained' onClick={Signin}>Create an account</Button>
            
           </BoxRight>
           </Container>
           :
           <Container style={{display:'flex'}}>
           <BoxLeft>
           <Typography variant='h4' color={"white"} sx={{textTransform:"none",background:"rgba(52,52,52,0.3)",padding:5}}  >SIGNIN </Typography>
           <Typography >{InitialState.heading}</Typography>
           </BoxLeft>
           <BoxRight >
            <TextField
            sx={{margin:2}}
            label="Enter name"
            variant='standard'
           
            name="name"
            value={signuser.name}
            onChange={SaveDetails}
            ></TextField>

             <TextField
             sx={{margin:2}}
            label="Enter email"
            variant='standard'
            
            name="email"
            value={signuser.email}
            onChange={SaveDetails}
           
            ></TextField>

            <TextField
            sx={{margin:2}}
            label="Enter mobile number"
            variant='standard'
            
            name="number"
            value={signuser.number}
            onChange={SaveDetails}
            ></TextField>

            <TextField
             sx={{margin:2}}
            label="Enter password"
            variant='standard'
           
            name="password"
            value={signuser.password}
            onChange={SaveDetails}
            ></TextField>
             <TextField
             sx={{margin:2}}
            label="Renter password"
            variant='standard'
           
            name="repassword"
            value={signuser.repassword}
            onChange={SaveDetails}
            ></TextField>
            <Button sx={{margin:2}} variant='contained' onClick={DataTObackened} >Sign in</Button>
           
           
           </BoxRight>
           
            
          </Container>
        }
            

        </Dialog>
        </DataProvider>
       
    </div>
  )
}

export default LoginDialog