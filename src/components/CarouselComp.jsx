import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const CarouselComp = ({images}) => {
  //Because of removing thumbnail image from array
  let filteredImages = images ? images.filter((image)=>{
      return image.id!==0
  }) : [];
  return (
    <div className="carousel-wrapper">
    <Carousel  infiniteLoop useKeyboardArrows autoPlay>
        {(filteredImages.map((itemImage,i) => {
          return  <div key={i}>
          <img src= {itemImage} alt='product' />
      </div> 
        }))}
    </Carousel>
</div>
  )
}

export default CarouselComp