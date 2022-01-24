import "./projects-css/projects.css";
import { useState } from "react";
import macbook from "./images/macbookBet.png";
import macbook2 from "./images/macbookBet2.png";
import { GrProjects } from "react-icons/gr";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function BetAndFriends() {
  const [photoHome, setPhotoHome] = useState(true);
  const [photoLeague, setPhotoLeague] = useState(false);
  const [projectHome, setProjectHome] = useState(true);
  const [descriptionButton, setDescriptionButton] = useState(true);

  const handlePhotoProjectLeft = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoLeague(true);
    }

    if (photoLeague === true) {
      setPhotoHome(true);
      setPhotoLeague(false);
    }
  };

  const handlePhotoProjectRight = (e) => {
    console.log(`desde el left`);
    if (photoHome === true) {
      setPhotoHome(false);
      setPhotoLeague(true);
    }

    if (photoLeague === true) {
      setPhotoHome(true);
      setPhotoLeague(false);
    }
  };

  const handleDescriptionButton = (e) => {
    if (projectHome === true) {
      setProjectHome(false);
    } else {
      setProjectHome(true);
    }
  };

  return (
    <div className='page-content-bet'>
      <>
        <div className='photos-container'>
          {/*  <AiOutlineLeft className='svg-responsive' size={25} onClick={handlePhotoProjectLeft} /> */}
          {photoHome ? (
            <a href='http://betandfriends.com/' target='_blank' rel='noopener noreferrer'>
              <img src={macbook} className='photo' alt='betandfriends-home'></img>{" "}
            </a>
          ) : photoLeague ? (
            <img src={macbook2} className='photo' alt='betandfriends-league'></img>
          ) : (
            <></>
          )}
          {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
          {/*  <AiOutlineRight className='svg-responsive' size={25} onClick={handlePhotoProjectRight} /> */}
        </div>
        <div className='description-container'>
          <h1>
            <a href='http://betandfriends.com/' target='_blank' rel='noopener noreferrer'>
              BetAndFriends
            </a>
          </h1>
          <h3>Project description:</h3>
          <p>
            BetAndFriends is the first sports betting fantasy. Where you can create private leagues
            to play with your friends or public leagues with hundreds of people from all over the
            world. Deposit money to join the leagues, each user of the league receives the same
            coins, bet and according to your classification receives the corresponding prize!
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

export default BetAndFriends;
