import React, { useEffect, useState } from 'react';
import "../scss/Footer.scss";
import { CallMissedOutgoing, Favorite, LinearScale } from '@mui/icons-material';
import logo from "../assets/JYM_.png";
import logo2 from "../assets/JYM_remove.png";
import AOS from "aos";
import "aos/dist/aos.css";



const Footer = () => {
  AOS.init();

  const [randomQuote, setRandomQuote] = useState("");

  
  useEffect(() => {
    const fetchRandomQuote = async () => {
      try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        if (response.ok) {
          setRandomQuote({ content: data.content, author: data.author });
        } else {
          console.error("Failed to fetch quote:", data.message);
        }
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchRandomQuote();
  }, []);




 

  return (
    <section className="footer">
      <span
        className="footer_line"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="5000"
      ></span>

      <div className="footer_top">
        <div className="random_container">
          <p>{randomQuote.content}</p>
          <p>- {randomQuote.author}</p>
        </div>
        <p className="footer_links">
          Links
          <LinearScale className="line_links" />
          <a>
            about <CallMissedOutgoing />
          </a>
          <a>
            featured <CallMissedOutgoing />
          </a>
          <a>
            projects <CallMissedOutgoing />
          </a>
          <a>
            contacts <CallMissedOutgoing />
          </a>
        </p>
      </div>

      <div className="footer_bottom">
        <p>
          Made with love
          <Favorite />. Copyright 2024 jym.
        </p>
        <p>
          <a>Facebook</a>
          <a>Github</a>
          <a>LinkedIn</a>
        </p>

        <div className="footer_logo">
          {/* <img src={logo} alt="logo" /> */}
          <img src={logo2} alt="logo" />
          <img src={logo2} alt="logo" />
          <img src={logo2} alt="logo" />
        </div>
      </div>
      {/* <span className="footer_line2"></span> */}
    </section>
  );
}

export default Footer