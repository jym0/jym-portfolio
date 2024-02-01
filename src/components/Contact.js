import React, { useRef, useState } from 'react';
import "../scss/Contact.scss";
import { Email, LocalPhone, NearMe } from '@mui/icons-material';
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
AOS.init();


  const form = useRef(null);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    // Check if required fields are empty
    const newFormErrors = {};

    ["name", "email", "subject", "message"].forEach((field) => {
      const fieldValue = formData.get(field).trim();

      if (!fieldValue) {
        newFormErrors[field] = "This field is required";
      } else {
        newFormErrors[field] = "";
      }
    });

    // Check if any errors exist
    if (Object.values(newFormErrors).some((error) => error !== "")) {
      setSubmitMessage("Please fill in all required fields");
      setFormErrors(newFormErrors);

      // Clear error messages after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
        setFormErrors({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 5000);
    } else {
      // If no errors, send email
      emailjs
        .sendForm(
          "service_uab0i3k",
          "template_rbkt3lp",
          form.current,
          "ppoKWrPBpFXghHNOy"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSubmitMessage("Your message has been sent successfully!");

            // Clear error messages after 5 seconds
            setTimeout(() => {
              setSubmitMessage("");
              setFormErrors({
                name: "",
                email: "",
                subject: "",
                message: "",
              });
            }, 5000);
          },
          (error) => {
            console.log(error.text);
            setSubmitMessage(
              "There was an error sending your message. Please try again later."
            );

            // Clear error messages after 5 seconds
            setTimeout(() => {
              setSubmitMessage("");
              setFormErrors({
                name: "",
                email: "",
                subject: "",
                message: "",
              });
            }, 5000);
          }
        );
    }
  };



  
    return (
      <section className="contact" id="contact">
        <h2 className="contact_title">Get in touch</h2>
        <div className="contact_info_container" data-aos="zoom-in-up">
          <svg
            className="bybyin_contact"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="300.000000pt"
            height="44.000000pt"
            viewBox="0 0 300.000000 44.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            {" "}
            <g transform="translate(0.000000,44.000000) scale(0.100000,-0.100000)">
              {" "}
              <path d="M1826 425 l-29 -12 22 -13 c19 -9 26 -9 41 5 10 9 24 14 29 10 6 -3 11 -2 11 3 0 10 -25 23 -38 21 -4 0 -20 -6 -36 -14z" />{" "}
              <path d="M253 365 c-11 -8 -40 -61 -64 -117 -45 -107 -75 -148 -107 -148 -37 0 -43 21 -27 104 8 43 15 93 15 112 0 29 -3 34 -23 34 -23 0 -47 -17 -47 -32 0 -5 8 -4 19 1 10 6 21 8 23 5 3 -2 -1 -41 -9 -86 -19 -109 -15 -139 20 -156 22 -10 35 -11 62 -2 44 14 56 32 100 144 50 127 60 138 118 123 39 -11 38 -52 -3 -75 -32 -18 -39 -32 -16 -32 25 0 76 -50 76 -75 0 -58 -109 -87 -164 -44 -21 16 -26 17 -26 5 0 -8 7 -22 16 -30 46 -46 169 -25 203 36 26 45 4 81 -67 114 -2 1 8 13 22 27 22 22 24 29 15 55 -17 48 -91 69 -136 37z" />{" "}
              <path d="M793 365 c-11 -8 -52 -61 -91 -118 -76 -112 -84 -121 -124 -136 -19 -7 -31 -6 -43 3 -24 17 -12 92 16 99 25 7 25 27 -1 27 -27 0 -25 18 2 22 13 2 24 11 26 21 3 15 0 18 -17 12 -17 -5 -20 -2 -18 22 2 26 -1 28 -32 28 -19 0 -36 -5 -38 -11 -2 -7 6 -10 23 -6 23 4 26 2 21 -12 -4 -10 -7 -22 -7 -27 0 -5 -7 -9 -15 -9 -8 0 -15 -7 -15 -16 0 -8 5 -12 10 -9 6 3 10 -1 10 -9 0 -9 -7 -16 -15 -16 -8 0 -15 -7 -15 -15 0 -8 5 -15 10 -15 6 0 10 -22 10 -49 0 -58 16 -76 69 -75 53 0 86 27 153 128 96 145 131 171 172 131 21 -21 29 -3 10 23 -18 26 -69 30 -101 7z" />{" "}
              <path d="M1261 363 c-11 -10 -51 -67 -89 -128 -73 -118 -105 -145 -143 -125 -20 11 -21 18 -18 123 l4 112 -26 3 c-15 2 -31 -4 -40 -14 -13 -16 -12 -17 13 -11 l28 7 -7 -108 -6 -108 28 -22 c63 -50 102 -24 199 133 71 114 81 126 105 123 33 -4 40 -37 11 -63 -25 -22 -26 -37 -2 -28 54 19 70 79 30 107 -29 21 -61 20 -87 -1z" />{" "}
              <path d="M2105 370 c-9 -15 46 -70 78 -78 18 -5 50 -5 71 0 22 5 45 7 53 4 20 -8 16 -39 -9 -65 -17 -19 -19 -27 -10 -40 38 -52 38 -62 2 -94 l-35 -29 30 7 c73 16 93 54 55 103 l-20 25 20 22 c21 23 27 60 10 70 -23 14 -7 32 39 44 41 10 54 10 85 -3 20 -8 39 -22 42 -31 7 -16 24 -21 24 -6 0 5 -12 23 -26 40 -39 47 -79 49 -180 12 -111 -40 -156 -41 -195 -2 -16 16 -31 26 -34 21z" />{" "}
              <path d="M2576 363 c15 -55 80 -86 147 -71 22 5 46 7 54 4 19 -8 16 -40 -7 -61 -11 -10 -20 -23 -20 -30 0 -7 9 -20 20 -30 29 -26 25 -50 -12 -80 -30 -24 -31 -26 -8 -19 56 15 70 24 76 49 5 19 1 32 -17 51 l-22 24 21 23 c26 28 28 54 6 78 -16 17 -15 19 10 29 63 24 99 23 139 -4 39 -27 43 -26 27 5 -13 23 -61 49 -92 49 -13 0 -57 -13 -98 -30 -100 -39 -149 -39 -194 0 -25 22 -33 26 -30 13z" />{" "}
              <path d="M1703 325 c-37 -16 -63 -60 -63 -106 0 -48 56 -99 108 -99 51 0 84 26 116 93 31 66 55 88 97 89 24 1 39 -6 56 -26 34 -40 30 -82 -12 -122 -19 -18 -35 -35 -35 -38 0 -11 36 8 62 32 71 66 28 182 -68 182 -54 0 -87 -26 -125 -102 -43 -85 -92 -104 -146 -55 -42 37 -19 124 37 142 11 4 20 11 20 16 0 12 -9 11 -47 -6z" />{" "}
              <path d="M2775 40 c-4 -6 -16 -8 -28 -4 -19 6 -20 5 -8 -10 15 -18 56 -22 66 -5 4 6 14 8 22 5 9 -4 13 -1 11 6 -6 17 -54 23 -63 8z" />{" "}
            </g>{" "}
          </svg>
          <div className="contact_info">
            <LocalPhone />
            <p>09064821687</p>
          </div>
          <div className="contact_info">
            <Email />
            <p>fabellorejym@gmail.com</p>
          </div>
          <div className="contact_info">
            <NearMe />
            <p>03 Banana St. Purok 3 New Lower Bicutan, Taguig City</p>
          </div>
        </div>
        <h2 className="send_message_title">send message</h2>
        <form className="contact_form" ref={form} onSubmit={sendEmail}>
          <div className="contact_input">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                className={formErrors.name && "error"}
              />
              <p className="error_message">{formErrors.name}</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <input
                type="email"
                placeholder="Email"
                name="email"
                className={formErrors.email && "error"}
              />
              <p className="error_message">{formErrors.email}</p>
            </div>
          </div>
          <div
            className="subject_error"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className={formErrors.subject && "error"}
            />
            <p className="error_message">{formErrors.subject}</p>
          </div>
          <div
            className="textarea_error"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <textarea
              name="message"
              rows={9}
              placeholder="Message"
              className={formErrors.message && "error"}
            />
            <p className="error_message">{formErrors.message}</p>
          </div>
          <button type="submit">
            <a>
              <span>send message</span>
            </a>
            <p className="submit_message">{submitMessage}</p>
          </button>
        </form>
      </section>
    );
}

export default Contact