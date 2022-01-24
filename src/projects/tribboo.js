import "./projects-css/projects.css";
import { useState } from "react";
import macbookTribboo from "./images/macbookTribboo.png";
import macbookTribboo2 from "./images/macbookTribboo2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function Tribboo() {
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
            <a href='https://tribboo.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
              <img src={macbookTribboo} className='photo' alt='betandfriends-home'></img>
            </a>
          ) : photoRequiere ? (
            <img src={macbookTribboo2} className='photo' alt='betandfriends-league'></img>
          ) : (
            <></>
          )}
          {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
          {/*  <AiOutlineRight className='svg-responsive' size={25} onClick={handlePhotoProjectRight} /> */}
        </div>
        <div className='description-container'>
          <h1>
            <a href='https://tribboo.herokuapp.com/' rel='noopener noreferrer' target='_blank'>
              Tribboo Challenge
            </a>
          </h1>
          <h3>Project description:</h3>
          <p>
            Tribbo Challenge has been the technical test to work for the StartUp Tribbo. Given an
            image in pdf, I had to make a web and with a Json file simulating a database, show and
            order the tasks.
          </p>
          <h3> Technical description:</h3>
          <p>Web developed in React.</p>
        </div>
      </>
    </div>
  );
}

export default Tribboo;
