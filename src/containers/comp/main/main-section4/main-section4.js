import './main.scss'
import Portfolio from '../../../../components/main-section4-port/portfolio';            //portfolio kotta block component
import ScroolText from '../../../../components/text'                                // scrool-down component    
import LeftText from '../../../../components/left-text';                           // chap bolag uchun text component

import React, { Component } from "react";               //react carousel
import Slider from "react-slick";                       // raect carousel

import "slick-carousel/slick/slick.css";                // react carousel-css
import "slick-carousel/slick/slick-theme.css";              // react carousel-css

const MainSection4 = () => {

    const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };
    return ( 
        <div className="main-section4-block container">
        <LeftText
            text={'Portfolio'}
        />

        <p className="mobi-text">
        Here you can see our works and maybe they will be inspiring for you
        </p>
            <Slider {...settings1}>
                <Portfolio/>
                <Portfolio/>
                <Portfolio/>
            </Slider>
            <div className="scrool-down-text">
            <ScroolText
                scroolText={'Scrool down'}
            />
            </div>
        </div>
     );
}
 
export default MainSection4;