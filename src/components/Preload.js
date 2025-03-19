import React from 'react'
import "../scss/Preload.scss";
import myLogo from "../assets/logo.png";

const Preload = () => {
    return (
      <section className="preload">
        <div className="preload_logo">
          <img src={myLogo} alt="logo" />
          <span></span>
        </div>
        <div className="preload_text">
          <p>
            loading<span>.</span>
            <span>.</span>
            <span>.</span>
          </p>
        </div>
      </section>
    );
}

export default Preload