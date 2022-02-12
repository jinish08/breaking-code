import React from "react";
import { Navbar } from "../components/Navbar";
import "../css/main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <section className="header">
        <Navbar />
        <div class="container">
          <div class="card">
            <div class="card-body" id="Sell">
              <h5 class="card-title">Sell Waste</h5>
              <p class="card-text">Sell your waste to get Points</p>
              <Link to="/sell" class="btn btn-primary">
                Sell
              </Link>
            </div>
          </div>
          <div class="card">
            <div class="card-body" id="Redeem">
              <h5 class="card-title">Redeem Points</h5>
              <p class="card-text">Click here to redeem Points</p>
              <Link to="/redeem" class="btn btn-primary">
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
