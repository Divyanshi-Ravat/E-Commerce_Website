import React from 'react'
import {Box, styled} from '@mui/material'

const Wrapper = styled(Box)`
max-width: 80rem;
margin: 0 auto;
margin-top: 120px;
font-family : cursive;
padding: 1rem 0;
background: #f1e3dd;
`
function Trusted() {
  return (
    <Wrapper>
        <Box >
            <div>
                <p>Trusted by 1000+ companies</p>
                <img src='./images/Untitled.jpg'/>
            </div>
        </Box>
    </Wrapper>
  )
}

export default Trusted