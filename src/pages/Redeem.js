import React from "react";
import { Navbar } from "../components/Navbar";
import "../css/redeem.css";
import { Card } from "../components/Card";

const Redeem = () => {
  return (
    <>
      <section class="header">
        <Navbar />
        <div class="container1">
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
};

export default Redeem;
