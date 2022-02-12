import React , {useState} from "react";
import "../css/landing.css";
import { Link } from "react-router-dom";
import Login from "../components/Login";

const Landing = () => {

  const [button, setButton] = useState(false);

  const handleClick = () => {
    setButton(!button);
  };

  return (
    <>
        <section class="header">
        <img src="images/menu.png" alt="menu" class="menuImg" id="menuImgI"/>
        <div class="textBox">
            <h1>Your Waste is not a Waste Anymore!</h1>
            {/* <p>This is a sample website made by me for the S4DS interview. <br/>Hope you like it ;</p> */}
            <a href="#section2" class="ourBtn">Learn More</a>
            <br />
            <Link to="/" onClick={handleClick} className="ourBtn">Get Started</Link>
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
                <p>India generates about 350 million tonnes of agricultural waste every year</p>
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
      <Login handleClick={handleClick} button={button}/>
    </>
  );
};

export default Landing;
