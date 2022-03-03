import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComp = () => {
  return (
    <div className="carousel-wrapper">
    <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
            <img src="/images/banner1.jpg" />
        </div>
        <div>
        <img src="/images/banner2.jpg" />
        </div>
        <div>
        <img src="/images/banner3.jpg" />
        </div>
    </Carousel>
</div>
  )
}

export default CarouselComp