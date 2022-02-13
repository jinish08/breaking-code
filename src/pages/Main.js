import React from "react";
import { Navbar } from "../components/Navbar";
import "../css/main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className="header">
        <Navbar />
        <div className="container">
          <div className="card">
            <div className="card-body" id="Sell">
              <h5 className="card-title">Sell Waste</h5>
              <p className="card-text">Sell your waste to get Points</p>
              <Link to="/sell" className="btn btn-primary">
                Sell
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body" id="Redeem">
              <h5 className="card-title">Redeem Points</h5>
              <p className="card-text">Click here to redeem Points</p>
              <Link to="/redeem" className="btn btn-primary">
                Redeem
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
