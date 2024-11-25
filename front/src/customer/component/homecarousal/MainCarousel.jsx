import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { MainCarouselData } from './MainCarouselData'
import 'react-alice-carousel/lib/alice-carousel.css';

function MainCarousel() {
    const items =MainCarouselData.map((item) => (
        <img src={item.image}  role="presentation" className="cursor-pointer" />
    ))
  return (
    <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default MainCarousel
