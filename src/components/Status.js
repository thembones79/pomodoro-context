import React from "react";
import Timer from "./Timer";
import SessionIcon from "./SessionIcon";
import BreakIcon from "./BreakIcon";
import PomodoroContext from "./PomodoroContext";

const Status = () => (
  <PomodoroContext.Consumer>
    {({isSession}) => (
      <div id="status">
        <div id="timer-label">{isSession ? "session" : "break"}</div>
        <Timer/>
        <div id="status-icon">
          {isSession ? <SessionIcon /> : <BreakIcon />}
        </div>
      </div>
    )}
  </PomodoroContext.Consumer>
);

export default Status;
