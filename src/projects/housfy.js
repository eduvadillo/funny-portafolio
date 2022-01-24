import "./projects-css/projects.css";
import { useState } from "react";
import macbookHousfy from "./images/macbookHousfy.png";
import macbookHousfy2 from "./images/macbookHousfy2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function Housfy() {
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
              href='http://housfy-mars-challenge.herokuapp.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img src={macbookHousfy} className='photo' alt='betandfriends-home'></img>
            </a>
          ) : photoRequiere ? (
            <img src={macbookHousfy2} className='photo' alt='betandfriends-league'></img>
          ) : (
            <></>
          )}
          {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
          {/*  <AiOutlineRight className='svg-responsive' size={25} onClick={handlePhotoProjectRight} /> */}
        </div>
        <div className='description-container'>
          <h1>
            <a
              href='http://housfy-mars-challenge.herokuapp.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Housfy Challenge
            </a>
          </h1>
          <h3>Project description:</h3>
          <p>
            Housfy Challenge has been the technical test to work for the StartUp Housfy. The project
            consists of making a Rover in a delimited space. He has to receive orders from the earth
            and carry them out. The Rover should only be able to move forward, turn right, and turn
            left. There must also be an obstacle that the rover must avoid.
          </p>
          <h3> Technical description:</h3>
          <p>The web is developed in React.</p>
        </div>
      </>
    </div>
  );
}

export default Housfy;
