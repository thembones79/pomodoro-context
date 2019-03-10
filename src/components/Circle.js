import React from "react";
import PomodoroContext from "./PomodoroContext";

const Circle = () => {
  function normalizedTimeLeft(timeLeft, totalTime) {
    return (101 * timeLeft) / totalTime;
  }
  return (
    <PomodoroContext.Consumer>
      {({secondsLeft, intervalTime}) => (
        <svg className="myCircle" viewBox="0 0 32 32">
          <circle
            r="16"
            cx="16"
            cy="16"
            style={{
              strokeDasharray: `${normalizedTimeLeft(
                secondsLeft,
                intervalTime
              )} 100`,
              transition: "1s"
            }}
          />
        </svg>
      )}
    </PomodoroContext.Consumer>
  );
};

export default Circle;
