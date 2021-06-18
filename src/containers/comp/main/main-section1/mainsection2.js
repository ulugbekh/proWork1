import ArrayCard from "../../../../components/array-card-google";  //carouselga uchun card
import { ArrayGoogle } from "../../../../components/array-1/google";  // carousel uchun malumotlar arraysi
import ScroolDown from "../../../../components/text";  // scrool-down component

import Google from '../../../../images/icon/google.svg';  // google rasmi 
import Star from '../../../../images/icon/star.svg';  //yulduz rasmi


import React, { Component } from "react";   //carousel kutbxonasi
import Slider from "react-slick";           // carousel slide ucun malumotlar kutbxonasi

import "slick-carousel/slick/slick.css";            //carousel css 
import "slick-carousel/slick/slick-theme.css";          //carousel css 

const MainSection2 = () => {

    const settings = {        //carousel
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,  // 1024px da 3ta slide
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,  // 600px da 2ta slide
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,   // 400px da 1ta slide
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="main-section2 container">
            <h2 className="main-section2-text">
                Reviews
            </h2>
            <div className="main-section2-block">
                <div className="main-section2-blocks"></div>
                <img src={Google} alt="" className="google" />
                <div className="main-section2-blocks"></div>
            </div>
            <h3 className="main-section2-miniText">
                Exellent
            </h3>
            <div className="star-block">
                <img src={Star} alt="" className="star-item" /> 
                <img src={Star} alt="" className="star-item" /> 
                <img src={Star} alt="" className="star-item" /> 
                <img src={Star} alt="" className="star-item" /> 
                <img src={Star} alt="" className="star-item" /> 
            </div>
            <div className="carousel">
                <Slider {...settings} > 
                    {                                           //carousel
                        ArrayGoogle.map((item, index) => (      // carousel uchun malumotlar arrayGoogle dan map qilinnvotti
                            <ArrayCard                          // carousel card
                                data={item.date}
                                img={item.img}
                                key={index}
                                text={item.text}
                                id={item.id}
                            />
                        ))
                    }
                </Slider>

            </div>
            <div className="main-section3-scrool-down">
            <div className="about-section1-block">
            <ScroolDown                                 // scrool-down componenti
                        scroolText={'Scrool Down'}              // props
                    />
            </div>
                    
                    </div>
        </div>
    );
}

export default MainSection2;