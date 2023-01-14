import { useRef, useEffect, useState } from 'react';
import sunImage from '../images/NewSun.png';
import moonImage from '../images/moon.png';

export default function Sun() {
  const ref = useRef(null);

  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth - window.innerWidth / 10
  );

  const _totHoursOfSun = 12;
  const totMin = _totHoursOfSun * 60;
  const _startTimeHourOfSun = 6;
  const _startTimeMin = 15;
  const startTimeOfSun = _startTimeHourOfSun * 60 + _startTimeMin;

  const currTime = () => new Date().getHours() * 60 + new Date().getMinutes();

  const compareTimeUp = function () {
    const time = currTime();
    console.log(time);
    console.log(startTimeOfSun);
    if (time >= startTimeOfSun + totMin) {
      return true;
    } else if (time < startTimeOfSun) {
      return true;
    }
    return false;
  };

  const [isTimeUp, setTimeUp] = useState(compareTimeUp());

  const updateXPerMin = (5 * windowWidth) / totMin;
  const timerFrequency = 1; //in min
  const currTimeDiff =
    new Date().getHours() * 60 + new Date().getMinutes() - startTimeOfSun;
  const coord = {
    x: 0,
    y: 0,
  };

  async function updateCoordinates() {
    console.log(isTimeUp);
    const sun = document.querySelector('.sun');
    const timer = setInterval(() => {
      checkTimeUp();
      if (!isTimeUp) {
        coord.x = coord.x + updateXPerMin;
        coord.y =
          coord.y +
          updateXPerMin -
          (timerFrequency / totMin) * (coord.x - updateXPerMin);
        sun.style.transform = `translate(${coord.x}px,${-coord.y}px)`;
        console.log('timer1');
      }
      console.log('timer2');
    }, timerFrequency * 60 * 1000);
    return () => clearInterval(timer);
  }

  function checkTimeUp() {
    console.log('set time up');
    if (compareTimeUp()) {
      setTimeUp(true);
      console.log('time out');
    } else if (isTimeUp) {
      console.log('time in');
      setTimeUp(false);
    }
  }

  // useEffect(() => {
  //   console.log("USE EFFECT :)");
  //   coord.x = (currTimeDiff * windowWidth) / totMin;
  //   coord.y = coord.x * (1 - coord.x / windowWidth);
  //   const lg = ref.current.getBoundingClientRect().top;
  //   console.log(lg);
  //   ref.current.style.left = `${coord.x}px`;
  //   ref.current.style.top = `${lg - coord.y}px`;
  //   updateCoordinates();
  //   function updateWidth() {
  //     setWindowWidth(window.innerWidth - windowWidth / 10);
  //   }
  //   window.addEventListener("resize", updateWidth);
  //   return () => window.removeEventListener("resize", updateWidth);
  // }, [windowWidth, isTimeUp]);
  return (
    <>
      <img
        ref={ref}
        className="sun"
        style={{ display: isTimeUp ? 'none' : 'block' }}
        src={moonImage}
        alt=""
      />
      <img
        ref={ref}
        className="sun"
        style={{ display: isTimeUp ? 'none' : 'block' }}
        src={moonImage}
        alt=""
      />
    </>
  );
}
