import React from "react";

const Timer = ({ timeLeft }) => {
  function addZero(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  let minutes = addZero(Math.floor(timeLeft / 60));
  let seconds = addZero(timeLeft % 60);

  return <div id="time-left">{minutes + ":" + seconds}</div>;
};

export default Timer;
