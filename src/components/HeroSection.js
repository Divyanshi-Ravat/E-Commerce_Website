import { Button,styled,Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'


// gap is used to give gap between two grids
const Grid = styled(Box)`
display:grid;
gap:0rem;
grid-template-columns: repeat(2,1fr);
background: #f1e3dd;
border-radius:10%;

@media(max-width:500px){
    display:grid;
    grid-template-rows: 1fr;
}

`
const Wrapper = styled(Box)`


max-width: 80rem;
margin: 0 auto;
margin-top: 120px;
font-family : cursive;
padding: 1rem 0;

@media(max-width:500px){
   
    max-width: 10rem;
    margin: 0 0;
    padding: 0rem 0;
    

}
`

function HeroSection(props) {
    console.log(props);
    const name = props;
    console.log(name)
  
   

  return (
      <Wrapper >
    
    
    <Grid >
        <div  style={{padding:100, position:'relative', float:'right', textAlign:'left', fontSize:15, lineHeight:1}} className='hero-section-data'>
            <p className='intro-data'>Welcome to</p>
        <h1 >{props.name}</h1>
            <p >Lorem21hbjhbjkjnkbvhugsjolknbscgc shbcbs suhinks jshbdiushb jhbsdbishudn hbdiwgihwo uwhnidk
            </p>
            <NavLink>
                <Button>
                    Show now
                </Button>
            </NavLink>

        </div>
        <div className='hero-section-image'>
            {/*its position is independent of msin flow and if remove donot affect main flow position  */}
            <figure>
                <img  src='./images/homeImage.jpg'></img>

            </figure>
        </div>
    </Grid>
   </Wrapper>

    
  )
}

export default HeroSection