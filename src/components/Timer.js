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
      {pomodoro => (
        <div id="time-left">
          {minutes(pomodoro.secondsLeft) + ":" + seconds(pomodoro.secondsLeft)}
        </div>
      )}
    </PomodoroContext.Consumer>
  );
};

export default Timer;
