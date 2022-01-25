import "./App.css";
import { useState, useEffect } from "react";
import classNames from "classnames";
import { GrProjects } from "react-icons/gr";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import BetAndFriends from "./projects/betAndFriends";
import GuessTheGame from "./projects/guessTheGame";
import PracticeCss from "./projects/practiceCss";
import Tribboo from "./projects/tribboo";
import Housfy from "./projects/housfy";
import GreenJade from "./projects/greenJade";
import Pokegotchi from "./projects/pokegotchi";
import LoadingGame from "./projects/game/loadingGame";

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [none, setNone] = useState(false);
  const [projects, setProjects] = useState(false);
  const [mouse, setMouse] = useState(false);
  const [betAndFriends, setBetAndFriends] = useState(true);
  const [guessTheGame, setGuessTheGame] = useState(false);
  const [tribboo, setTribboo] = useState(false);
  const [housfy, setHousfy] = useState(false);
  const [greenJade, setGreenJade] = useState(false);
  const [pokegotchi, setPokegotchi] = useState(false);
  const [practiceCss, setPracticeCss] = useState(false);
  /*   const [iconsTheme, setIconsTheme] = useState(true); */
  const [viewSection, setViewSection] = useState(`yes-section`);
  const [projectClassDiv, setProjectClassDiv] = useState("projects-div");
  const [telon, setTelon] = useState("hide-telon");


  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, [position]);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll(".mouseIsOver").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
    "cursor--none": none,
  });

  const pointers = classNames("page-container", {
    "page-project": mouse,
  });

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      /*  setIconsTheme(false); */
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      /*   setIconsTheme(true); */
    }
  }

  setTimeout(() => {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    /* console.log(`tpggle`, toggleSwitch); */
    toggleSwitch.addEventListener("change", switchTheme, false);

    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : null;

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);

      if (currentTheme === "dark") {
        toggleSwitch.checked = true;
      }
    }

    /*     const cursorExp = document.querySelector(".cursor");

    const target = document.querySelector(".page-social");
    target.addEventListener("mouseover", mOver, false);
    target.addEventListener("mouseout", mOut, false);
    function mOver() {
      cursorExp.setAttribute("style", "transform: scale(1.6);");
    }

    function mOut() {
      cursorExp.setAttribute("style", " transform: scale(1);");
    } */
  }, 100);

  /*  if (position.y > 200) {
    setNone(true);
  } */

  const handleProjects = () => {
    if (viewSection === `yes-section`) {
      setViewSection(`no-section`);

      setTimeout(() => {
        setProjects(true);
      }, 1000);
    }

    if (viewSection === `no-section`) {
      setProjectClassDiv(`section-hide`);
      setTimeout(() => {
        setViewSection(`view-section`);
        setProjects(false);
        setProjectClassDiv(`projects-div`);
      }, 1100);
    }

    if (viewSection === `view-section`) {
      setViewSection(`no-section`);
      setTimeout(() => {
        setProjects(true);
      }, 1000);
    }
  };

  const handleBeforeProjects = () => {
    setTelon(`show-telon`);

    setTimeout(() => {
      if (betAndFriends === true) {
        setTribboo(false);
        setHousfy(false);
        setPokegotchi(false);
        setGuessTheGame(false);
        setPracticeCss(false);
        setGreenJade(true);
        setBetAndFriends(false);
      }

      if (tribboo === true) {
        setTribboo(false);
        setHousfy(false);
        setPokegotchi(false);
        setGuessTheGame(false);
        setPracticeCss(false);
        setGreenJade(false);
        setBetAndFriends(true);
      }

      if (housfy === true) {
        setTribboo(true);
        setHousfy(false);
        setPokegotchi(false);
        setGuessTheGame(false);
        setPracticeCss(false);
        setGreenJade(false);
        setBetAndFriends(false);
      }

      if (pokegotchi === true) {
        setTribboo(false);
        setHousfy(true);
        setPokegotchi(false);
        setGuessTheGame(false);
        setPracticeCss(false);
        setGreenJade(false);
        setBetAndFriends(false);
      }
      if (guessTheGame === true) {
        setTribboo(false);
        setHousfy(false);
        setPokegotchi(true);
        setGuessTheGame(false);
        setPracticeCss(false);
        setGreenJade(false);
        setBetAndFriends(false);
      }

      if (practiceCss === true) {
        setTribboo(false);
        setHousfy(false);
        setPokegotchi(false);
        setGuessTheGame(true);
        setPracticeCss(false);
        setGreenJade(false);
        setBetAndFriends(false);
      }
      if (greenJade === true) {
        setTribboo(false);
        setHousfy(false);
        setPokegotchi(false);
        setGuessTheGame(false);
        setPracticeCss(true);
        setGreenJade(false);
        setBetAndFriends(false);
      }
    }, 1000);

    setTimeout(() => {
      setTelon(`hide-telon`);
    }, 2500);
  };

  const handleNextProjects = () => {
    setTelon(`show-telon`);

    setTimeout(() => {
      if (betAndFriends === true) {
        setTribboo(true);
        setHousfy(false);
        setPokegotchi(false);
        setGuessTheGame(false);
        setPracticeCss(false);
        setGreenJade(false);
        setBetAndFriends(false);
      }

      if (tribboo === true) {
        setTribboo(false);
        setHousfy(true);
        setPokegotchi(false);
        setGuessTheGame(false);
        setPracticeCss(false);
        setGreenJade(false);
        setBetAndFriends(false);
      }

      if (housfy === true) {
        setTribboo(false);
        setHousfy(false);
        setPokegotchi(true);
        setGuessTheGame(false);
        setPracticeCss(false);
        setGreenJade(false);
        setBetAndFriends(false);
      }

      if (pokegotchi === true) {
        setTribboo(false);
        setHousfy(false);
        setPokegotchi(false);
        setGuessTheGame(true);
        setPracticeCss(false);
        setGreenJade(false);
        setBetAndFriends(false);
      }
      if (guessTheGame === true) {
        setTribboo(false);
        setHousfy(false);
        setPokegotchi(false);
        setGuessTheGame(false);
        setPracticeCss(true);
        setGreenJade(false);
        setBetAndFriends(false);
      }

      if (practiceCss === true) {
        setTribboo(false);
        setHousfy(false);
        setPokegotchi(false);
        setGuessTheGame(false);
        setPracticeCss(false);
        setGreenJade(true);
        setBetAndFriends(false);
      }
      if (greenJade === true) {
        setTribboo(false);
        setHousfy(false);
        setPokegotchi(false);
        setGuessTheGame(false);
        setPracticeCss(false);
        setGreenJade(false);
        setBetAndFriends(true);
      }
    }, 1000);

    setTimeout(() => {
      setTelon(`hide-telon`);
    }, 2500);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  console.log(
    "%c Hire me " + "%c eduvadillo1@gmail.com ",
    "color:purple ; background:yellow ; font-weight: bolder",
    "color:yellow ; background: purple ; font-weight: bold"
  );

  if (loading === true) {
    return (
      <div className='div-loading'>
        <h1 data-text='Loading...'>Loading...</h1>
        <div className='theme-switch-wrapper mouseIsOver wrapper-loading'>
          <BsSun className='icon-theme' />
          <label className='theme-switch'>
            <input type='checkbox' id='checkbox' />
            <div className='slider round'></div>
          </label>
          <BsMoon className='icon-theme2' />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          className={cursorClasses}
        ></div>

        <LoadingGame />

        {/*       <div className='canvas-div'>
        <Board />
      </div> */}
        <div className={pointers} data-mode='dark'>
          <div className='page-content'>
            <header>
              {/*  <img src='images/' className='component-logo page-hover'></img> */}
              <div className='page-hover projectClass'>
                <a href='#projects'>
                  <GrProjects
                    size={30}
                    className='mouseIsOver projectIcon cursor-link'
                    onClick={handleProjects}
                  />
                </a>
              </div>
              <div className='theme-switch-wrapper mouseIsOver'>
                <BsSun className='icon-theme' />
                <label className='theme-switch'>
                  <input type='checkbox' id='checkbox' />
                  <div className='slider round'></div>
                </label>
                <BsMoon className='icon-theme2' />
              </div>
            </header>
            <section className={viewSection}>
              <h1>
                <div mode='out-in' className='content-line'>
                  <div className='content-word color-primary'>
                    <span className='color color-1'>H</span>
                    <span className='color color-2'>e</span>
                    <span className='color color-3'>l</span>
                    <span className='color color-4'>l</span>
                    <span className='color color-5'>o</span>
                    <span className='color color-1'>,</span>
                  </div>
                  <div className='content-word color-primary'>
                    <span className='color color-3'>I</span>
                    <span className='color color-4'>'</span>
                    <span className='color color-5'>m</span>
                  </div>
                  <div className='content-word color-primary'>
                    <span className='color color-2'>E</span>
                    <span className='color color-3'>d</span>
                    <span className='color color-4'>u</span>
                    <span className='color color-5'>!</span>
                  </div>
                </div>
                <div mode='out-in' className='content-line'>
                  <div className='content-word color-secundary'>
                    <span className='color color-1'>A</span>
                  </div>
                  <div className='content-word color-secundary'>
                    <span className='color color-2'>J</span>
                    <span className='color color-3'>u</span>
                    <span className='color color-4'>n</span>
                    <span className='color color-5'>i</span>
                    <span className='color color-1'>o</span>
                    <span className='color color-2'>r</span>
                  </div>
                  <div className='content-word color-secundary'>
                    <span className='color color-2'>f</span>
                    <span className='color color-3'>u</span>
                    <span className='color color-4'>l</span>
                    <span className='color color-5'>l</span>
                    <span className='color color-1'>-</span>
                    <span className='color color-2'>s</span>
                    <span className='color color-3'>t</span>
                    <span className='color color-4'>a</span>
                    <span className='color color-5'>c</span>
                    <span className='color color-1'>k</span>
                  </div>
                </div>
                <div mode='out-in' className='content-line'>
                  <div className='content-word color-secundary'>
                    <span className='color color-1'>d</span>
                    <span className='color color-2'>e</span>
                    <span className='color color-3'>v</span>
                    <span className='color color-4'>e</span>
                    <span className='color color-5'>l</span>
                    <span className='color color-1'>o</span>
                    <span className='color color-2'>p</span>
                    <span className='color color-3'>e</span>
                    <span className='color color-4'>r</span>
                  </div>
                  <div className='content-word color-secundary'>
                    <span className='color color-2'>c</span>
                    <span className='color color-3'>u</span>
                    <span className='color color-4'>r</span>
                    <span className='color color-5'>r</span>
                    <span className='color color-1'>e</span>
                    <span className='color color-2'>n</span>
                    <span className='color color-3'>t</span>
                    <span className='color color-4'>l</span>
                    <span className='color color-5'>y</span>
                  </div>
                  <div mode='out-in' className='content-line'>
                    <div className='content-word color-secundary'>
                      <span className='color color-5'>m</span>
                      <span className='color color-1'>a</span>
                      <span className='color color-2'>k</span>
                      <span className='color color-3'>i</span>
                      <span className='color color-4'>n</span>
                      <span className='color color-5'>g</span>
                    </div>
                    <div className='content-word color-secundary'>
                      <span className='color color-2'>&</span>
                    </div>
                    <div className='content-word color-secundary'>
                      <span className='color color-3'>m</span>
                      <span className='color color-4'>o</span>
                      <span className='color color-5'>s</span>
                      <span className='color color-1'>t</span>
                      <span className='color color-2'>l</span>
                      <span className='color color-3'>y</span>
                    </div>
                  </div>
                  <div className='content-word color-secundary'>
                    <span className='color color-3'>b</span>
                    <span className='color color-4'>r</span>
                    <span className='color color-5'>e</span>
                    <span className='color color-1'>a</span>
                    <span className='color color-2'>k</span>
                    <span className='color color-3'>i</span>
                    <span className='color color-4'>n</span>
                    <span className='color color-5'>g</span>
                  </div>
                  <div className='content-word color-secundary'>
                    <span className='color color-2'>t</span>
                    <span className='color color-3'>h</span>
                    <span className='color color-4'>i</span>
                    <span className='color color-5'>n</span>
                    <span className='color color-1'>g</span>
                    <span className='color color-2'>s</span>
                  </div>
                  <div className='content-word color-secundary'>
                    <span className='color color-2'>a</span>
                    <span className='color color-3'>t</span>
                  </div>
                  <div mode='out-in' className='content-line'>
                    <div className='content-word2 color mouseIsOver'>
                      {/*                       <a
                        href='http://betandfriends.com'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='page-hover'
                      > */}
                      OpenToWork
                      {/*  </a> */}
                      <span className='color color-5'>.</span>
                    </div>
                  </div>
                </div>
              </h1>
            </section>
            <footer className={viewSection}>
              <input type='hidden' id='emailInput' value='eduvadillo1@gmail.com'></input>
              <div className='page-social mouseIsOver' mode='out-in'>
                <a href='mailto: eduvadillo1@gmail.com' className='page-hover page-copy '>
                  {" "}
                  eduvadillo1@gmail.com
                </a>
              </div>
              {/*  <div className='page-cursor' style='top: 599px; left: 1046px'></div> */}
            </footer>
          </div>
          {projects ? (
            <div id='projects' className={projectClassDiv}>
              <div className='left'>
                {" "}
                <BsChevronDoubleLeft
                  size={30}
                  className='mouseIsOver'
                  onClick={handleBeforeProjects}
                />
              </div>
              <div className='central'>
                {" "}
                {betAndFriends ? (
                  <BetAndFriends />
                ) : tribboo ? (
                  <Tribboo />
                ) : greenJade ? (
                  <GreenJade />
                ) : housfy ? (
                  <Housfy />
                ) : pokegotchi ? (
                  <Pokegotchi />
                ) : guessTheGame ? (
                  <GuessTheGame />
                ) : practiceCss ? (
                  <PracticeCss />
                ) : (
                  <h1>julian</h1>
                )}{" "}
              </div>
              <div className='right'>
                {" "}
                <BsChevronDoubleLeft
                  className='left-icon mouseIsOVer'
                  size={30}
                  onClick={handleBeforeProjects}
                />
                <BsChevronDoubleRight
                  className='mouseIsOver'
                  size={30}
                  onClick={handleNextProjects}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className={telon}></div>
        </div>
      </>
    );
  }
}

export default App;
