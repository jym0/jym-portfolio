import React, {useState, useEffect} from 'react'
import '../scss/Navbar.scss';
import Logo from "../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";



const Navbar = () => {

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
          <a
            href="https://www.facebook.com/jymwelfabellore?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a href="https://github.com/jym0" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jym-weil-fabellore-3b016b229/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <nav>
        <div>
          <button onClick={() => scrollToSection("about")}>
            Explore my journey
          </button>
          <button onClick={() => scrollToSection("myProjects")}>
            My creations
          </button>
          <button onClick={() => scrollToSection("contact")}>
            Let's connect
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar