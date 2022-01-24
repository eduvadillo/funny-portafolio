import { useState, useEffect, useRef } from "react";
import Board from "./board.js";

function LoadingGame() {
  const [loadingGame, setLoadingGame] = useState(true);

  const [counter, setCounter] = useState(5);
  const [backgroundCountdown, setBackgroundCountdown] = useState("parLoading");

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }

    if (counter % 2 === 0) {
      setBackgroundCountdown(`parLoading`);
    } else {
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
            <h1>{counter}</h1>
          </div>
        </div>
      </>
    );
  } else {
    return <Board />;
  }
}

export default LoadingGame;
