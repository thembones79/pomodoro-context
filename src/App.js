import React from "react";
import ClockFace from "./components/ClockFace";
import Settings from "./components/Settings";
import PomodoroContext from "./components/PomodoroContext";

const INITIAL_STATE = {
  pomodoro: {
    isSession: true,
    sessionLength: 25,
    breakLength: 5,
    secondsLeft: 1500,
    intervalTime: 1500,
    isCountingDown: false
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  beep = () => {
    this.beeper.play();
  };

  reset = () => {
    clearInterval(this.timer);
    this.setState(INITIAL_STATE);
    this.beeper.pause();
    this.beeper.currentTime = 0;
  };

  countdown = () => {
    if (!this.state.isCountingDown) {
      clearInterval(this.timer);
      this.setState({ isCountingDown: true });
      this.timer = setInterval(this.timerDecrement, 1000);
    } else {
      this.setState({ isCountingDown: false });
      clearInterval(this.timer);
    }
  };

  timerDecrement = () => {
    this.setState(
      state => ({ secondsLeft: state.secondsLeft - 1 }),
      this.sessionChange
    );
  };

  decreaseDisplayedTime = () => {
    this.setState({
      secondsLeft: this.state.secondsLeft - 60,
      intervalTime: this.state.intervalTime - 60
    });
  };

  increaseDisplayedTime = () => {
    this.setState({
      secondsLeft: this.state.secondsLeft + 60,
      intervalTime: this.state.intervalTime + 60
    });
  };

  sessionDecrement = () => {
    if (this.state.sessionLength > 1) {
      this.setState({ sessionLength: this.state.sessionLength - 1 });
      //the condition below prevents decreasing displayed time when in session mode and pressing "break decrement" button
      if (this.state.isSession) {
        this.decreaseDisplayedTime();
      }
    }
  };

  sessionIncrement = () => {
    if (this.state.sessionLength < 60) {
      this.setState({ sessionLength: this.state.sessionLength + 1 });
      if (this.state.isSession) {
        this.increaseDisplayedTime();
      }
    }
  };

  breakDecrement = () => {
    if (this.state.breakLength > 1) {
      this.setState({ breakLength: this.state.breakLength - 1 });
      if (!this.state.isSession) {
        this.decreaseDisplayedTime();
      }
    }
  };

  breakIncrement = () => {
    if (this.state.breakLength < 60) {
      this.setState({ breakLength: this.state.breakLength + 1 });
      if (!this.state.isSession) {
        this.increaseDisplayedTime();
      }
    }
  };

  sessionChange = () => {
    if (this.state.secondsLeft < 0) {
      this.beep();
      if (this.state.isSession) {
        this.setState(state => ({
          isSession: false,
          secondsLeft: state.breakLength * 60,
          intervalTime: state.breakLength * 60
        }));
      } else {
        this.setState(state => ({
          isSession: true,
          secondsLeft: state.sessionLength * 60,
          intervalTime: state.sessionLength * 60
        }));
      }
    }
  };

  render() {
    return (
      <PomodoroContext.Provider value={this.state.pomodoro}>
        <div
          id="pomodoro"
          className={this.state.isSession ? "tomato" : "green"}
        >
          <header>
            <h1>Pomodoro Clock</h1>
          </header>
          <ClockFace
            beep={this.beep}
            countdown={this.countdown}
            reset={this.reset}
            isSession={this.state.isSession}
            timeLeft={this.state.secondsLeft}
            totalTime={this.state.intervalTime}
            isCountingDown={this.state.isCountingDown}
          />
          <Settings
            breakLength={this.state.breakLength}
            sessionLength={this.state.sessionLength}
            handleSessionIncrementClick={this.sessionIncrement}
            handleSessionDecrementClick={this.sessionDecrement}
            handleBreakIncrementClick={this.breakIncrement}
            handleBreakDecrementClick={this.breakDecrement}
          />
          <audio
            id="beep"
            preload="auto"
            src="https://tomato-news.surge.sh/static/media/BeepSound.988833bf.wav"
            ref={audio => {
              this.beeper = audio;
            }}
          />
        </div>
      </PomodoroContext.Provider>
    );
  }
}

export default App;
