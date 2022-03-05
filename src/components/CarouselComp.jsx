import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';

const ImageWrapper = styled.div`
    max-width:600px ;
    max-height: 600px ;
`
const Image= styled.img`
  width:10% ;
  height: 10% ;
  object-fit:cover ;
`
const CarouselComp = ({images}) => {
  //Because of removing thumbnail image from array
  let filteredImages = images ? images.filter((image)=>{
      return image.id!==0
  }) : [];
  return (
    <div className="carousel-wrapper">
    <Carousel  infiniteLoop useKeyboardArrows autoPlay>
        {(filteredImages.map((image) => {
          return  <div>
          <img src= {image.imageLink} />
      </div> 
        }))}
    </Carousel>
</div>
  )
}

export default CarouselComp