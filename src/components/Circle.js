import React from "react";

const Circle = ({ secondsLeft, intervalTime }) => {
  function normalizedTimeLeft(timeLeft, totalTime) {
    return (101 * timeLeft) / totalTime;
  }
  return (
    <svg className="myCircle" viewBox="0 0 32 32">
      <circle
        r="16"
        cx="16"
        cy="16"
        style={{
          strokeDasharray: `${normalizedTimeLeft(secondsLeft, intervalTime)} 100`,
          transition: "1s"
        }}
      />
    </svg>
  );
};

export default Circle;
