/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { FaArrowCircleDown } from 'react-icons/fa';
import fp from '../images/fp.jpg';


class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id='start'>
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={6000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img className={classes.image} src={fp} alt='myImage' />
            <div className={classes.h1}>
              <h1>HELLO EVERYONE</h1>
              <b></b>
              <h1>I'm Ashfiya Khan</h1>
              <a
                href='https://drive.google.com/file/d/1NqWZ-XRCDEpFBBCUYr5MxTTWlhZlntDn/view'
                rel='opener noreferrer'
                target='_blank'
              >
                View My Resume<FaArrowCircleDown />
              </a>
            </div>
          </div>
          
  
        </Carousel>
      </div>
    );
  }
}
export default CarouselImages;
