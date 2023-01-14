import { memo, useEffect, useState } from 'react';
import Mountain from '../images/mountain.png';
import Cloud1 from '../images/cloud_top.png';
import Cloud2 from '../images/cloud_bottom.png';
import Sun2 from './Sun2';
import classes from './Css Modules/Head.module.css';

function Head() {
  const [showSun, setShowSun] = useState(true);

  useEffect(() => {
    const time = new Date().getHours();

    function checkDay() {
      if (time >= 6 && time < 18) {
        return true;
      }
      return false;
    }

    function toggleDays() {
      if (checkDay() && !showSun) {
        setShowSun(true);
      } else if (!checkDay() && showSun) {
        setShowSun(false);
      }
    }

    toggleDays();

    const interval = setInterval(() => {
      if (!showSun) {
        if (checkDay()) {
          setShowSun(true);
        }
      } else {
        if (!checkDay) {
          setShowSun(false);
        }
      }
    }, 1800000);

    return () => clearInterval(interval);
  }, [showSun]);

  const mode = showSun ? 'day' : 'night';

  return (
    <div id={classes.head} className={classes[`${mode}`]}>
      <div className={classes.heading}>
        <h1>
          I'm <br />
          Hrishikesh Tiwari
        </h1>
        <h2 className={classes.h2Des}>
          A <span className={`${classes.pro} ${classes.switch}`}>Pro</span>
          <span className={classes.grammer}>grammer</span>
        </h2>
      </div>
      <Sun2 showSun={showSun} />

      <div className={classes.nature}>
        <img className={classes.mountain} src={Mountain} alt="" />
        <img
          className={`${classes.cloud} ${classes['cloud-1']}`}
          src={Cloud1}
          alt="cloud"
        />
        <img
          className={`${classes.cloud} ${classes['cloud-2']}`}
          src={Cloud2}
          alt="cloud"
        />
      </div>
    </div>
  );
}

export default memo(Head);
