import React from "react";
import Status from "./Status";
import Circle from "./Circle";
import Controls from "./Controls";

const ClockFace = ({
  beep,
  countdown,
  isSession,
  timeLeft,
  totalTime,
  isCountingDown,
  reset
}) => {
  return (
    <div id="outer-face">
      <div id="clock-face">
        <Status />
        <Circle />
      </div>
      <Controls        
        countdown={countdown}
        isCountingDown={isCountingDown}
        reset={reset}
      />
    </div>
  );
};

export default ClockFace;
