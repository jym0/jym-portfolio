import React, {useState, useEffect} from 'react'
import '../scss/Navbar.scss';
import Logo from "../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const Navbar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const currentDateFormat = {
      month: "long",
      day: "numeric",
      year: 'numeric'
  };
  

  return (
    <header>
      <div className="headerTop">
        <p>{currentDate.toLocaleDateString("en-US", currentDateFormat)}</p>
        <img src={Logo} alt="Logo" />

        <div>
          <a>
            <FacebookIcon />
          </a>
          <a>
            <GitHubIcon />
          </a>
          <a>
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <nav>
        <div>
          <a href="#resume">Explore my journey</a>
          <a href="#projects">my creations</a>
          <a href="#contact">let's connect</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar