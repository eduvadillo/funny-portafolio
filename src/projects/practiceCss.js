import "./projects-css/projects.css";
import { useState } from "react";
import macbookCss from "./images/macbookCss.png";
import macbookCss2 from "./images/macbookCss2.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

function PracticeCss() {
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
              href='http://eduvadillosite.herokuapp.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <img src={macbookCss} className='photo' alt='betandfriends-home'></img>
            </a>
          ) : photoRequiere ? (
            <img src={macbookCss2} className='photo' alt='betandfriends-league'></img>
          ) : (
            <></>
          )}
          {/*     <img src={betandfriends2} className='photo2' alt='betandfriends-league'></img> */}
          {/*  <AiOutlineRight className='svg-responsive' size={25} onClick={handlePhotoProjectRight} /> */}
        </div>
        <div className='description-container'>
          <h1>
            <a
              href='http://eduvadillosite.herokuapp.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              My Socials
            </a>
          </h1>
          <h3>Project description:</h3>
          <p>
            My Socials is a project that aims to practice CSS and show my different social networks.
            There are 3 web models visible to the user, all of them show my social networks with a
            different design. In each reload it shows a different interface thanks to the Back. I
            discarded the random mode to see all the options more easily. Creation of a quite
            original loader.
          </p>
          <h3> Technical description:</h3>
          <p>
            {" "}
            Web application made with a MERN stack. Back developed with Node Js, Express and Mongo
            DB. Front with React.
          </p>
        </div>
      </>
    </div>
  );
}

export default PracticeCss;
