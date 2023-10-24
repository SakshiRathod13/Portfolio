/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              My name is <b>ASHFIYA KHAN</b> and I am currently pursuing B.Tech in {' '}
              <b>Computer Science Engineering with specialization in Health Informatics</b> from
              <b>
                {' '}
                <a className={classes.link} target='_blank' href='https://vitbhopal.ac.in/'>
                  VIT Bhopal University
                </a>
              </b>
              . I belongs to Ratlam district of Madhya Pradesh.I am much interested in
              developing new things which excite me a lot.My goal is to become a skilled full stack developer :)
            </p>
            <p className={classes.br}>
              I love exploring new technologies and being a practitioner, I like to stay on top of
              latest trends. I try to leave every line of code I write more readable, accessible,
              and modular.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
