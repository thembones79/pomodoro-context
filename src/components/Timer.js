import React from "react";
import PomodoroContext from "./PomodoroContext";

const Timer = () => {
  function addZero(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }
  }

  function minutes(number) {
    return addZero(Math.floor(number / 60));
  }
  function seconds(number) {
    return addZero(number % 60);
  }

  return (
    <PomodoroContext.Consumer>
      {({secondsLeft}) => (
        <div id="time-left">
          {minutes(secondsLeft) + ":" + seconds(secondsLeft)}
        </div>
      )}
    </PomodoroContext.Consumer>
  );
};

export default Timer;
