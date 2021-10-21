import React from 'react'
import SliderOne, {SliderTwo, SliderThree } from './components/sliderData'
import {AiOutlineArrowRight as RightArrow, AiOutlineArrowLeft as LeftArrow} from "react-icons/ai";
import Slider from "react-slick"
import Portals from './components/portal'



function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <RightArrow onClick={onClick} className="desno"/>
    );
  }
  
  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
    <LeftArrow onClick={onClick} className="lijevo"/>
    );
  }

export default function Carousel() {
  
    
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "slides",
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>,
        autoplay:true,
        autoplaySpeed:5000     
    }
  
    
    return (
    <div className="port"> 
      
    <Slider {...settings}>
    
    <SliderOne/>
    <SliderTwo/>
    <SliderThree/>

      </Slider>
        <Portals/>
    </div>
    )
}

