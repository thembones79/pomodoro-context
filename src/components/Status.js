import React from "react";
import Timer from "./Timer";
import SessionIcon from "./SessionIcon";
import BreakIcon from "./BreakIcon";

const Status = ({ isSession, timeLeft }) => (
  <div id="status">
    <div id="timer-label">{isSession ? "session" : "break"}</div>
    <Timer timeLeft={timeLeft} />
    <div id="status-icon">{isSession ? <SessionIcon /> : <BreakIcon />}</div>
  </div>
);

export default Status;
