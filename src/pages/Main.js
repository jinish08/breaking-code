import React from "react";
import { Navbar } from "../components/Navbar";
import "../css/main.css";

const Main = () => {
  return (
    <>
      <section className="header">
        <Navbar />
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sell Waste</h5>
              <p className="card-text">Sell your waste to get Points!!!</p>
              <a href="/sell" className="btn btn-primary">
                Sell
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Redeem Points</h5>
              <p className="card-text">Click here to redeem points</p>
              <a href="/redeem" className="btn btn-primary">
                Redeem
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
