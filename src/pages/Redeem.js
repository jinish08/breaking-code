import React from "react";
import { Navbar } from "../components/Navbar";
import "../css/redeem.css";
import CardRedeem from "../components/CardRedeem";

const Redeem = () => {
  return (
    <>
      <section class="header">
        <Navbar />
        <div class="container1">
          <CardRedeem id="1" name="Tractor" points="15000" />
          <CardRedeem id="2" name="Fertilizer" points="100" />
          <CardRedeem id="3" name="Fertilizer" points="100" />
          <CardRedeem id="4" name="Fertilizer" points="100" />
          <CardRedeem id="5" name="Fertilizer" points="100" />
          <CardRedeem id="6" name="Fertilizer" points="100" />
          <CardRedeem id="7" name="Fertilizer" points="100" />
          <CardRedeem id="8" name="Fertilizer" points="100" />
        </div>
      </section>
    </>
  );
};

export default Redeem;
