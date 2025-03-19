import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/Projects.scss";
import "animate.css";
import latestProject from "../assets/latest_project.png";
import htmlTech from "../assets/html5-01-svgrepo-com.svg";
import cssTech from "../assets/css3-01-svgrepo-com.svg";
import jsTech from "../assets/js01-svgrepo-com.svg";
import phpTech from "../assets/php01-svgrepo-com.svg";
import dbTech from "../assets/mysql-svgrepo-com.svg";
import { CloseOutlined, HighlightOff, LaunchOutlined, Visibility } from "@mui/icons-material";
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
import pw6 from "../assets/projects/p-w6.png";
import pw7 from "../assets/projects/p-w7.png";
import pw8 from "../assets/projects/p-w8.png";


const Projects = () => {

  AOS.init();


  const projectsData = [
    {
      id: 1,
      img: p1,
      category: "canva",
      desc: "Create engaging Facebook banners",
    },
    {
      id: 2,
      img: p7,
      category: "canva",
      desc: "Create captivating Facebook advertising.",
    },
    {
      id: 3,
      img: p3,
      category: "canva",
      desc: "a combination of brand identity and product images.",
    },
    {
      id: 4,
      img: p4,
      category: "canva",
      desc: "a combination of brand identity and product images.",
    },
    {
      id: 5,
      img: p8,
      category: "canva",
      desc: "Create captivating Facebook advertising.",
    },
    {
      id: 6,
      img: p2,
      category: "canva",
      desc: "Create engaging Facebook banners",
    },
    {
      id: 1,
      img: p5,
      category: "illustrator",
      desc: "Elevate your brand's appearance on Facebook with customized banners",
    },

    {
      id: 2,
      img: p6,
      category: "illustrator",
      desc: "Utilizing creative graphic design to immediately capture viewers' attention.",
    },
    {
      id: 1,
      img: pw1,
      category: "website",
      websiteUrl: "https://jym0.github.io/byteblast/",
      desc: "Technology Stack: HTML and Bootstrap",
    },
    {
      id: 2,
      img: pw2,
      category: "website",
      websiteUrl: "https://jym0.github.io/webcycle/",
      desc: "Technology Stack: HTML, CSS, and JavaScript",
    },
    {
      id: 3,
      img: pw3,
      category: "website",
      websiteUrl: "https://jym0.github.io/pipapa.io/",
      desc: "Technology Stack: HTML, CSS, and React JS",
    },
    {
      id: 4,
      img: pw4,
      category: "website",
      websiteUrl: "https://jym0.github.io/gandara-/#",
      desc: "Technology Stack: HTML, SCSS, and JavaScript",
    },
    {
      id: 5,
      img: pw5,
      category: "website",
      websiteUrl: "https://voyageventures.000webhostapp.com/home.php",
      desc: "Technology Stack: HTML, Bootstrap, PHP, and MySQL",
    },
    {
      id: 6,
      img: pw6,
      category: "website",
      websiteUrl: "https://jym0.github.io/Fabellore-Jym-Weil-F.---Portfolio/",
      desc: "Technology Stack: HTML, CSS, and JavaScript",
    },
    {
      id: 7,
      img: pw7,
      category: "website",
      websiteUrl: "https://jym0.github.io/todos-/",
      desc: "Technology Stack: HTML, Bootstrap, and JavaScript",
    },
    {
      id: 8,
      img: pw8,
      category: "website",
      websiteUrl: "https://jym0.github.io/calculator-app/",
      desc: "Technology Stack: HTML, CSS, and JavaScript",
    },
  ];

  const categories = ["canva", "illustrator", "website"];

  //   const [selectedCategory, setSelectedCategory] = useState('canva');

  //   const handleCategoryClick = (category) => {
  //     setSelectedCategory(category);
  //   };

  const [selectedCategory, setSelectedCategory] = useState("canva");
  const [selectedImage, setSelectedImage] = useState(null);
  const [desc, setDesc] = useState("");


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedImage(null);
    setDesc("");
  };

  const [preview, setPreview] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const handleImageClick = (img, category) => {
    const selectedProject = projectsData.find((project) => project.img === img);

    if (selectedProject) {
      console.log("Selected Project:", selectedProject);
      if (category === "website") {
        // If the category is "website", set tempImg to the website URL
        console.log("Setting tempImg for website:", selectedProject.websiteUrl);
        setTempImg(selectedProject.websiteUrl);
      } else {
        console.log("Setting tempImg for image:", img);
        setTempImg(img); // For other categories, set tempImg to the image URL
      }

      setPreview(true);
      setDesc(selectedProject.desc);

  
    }

  };


  return (
    <section className="projects">
      <p className="code_error">
        <HighlightOff className="highlight_off" />
        ERROR: Roses are Red, Violets are Blue Unexpected &#39;&#123;&#39; on
        line 32.
      </p>
      <span className="background_color"></span>
      <p className="intro_proj" data-aos="fade-down-right">
        let's dive into my creations
      </p>
      <div className="latest_projects_container">
        <svg
          className="bybyin_latest_project"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300.000000 38.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          {" "}
          <g
            transform="translate(0.000000,38.000000) scale(0.100000,-0.100000)"
            stroke="none"
          >
            {" "}
            <path d="M343 365 c-17 -7 -44 -32 -59 -54 -25 -38 -30 -41 -74 -41 -26 0 -69 -3 -95 -7 l-48 -6 6 31 c4 18 4 39 1 47 -8 20 -48 19 -65 -1 -12 -15 -11 -16 10 -9 27 8 26 26 5 -159 -6 -46 -4 -56 15 -75 26 -26 73 -27 115 -2 17 11 62 66 101 125 44 67 82 112 102 123 29 16 33 16 58 -1 33 -22 42 -16 18 12 -25 28 -52 33 -90 17z m-109 -127 c-48 -81 -104 -138 -135 -138 -40 0 -52 21 -44 79 7 55 5 54 130 64 22 2 44 4 48 5 5 1 5 -4 1 -10z" />{" "}
            <path d="M832 373 c-25 -5 -40 -24 -133 -170 -43 -69 -65 -94 -85 -99 -53 -13 -59 2 -56 125 3 96 2 112 -13 117 -19 8 -65 -11 -65 -26 0 -7 6 -8 19 0 11 5 22 10 25 10 3 0 3 -49 -1 -109 -6 -102 -5 -109 16 -130 24 -24 73 -27 110 -7 12 7 58 69 101 137 70 112 80 124 106 124 37 0 45 -34 14 -65 -26 -26 -20 -36 12 -19 28 15 38 28 38 55 0 41 -38 66 -88 57z" />{" "}
            <path d="M1431 367 c-14 -6 -26 -18 -29 -25 -3 -11 0 -12 16 -3 59 31 110 -8 98 -75 -17 -90 -183 -194 -245 -155 -11 7 -12 24 -6 83 15 132 13 153 -13 156 -23 4 -52 -13 -52 -29 0 -5 9 -4 20 3 10 7 21 10 24 7 3 -3 -1 -40 -9 -83 -8 -43 -15 -93 -15 -111 0 -132 284 -44 328 101 17 58 15 79 -10 108 -28 30 -75 40 -107 23z" />{" "}
            <path d="M1600 373 c1 -5 7 -19 15 -33 19 -33 19 -112 0 -157 -21 -49 -19 -66 10 -93 22 -20 31 -22 87 -18 36 3 88 17 122 32 80 36 126 34 171 -5 23 -21 35 -26 35 -16 0 27 -41 66 -79 77 -41 11 -61 6 -156 -34 -36 -15 -79 -26 -108 -26 -60 0 -70 20 -50 99 8 30 12 62 10 72 -4 15 0 17 28 12 23 -4 68 6 143 31 123 41 148 41 187 -6 21 -25 25 -27 25 -10 0 11 -9 31 -21 46 -29 37 -98 36 -212 -4 -48 -17 -96 -30 -108 -30 -31 0 -59 18 -53 34 3 8 -3 19 -15 25 -23 13 -31 14 -31 4z" />{" "}
            <path d="M2831 363 c-28 -15 -40 -34 -78 -123 -25 -58 -52 -113 -61 -122 -18 -21 -78 -24 -85 -5 -3 8 4 56 14 107 20 97 18 130 -7 130 -21 0 -54 -19 -54 -31 0 -6 7 -6 19 1 29 15 32 0 16 -85 -21 -109 -20 -142 6 -156 27 -14 97 -6 117 14 8 8 37 68 66 133 l51 119 39 0 c65 0 77 -53 18 -80 -25 -11 -29 -25 -8 -25 8 0 28 -12 45 -26 41 -34 42 -76 4 -101 -37 -25 -114 -24 -142 1 -17 15 -21 16 -21 4 0 -47 110 -66 180 -30 66 32 63 131 -5 148 -30 7 -32 20 -5 29 32 10 37 53 9 80 -34 33 -77 39 -118 18z" />{" "}
            <path d="M2091 348 c30 -59 81 -80 140 -59 18 6 34 9 37 7 9 -9 31 -161 24 -167 -14 -12 -76 -29 -108 -29 -23 0 -44 10 -69 31 -38 34 -41 33 -23 -6 27 -59 98 -69 199 -29 35 14 85 28 110 31 41 5 49 2 82 -27 20 -18 37 -29 37 -26 0 17 -32 67 -49 76 -25 13 -82 13 -115 0 -24 -9 -25 -8 -38 68 -7 42 -13 81 -13 86 0 12 85 45 119 45 19 1 39 -10 62 -33 40 -40 46 -22 8 23 -22 26 -33 31 -71 31 -25 0 -86 -14 -136 -31 -81 -28 -95 -30 -129 -20 -21 7 -44 21 -51 31 -17 28 -30 25 -16 -2z" />{" "}
            <path d="M1335 41 c-6 -5 -21 -11 -35 -13 l-25 -4 28 -14 c21 -10 30 -11 39 -2 7 7 21 12 33 12 20 1 20 1 1 15 -23 17 -29 18 -41 6z" />{" "}
          </g>{" "}
        </svg>
        <div className="latest_project" id="myLatestProjects">
          <h2 className="titleFor_project">latest/</h2>
          <figure>
            <img
              src={latestProject}
              alt="air-vis website"
              data-aos="flip-left"
            />
            <figcaption>
              Create a user-friendly web application that allows users to see a
              live feed from the drone's camera. A checklist form will be used
              to input data that is related to the fire scene, which will then
              be saved into a file.
              <li>
                {" "}
                Create or login to an account to access the web application.
              </li>
              <li> Allow the user to update or delete the account.</li>
              <li>
                {" "}
                Integrated into the drone camera that is displayed in the web
                application.
              </li>
              <li>
                A temperature sensor and its data are displayed on a web page
                along with the camera.
              </li>
              <li>
                Generate a report about a fire scene and allow users to download
                it.
              </li>
              <div className="tech_container">
                <p>technologies used:</p>
                <img src={htmlTech} alt="html icon" />
                <img src={cssTech} alt="css icon" />
                <img src={jsTech} alt="js icon" />
                <img src={phpTech} alt="php icon" />
                <img src={dbTech} alt="icon" />
              </div>
              <div
                className="airvis_title"
                data-aos="zoom-out-up"
                data-aos-duration="1500"
                data-aos-anchor=".latest_project"
              >
                <h3>air-vis</h3>
                <a
                  href="https://airvis.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live preview
                  <LaunchOutlined className="launch_icon" />
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="projects_container" id="myProjects">
        <svg
          className="bybyin_projects"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 292.000000 49.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          {" "}
          <g transform="translate(0.000000,49.000000) scale(0.100000,-0.100000)">
            {" "}
            <path d="M55 481 c-6 -5 -19 -11 -30 -13 -18 -4 -17 -6 7 -18 24 -11 30 -11 47 4 10 10 26 14 37 10 18 -5 18 -5 0 10 -22 18 -47 21 -61 7z" />{" "}
            <path d="M1104 479 c-3 -6 -18 -9 -31 -6 l-25 5 21 -21 c20 -20 23 -20 48 -6 16 9 35 14 43 11 13 -4 13 -3 1 11 -15 19 -46 22 -57 6z" />{" "}
            <path d="M1624 479 c-3 -6 -18 -9 -33 -6 l-26 5 24 -19 c28 -23 44 -24 61 -4 8 9 21 13 34 10 21 -6 21 -6 2 9 -23 19 -52 21 -62 5z" />{" "}
            <path d="M1017 417 c-20 -5 -42 -18 -48 -29 -9 -16 -8 -19 3 -15 66 27 87 30 113 13 14 -9 25 -25 25 -36 0 -20 -27 -54 -50 -62 -9 -3 -4 -14 15 -33 36 -40 47 -69 35 -100 -21 -54 -117 -56 -189 -4 -49 35 -55 20 -9 -22 71 -64 203 -64 238 0 21 40 4 108 -35 141 -14 12 -13 16 16 46 34 35 82 51 117 39 32 -10 39 -49 27 -147 -10 -81 -10 -92 6 -111 16 -21 18 -21 50 -4 19 9 25 15 13 12 -21 -6 -50 17 -41 32 3 4 8 51 12 103 6 84 5 98 -12 118 -23 29 -90 40 -133 22 -28 -12 -33 -11 -45 8 -21 29 -63 40 -108 29z" />{" "}
            <path d="M2268 420 c-15 -4 -74 -32 -132 -60 -98 -50 -105 -52 -140 -40 -43 14 -59 39 -50 77 4 19 3 25 -4 18 -5 -5 -13 -24 -16 -41 -8 -37 24 -84 58 -84 34 0 35 -7 13 -51 -17 -35 -18 -46 -8 -79 13 -45 52 -80 89 -80 24 0 24 1 -9 23 -59 40 -64 100 -11 157 29 33 180 118 224 127 61 12 109 -33 95 -88 -4 -16 -3 -18 9 -8 17 14 18 62 3 91 -6 11 -26 26 -44 34 -38 16 -39 16 -77 4z" />{" "}
            <path d="M504 402 c-80 -33 -119 -80 -139 -167 -17 -70 -3 -123 35 -142 31 -16 38 -8 15 17 -10 11 -19 36 -20 56 -6 101 55 188 152 218 21 7 22 5 17 -24 -5 -23 -2 -34 12 -45 16 -12 17 -17 6 -32 -24 -35 -25 -46 -7 -79 15 -29 16 -38 6 -61 -12 -26 -12 -26 10 -11 36 23 46 45 31 66 -24 33 -25 44 -4 71 l20 28 -25 32 c-23 30 -24 34 -10 48 14 15 20 15 61 -1 116 -44 171 -199 99 -278 -29 -32 6 -20 39 13 29 29 30 33 26 93 -3 34 -12 75 -21 92 -54 104 -192 152 -303 106z" />{" "}
            <path d="M1568 409 c-79 -21 -137 -88 -158 -183 -13 -60 0 -109 36 -133 33 -21 41 -10 15 23 -53 68 0 203 100 255 52 26 61 25 49 -6 -8 -20 -6 -29 10 -45 25 -25 25 -28 -2 -57 l-22 -23 22 -30 c25 -33 27 -51 10 -68 -21 -21 -2 -23 25 -1 30 23 35 50 12 69 -8 7 -15 20 -15 30 0 10 7 23 15 30 20 17 19 26 -6 62 -19 27 -20 31 -6 45 33 33 135 -28 168 -102 24 -53 24 -121 0 -161 -19 -31 -19 -32 0 -27 80 21 76 179 -8 265 -57 58 -155 81 -245 57z" />{" "}
            <path d="M2804 406 c-11 -8 -55 -71 -98 -140 -80 -130 -112 -160 -155 -149 -28 7 -32 28 -29 158 l3 110 -26 3 c-15 2 -34 -4 -43 -14 -20 -20 -13 -32 8 -15 20 17 39 4 32 -23 -3 -11 -6 -63 -7 -114 -3 -106 9 -128 72 -138 57 -8 86 20 174 164 82 135 107 158 144 135 21 -14 15 -42 -17 -77 l-27 -28 25 7 c54 15 75 69 44 113 -18 26 -68 30 -100 8z" />{" "}
            <path d="M1623 45 c-12 -8 -30 -12 -40 -9 -16 5 -16 4 1 -10 23 -19 52 -21 62 -5 3 6 17 9 31 6 23 -4 23 -3 7 14 -21 23 -33 24 -61 4z" />{" "}
          </g>{" "}
        </svg>

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
          <p
            className="line_gallery"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          ></p>
          <p className="line_gallery"></p>
          <p className="line_gallery"></p>
          <div className="projects_pic">
            {projectsData
              .filter((item) => item.category === selectedCategory)
              .map((item, index) => (
                <div
                  key={index}
                  className={`image-category ${
                    item.category === "illustrator"
                      ? "illustrator-category"
                      : ""
                  }`}
                >
                  <div className="preview_span">
                    <img
                      src={item.img}
                      alt={`Project ${item.id}`}
                      className={selectedImage === item.img ? "selected" : ""}
                      data-aos="zoom-in-up"
                      data-aos-anchor=".projects_pic"
                    />
                    <div
                      className="preview_background"
                      onClick={() => handleImageClick(item.img, item.category)}
                    >
                      <Visibility />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className={preview ? "preview open" : "preview"}>
            <CloseOutlined onClick={() => setPreview(false)} />
            <div>
              {selectedCategory === "website" ? (
                <iframe title="Website Preview" src={tempImg} />
              ) : (
                <img src={tempImg} alt="Preview" />
              )}
              <p className="desc_preview">{desc}</p>
            </div>
          </div>
        </div>
        <div className="random_title_projects" data-aos="zoom-out-down">
          The only thing
          <br /> more <span>tangled</span> than
          <br /> my earphones is
          <br /> my <span>CSS</span> in this
          <br />
          project.
          <p></p>
          <em></em>
        </div>
      </div>
    </section>
  );
};

export default Projects;
