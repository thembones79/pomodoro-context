import React from "react";
import Timer from "./Timer";
import SessionIcon from "./SessionIcon";
import BreakIcon from "./BreakIcon";
import PomodoroContext from "./PomodoroContext";

const Status = () => (
  <PomodoroContext.Consumer>
    {(pomodoro) => (
      <div id="status">
        <div id="timer-label">{pomodoro.isSession ? "session" : "break"}</div>
        <Timer/>
        <div id="status-icon">
          {pomodoro.isSession ? <SessionIcon /> : <BreakIcon />}
        </div>
      </div>
    )}
  </PomodoroContext.Consumer>
);

export default Status;
