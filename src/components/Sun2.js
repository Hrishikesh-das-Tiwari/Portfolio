import { Fragment, memo } from 'react';
import sunImage from '../images/NewSun.png';
import moonImage from '../images/moon.png';
import classes from './Css Modules/Sun.module.css';

function Sun2(props) {
  const { showSun } = props;

  return (
    <Fragment>
      {showSun && <img className={classes.sun} src={sunImage} alt="" />}
      {!showSun && <img className={classes.moon} src={moonImage} alt="" />}
    </Fragment>
  );
}

export default memo(Sun2);
