//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App(props) {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsStartScore, lionsScore] = useState(0);
  const [tigersStartScore, tigersScore] = useState(0);

  const [timerStart, timerIncrement] = useState(1500);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsStartScore}</div>
          </div>
          <div className="timer">{timerStart}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersStartScore}</div>
          </div>
        </div>
        <BottomRow />
        <button onClick={() => timerIncrement(timerStart -1)} className="timerbutton">Time</button>
      </section>
      <section className="buttons">
        
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => lionsScore(lionsStartScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => lionsScore(lionsStartScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => tigersScore(tigersStartScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => tigersScore(tigersStartScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
