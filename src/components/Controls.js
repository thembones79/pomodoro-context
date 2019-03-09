import React from "react";

const Controls = ({ countdown, isCountingDown, reset }) => (
  <div id="controls">
    <div id="start_stop" onClick={countdown}>
      {isCountingDown ? (
        <i className="fas fa-pause" />
      ) : (
        <i className="fas fa-play" />
      )}
    </div>
    <div id="reset" onClick={reset}>
      <i className="fas fa-redo-alt" />
    </div>
  </div>
);

export default Controls;
