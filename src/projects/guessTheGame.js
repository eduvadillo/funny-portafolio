import "./projects-css/projects.css";
import { useState } from "react";
import macbookGuess from "./images/macbookGuess.png";
import macbookGuess2 from "./images/macbookGuess2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function GuessTheGame() {
  const [photoHome, setPhotoHome] = useState(true);
  const [photoRequiere, setPhotoRequiere] = useState(false);

  const handlePhotoProjectLeft = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoRequiere(true);
    }

    if (photoRequiere === true) {
      setPhotoHome(true);
      setPhotoRequiere(false);
    }
  };

  const handlePhotoProjectRight = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoRequiere(true);
    }

    if (photoRequiere === true) {
      setPhotoHome(true);
      setPhotoRequiere(false);
    }
  };

  return (
    <div className='page-content-bet'>
      <>
        <div className='photos-container'>
          {/*  <AiOutlineLeft className='svg-responsive' size={25} onClick={handlePhotoProjectLeft} /> */}
          {photoHome ? (
            <a
              href='https://game-guess-the-number.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={macbookGuess} className='photo' alt='betandfriends-home'></img>
            </a>
          ) : photoRequiere ? (
            <img src={macbookGuess2} className='photo' alt='betandfriends-league'></img>
          ) : (
            <></>
          )}
          {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
          {/*  <AiOutlineRight className='svg-responsive' size={25} onClick={handlePhotoProjectRight} /> */}
        </div>
        <div className='description-container'>
          <h1>
            <a
              href='https://game-guess-the-number.herokuapp.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Guess The Number
            </a>
          </h1>
          <h3>Project description:</h3>
          <p>
            Guees The Number is a game where you have to guess a random number, you have 10 attempts
            to get it right, each attempt is one point less than you can get and with each hit your
            points go up. It has different levels of difficulty.
          </p>
          <h3> Technical description:</h3>
          <p>
            Web application made with a MERN stack. Back developed with Node Js, Express and Mongo
            DB. Front with React.
          </p>
        </div>
      </>
    </div>
  );
}

export default GuessTheGame;
