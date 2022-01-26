import { useState, useEffect } from "react";
import Board from "./board.js";

function LoadingGame(props) {
  const [loadingGame, setLoadingGame] = useState(true);

  const [counter, setCounter] = useState(10);
  const [backgroundCountdown, setBackgroundCountdown] = useState("parLoading");

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }

    if (counter % 2 === 0 && counter > 5) {
      setBackgroundCountdown(`parInstructions`);
    } else if (counter % 2 !== 0 && counter > 5) {
      setBackgroundCountdown(`imparInstructions`);
    } else if (counter % 2 === 0 && counter < 5) {
      setBackgroundCountdown(`parLoading`);
    } else if (counter % 2 !== 0 && counter <= 5) {
      setBackgroundCountdown(`imparLoading`);
    }

    if (counter === 0) {
      setLoadingGame(false);
    }
  }, [counter]);

  if (loadingGame) {
    return (
      <>
        <div className='loadingGameContainer'>
          <div className='leftLoadingGame'></div>
          <div className={backgroundCountdown}>
            {counter > 5 ? (
              <h2 className='instructions'>
                Test your skill by clicking inside the ball to get the highest score
              </h2>
            ) : (
              <h1>{counter}</h1>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return <Board viewProjects={props} />;
  }
}

export default LoadingGame;
