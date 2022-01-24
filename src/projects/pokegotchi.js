import "./projects-css/projects.css";
import { useState } from "react";
import macbookPoke from "./images/macbookPoke.png";
import macbookPoke2 from "./images/macbookPoke2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function Pokegotchi() {
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
              href='http://pokegotchi-challenge.herokuapp.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img src={macbookPoke} className='photo' alt='betandfriends-home'></img>
            </a>
          ) : photoRequiere ? (
            <img src={macbookPoke2} className='photo' alt='betandfriends-league'></img>
          ) : (
            <></>
          )}
          {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
          {/*  <AiOutlineRight className='svg-responsive' size={25} onClick={handlePhotoProjectRight} /> */}
        </div>
        <div className='description-container'>
          <h1>
            <a
              href='http://pokegotchi-challenge.herokuapp.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Pokegotchi Challenge
            </a>
          </h1>
          <h3>Project description:</h3>
          <p>
            Pokegotchi is the technical test to work in Innovating Technologies. A very open
            challenge where the basic requirement was to obtain the pokemons from an API.
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
export default Pokegotchi;
