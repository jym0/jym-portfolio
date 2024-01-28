import React, {useState, useEffect} from 'react'
import '../scss/Navbar.scss';
import Logo from "../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


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