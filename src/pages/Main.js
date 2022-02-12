import React from "react";
import { Navbar } from "../components/Navbar";
import "../css/main.css";

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
              <a href="/sell" class="btn btn-primary">
                Sell
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body" id="Redeem">
              <h5 class="card-title">Redeem Points</h5>
              <p class="card-text">Click here to redeem Points</p>
              <a href="/redeem" class="btn btn-primary">
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
