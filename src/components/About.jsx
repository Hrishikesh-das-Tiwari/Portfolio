import React from 'react';
import Hello from '../images/hello.jpg';
import Tree from '..//images/tree.jpg';
import classes from './Css Modules/About.module.css';

export default React.memo(function Section2() {
  return (
    <div id={`${classes.about}`} className="about">
      <img className={classes.tree} src={Tree} alt="" />
      <div className={classes['about-txt']}>ABOUT</div>
      <div className={classes['grid-container']}>
        <img
          className={`${classes['grid-item']} ${classes.g1}}`}
          src={Hello}
          alt="hello"
        />
        <div className={` ${classes['grid-item']} ${classes.g2}`}>
          I'm Hrishikesh Tiwari, a third-year Btech candidate at Thakur College
          of Engineering. I have a great deal of experience with, knowledge of,
          and enthusiasm for data structures and algorithms. I enjoy taking part
          in the coding competition. I am an adept developer in MERN.I always
          want to advance.
        </div>
      </div>
    </div>
  );
});
