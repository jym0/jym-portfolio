import React, { useState, useEffect } from "react";
import axios from "axios";
import "../scss/Home.scss";
import myPic from "../assets/homepic-removebg.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";

const Home = () => {
  // const [text] = useTypewriter({
  //   words: ['Web Developer', 'Graphic Designer', 'Web Designer'],
  //   loop: {},
  // })

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const rect = section.getBoundingClientRect();
      const offset = rect.top + window.scrollY;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };



   const wordsToRepeat = ["designer", <DonutSmallIcon className="donut"/>, "developer", <DonutSmallIcon className="donut2" />];
   const containerSize = 100; 

 
  const repeatedWords = Array.from({
    length: Math.ceil(containerSize / wordsToRepeat.length),
  })
    .map((_, index) =>
      wordsToRepeat.map((word, subIndex) => ({ word, subIndex }))
    )
    .flat();

  

  return (
    <section className="home">
      <svg
        className="background_text"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 237.000000 45.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        {" "}
        <g transform="translate(0.000000,45.000000) scale(0.100000,-0.100000)">
          {" "}
          <path d="M207 439 c-10 -6 -26 -8 -35 -4 -13 5 -13 2 3 -15 22 -24 38 -25 55 -5 7 9 19 14 27 11 7 -3 13 -1 13 3 0 8 -24 21 -38 21 -4 0 -15 -5 -25 -11z" />{" "}
          <path d="M694 439 c-3 -6 -17 -9 -30 -6 -30 5 -30 2 1 -19 22 -14 26 -14 46 -1 12 9 29 13 38 10 12 -3 11 -1 -3 11 -23 19 -42 20 -52 5z" />{" "}
          <path d="M1657 439 c-10 -6 -26 -8 -35 -4 -13 5 -13 2 3 -15 21 -24 38 -25 55 -6 6 8 19 12 28 9 15 -6 15 -5 3 10 -15 19 -28 21 -54 6z" />{" "}
          <path d="M0 386 c0 -2 7 -20 15 -39 19 -46 19 -103 0 -157 -42 -119 48 -151 221 -78 86 36 126 33 173 -11 33 -31 42 -21 15 17 -19 28 -65 52 -98 52 -13 0 -57 -13 -98 -29 -104 -42 -158 -48 -182 -22 -17 19 -17 23 -2 84 9 36 14 71 10 80 -4 13 1 14 33 10 27 -3 67 5 142 30 116 39 148 38 189 -8 25 -30 29 -17 7 25 -11 20 -27 32 -54 40 -35 9 -52 6 -142 -25 -136 -47 -178 -46 -186 4 -2 18 -43 44 -43 27z" />{" "}
          <path d="M674 380 c-77 -11 -155 -84 -180 -166 -17 -61 -9 -94 33 -121 37 -24 106 -22 142 5 l28 20 51 -25 c60 -29 106 -26 148 11 22 18 26 30 26 69 -3 125 -123 225 -248 207z m118 -56 c47 -30 88 -91 95 -141 7 -52 -22 -78 -83 -77 -35 1 -51 7 -75 30 -28 26 -31 27 -40 11 -16 -28 -68 -49 -104 -43 -48 9 -69 37 -62 85 9 68 66 129 146 157 43 15 74 10 123 -22z" />{" "}
          <path d="M960 384 c0 -5 9 -23 20 -41 25 -42 85 -61 141 -46 32 8 43 8 55 -4 14 -15 11 -27 -19 -68 -13 -17 -12 -23 10 -55 l24 -35 -37 -32 c-40 -36 -33 -41 21 -19 19 8 40 26 47 41 10 22 8 28 -10 48 -12 13 -22 27 -22 32 0 5 10 19 22 32 22 24 22 22 -10 84 -5 11 58 29 97 29 36 0 74 -19 98 -50 11 -13 12 -13 13 2 0 24 -54 74 -88 81 -33 7 -54 2 -157 -37 -86 -33 -135 -29 -177 16 -15 17 -28 26 -28 22z" />{" "}
          <path d="M1792 373 c-19 -9 -48 -37 -65 -63 -31 -45 -33 -47 -55 -32 -20 13 -22 13 -22 -6 0 -11 7 -23 16 -26 13 -5 10 -13 -15 -50 -33 -48 -86 -96 -105 -96 -7 0 -21 6 -31 14 -18 13 -18 17 -1 116 14 88 15 106 3 117 -10 10 -20 11 -40 4 -15 -6 -27 -15 -27 -21 0 -8 6 -8 20 0 17 9 20 8 20 -12 0 -13 -7 -58 -15 -100 -21 -113 4 -158 80 -144 43 8 78 36 117 94 17 26 32 48 34 50 1 2 13 -4 27 -13 22 -14 25 -14 31 0 3 9 -2 20 -14 27 -27 17 -26 24 16 74 28 36 42 44 68 44 17 0 37 -5 44 -12 9 -9 12 -9 12 0 0 16 -37 52 -52 52 -7 0 -28 -8 -46 -17z" />{" "}
          <path d="M1930 383 c1 -5 7 -19 15 -33 19 -33 19 -107 0 -161 -20 -56 -13 -84 27 -105 41 -21 92 -14 194 26 89 36 125 34 174 -6 41 -35 38 -10 -4 32 -43 43 -83 45 -174 5 -37 -16 -90 -32 -118 -36 -66 -8 -80 6 -69 73 5 26 9 63 9 83 1 36 1 36 39 31 26 -3 63 4 125 26 126 44 156 45 197 5 l28 -28 -8 25 c-11 38 -24 49 -65 60 -34 9 -52 6 -141 -25 -130 -45 -179 -46 -179 -4 0 10 -9 23 -19 29 -23 12 -31 13 -31 3z" />{" "}
          <path d="M1175 41 c-6 -5 -19 -11 -30 -13 -19 -4 -19 -4 3 -16 18 -11 26 -10 43 2 12 8 29 12 38 8 14 -5 14 -4 2 11 -15 19 -41 22 -56 8z" />{" "}
        </g>{" "}
      </svg>
      <div className="intro">
        <p className="intro_text">
          Make
          <br /> <span>designs and code</span> <br /> work well on different
          devices<br/> and screens by optimizing them<br/> for compatibility.
        </p>
        <a
          className="prev_projectsBtn"
          onClick={() => scrollToSection("myLatestProjects")}
        >
          <span>previous projects</span>
        </a>
      </div>
      <div className="myPic_container">
        <img src={myPic} alt="my picture" />
        <div></div>
      </div>

      <div className="home_bottom">
        <div className="container_repeats">
          {repeatedWords.map(({ word, subIndex }, index) => (
            <span
              key={index}
              className={`repeats ${subIndex === 1 ? "animated-repeats" : ""}`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>

    // <div className="randomQuote">
    //   <p>{quote.content}</p>
    //   <p>- {quote.author}</p>
    // </div>
  );
};

export default Home;
