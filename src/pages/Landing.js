import React, { useState } from "react";
import "../css/landing.css";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Landing = () => {
  const [sign, setSign] = useState(false);
  const [loginin, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!loginin);
  }

  const handleSign = () => {
    setSign(!sign);
  };

  return (
    <>
      <section className="header">
        <img src="images/menu.png" alt="menu" className="menuImg" id="menuImgI" />
        <div className="textBox">
          <h1>Your Waste is not a Waste Anymore!</h1>
          {/* <p>This is a sample website made by me for the S4DS interview. <br/>Hope you like it ;</p> */}
          <a href="#section2" className="ourBtn">
            Learn More
          </a>
          <br />
          <Link to="/" onClick={handleLogin} className="ourBtn">
            Login
          </Link>
          <Link to="/" onClick={handleSign} className="ourBtn">
            Signup
          </Link>
        </div>
      </section>
      <section className="courses">
        <h1 className="h1Course">What we do</h1>

        <div id="section2" className="maiCl">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="gfImg"
                  src="/images/waste.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back" id="card1b">
                <p>
                  India generates about 350 million tonnes of agricultural waste
                  every year
                </p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="gitImg"
                  src="images/fertilizer.jpg"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back" id="card2b">
                <p>We help to convert this waste into manure</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="udeImg"
                  src="images/money.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back" id="card3b">
                <p>We reward points if you donate your generated waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Login loginin={loginin} handleLogin={handleLogin} />
      <Signup sign={sign} handleSign={handleSign} />
    </>
  );
};

export default Landing;
