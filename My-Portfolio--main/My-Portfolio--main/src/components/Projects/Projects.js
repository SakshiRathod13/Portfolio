/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import classes from './Projects.module.css';
import calculator from '../images/calculator.jpg';
import chess from '../images/chess.jpg';
import colorpicker from '../images/colorpicker.jpg';
import ml from '../images/ml.jpg';
import jansewa from '../images/jansewa.jpg';
import age from '../images/age.jpg';
import ths from '../images/ths.jpg';
import covid from '../images/covid.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// Web projects
const cardItem = [
  {
    link: 'https://math-operations-calculator-83ib.vercel.app/',
    title: 'Calculator using React',
    techStack: 'Tech Stack: React js',
    desc: 'It is a calculator which is made by using react js.It can various mathematical operations.',
    image: calculator
  },


  {
    link: 'https://color-picker-using-react-ea9h93xye-ashfiya786.vercel.app/',
    title: 'Color Picker',
    techStack: 'Tech Stack- React',
    desc: 'you can pick any color whatever you want with the help of this color picker',
    image: colorpicker
  },
  {
    link: 'https://age-calculator-using-react-ovej-hrk4s3u61-ashfiya786.vercel.app/',
    title: 'Age-Calculator',
    techStack: 'Tech Stack: React js',
    desc: 'It will calculate your age according to the date of birth entered by you.',
    image: age
  },
 


];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
        {/* <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItemApps.map((item) => {
            return getProjectCard(item);
          })}
        </ul> */}
      </ScrollAnimation>
    </div>
  );
}