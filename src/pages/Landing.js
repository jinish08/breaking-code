import React from "react";
import "../css/landing.css";

const Landing = () => {
  return (
    <>
        <section class="header">
        <img src="images/menu.png" alt="menu" class="menuImg" id="menuImgI"/>
        <div class="textBox">
            <h1>Your Waste is not a Waste Anymore!</h1>
            <p>This is a sample website made by me for the S4DS interview. <br/>Hope you like it ;</p>
            <a href="" class="ourBtn">Learn More</a>
        </div>
    </section>
      <section className="courses">
        <h1 className="h1Course">What we do</h1>
        <p className="pCourse">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum soluta
          perspiciatis eligendi necessitatibus ullam itaque.
        </p>

        <div className="maiCl">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="gfImg"
                  src="https://www.nuffoodsspectrum.in/uploads/articles/1-6628.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back" id="card1b">
                <h1>Education Partner:</h1>
                <p>Geekforgeeks</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="gitImg"
                  src="images/rewards edit.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back" id="card2b">
                <h1>VCS Partner:</h1>
                <p>GitHub</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="udeImg"
                  src="images/rewards.png"
                  alt="Avatar"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
              <div className="flip-card-back" id="card3b">
                <h1>Course Partner:</h1>
                <p>Udemy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
