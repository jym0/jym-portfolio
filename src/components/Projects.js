import React, {useState} from 'react'
import "../scss/Projects.scss";
import latestProject from '../assets/latest_project.png';
import htmlTech from "../assets/html5-01-svgrepo-com.svg";
import cssTech from "../assets/css3-01-svgrepo-com.svg";
import jsTech from "../assets/js01-svgrepo-com.svg";
import phpTech from "../assets/php01-svgrepo-com.svg";
import dbTech from "../assets/mysql-svgrepo-com.svg";
import { LaunchOutlined } from '@mui/icons-material';
import p1 from "../assets/projects/p1.png";
import p2 from "../assets/projects/p2.png";
import p3 from "../assets/projects/p3.png";
import p4 from "../assets/projects/p4.png";
import p5 from "../assets/projects/p5.png";
import p6 from "../assets/projects/p6.png";
import p7 from "../assets/projects/p7.png";
import p8 from "../assets/projects/p8.png";
import pw1 from "../assets/projects/p-w1.png";
import pw2 from "../assets/projects/p-w2.png";
import pw3 from "../assets/projects/p-w3.png";
import pw4 from "../assets/projects/p-w4.png";
import pw5 from "../assets/projects/p-w5.png";


const Projects = () => {
  const projectsData = [
    {
      id: 1,
      img: p1,
      category: "canva",
    },
    {
      id: 2,
      img: p2,
      category: "canva",
    },
    {
      id: 3,
      img: p3,
      category: "canva",
    },
    {
      id: 4,
      img: p4,
      category: "canva",
    },
    {
      id: 5,
      img: p5,
      category: "illustrator",
    },

    {
      id: 6,
      img: p6,
      category: "illustrator",
    },
    {
      id: 7,
      img: p7,
      category: "canva",
    },
    {
      id: 8,
      img: p8,
      category: "canva",
    },
    {
      id: 9,
      img: pw1,
      category: "website",
    },
    {
      id: 10,
      img: pw2,
      category: "website",
    },
    {
      id: 11,
      img: pw3,
      category: "website",
    },
    {
      id: 12,
      img: pw4,
      category: "website",
    },
    {
      id: 13,
      img: pw5,
      category: "website",
    },
  ];

  const categories = ['canva', 'illustrator', 'website'];


    const [selectedCategory, setSelectedCategory] = useState('canva');

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    return (
      <section className="projects">
        <span></span>
        <p className="intro_proj">let's dive into my creations</p>
        <div className="latest_projects_container">
          <div className="latest_project">
            <h2 className="titleFor_project">latest/</h2>
            <figure>
              <img src={latestProject} alt="air-vis website" />
              <figcaption>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec adipiscing tristique risus nec feugiat. Dis parturient
                montes nascetur ridiculus. Consectetur adipiscing elit ut
                aliquam purus sit amet luctus venenatis. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Donec adipiscing
                tristique risus nec feugiat. Dis parturient montes nascetur
                ridiculus. Consectetur adipiscing elit ut aliquam purus sit amet
                luctus venenatis.
                <li>
                  {" "}
                  Dis parturient montes nascetur ridiculus. Consectetur
                  adipiscing elit ut aliquam purus sit amet luctus venenatis.
                </li>
                <li>
                  {" "}
                  Dis parturient montes nascetur ridiculus. Consectetur
                  adipiscing elit ut aliquam purus sit amet luctus venenatis.
                </li>
                <li>
                  {" "}
                  Dis parturient montes nascetur ridiculus. Consectetur
                  adipiscing elit ut aliquam purus sit amet luctus venenatis.
                </li>
                <div className="tech_container">
                  <p>technologies used:</p>
                  <img src={htmlTech} alt="html icon" />
                  <img src={cssTech} alt="css icon" />
                  <img src={jsTech} alt="js icon" />
                  <img src={phpTech} alt="php icon" />
                  <img src={dbTech} alt="icon" />
                </div>
                <div className="airvis_title">
                  <h3>air-vis</h3>
                  <LaunchOutlined className="launch_icon" />
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="random_title_projects">
            The only thing more tangled than my headphones is my CSS in this
            project.
          </div>
        </div>
        <div className="projects_container">
          <h2>projects</h2>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(category)}
                className={selectedCategory === category ? "active" : ""}
              >
                {category}
              </li>
            ))}
          </ul>
          <div className="projects_gallery">
            <div className="projects_pic">
              {projectsData
                .filter((item) => item.category === selectedCategory)
                .map((item, index) => (
                  <img key={index} src={item.img} alt={`Project ${item.id}`} />
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }


export default Projects