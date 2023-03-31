import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import {bannerData} from '../constants/NavConstant'
import {styled} from '@mui/material'

const Image = styled('img')({
  width:'100%',
  height:'250px',
  float:'left'
  
})


const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
function Banner() {
  return (
    <Carousel responsive={responsive}
   
    swipeable={false}
  draggable={false}

  removeArrowOnDeviceType={["tablet", "mobile"]}
 
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
    >
    {
      bannerData.map((data,i)=>{
        return<span  key={i}>
        <Image src={data.url}  alt="img"/>
      
        </span>
       

      })
    }
    </Carousel>
  )
}

export default Banner




