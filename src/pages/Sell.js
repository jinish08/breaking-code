import React from "react";
import CardSell from "../components/CardSell";
import { Navbar } from "../components/Navbar";
import "../css/main.css";

const Sell = () => {
  return (
    <>
      <section className="header">
        <Navbar />
        <div class="container1">
          <CardSell image="wastesell" id="1" name="Cow Dung" points="15" />
          <CardSell image="" id="2" name="Crop Residues" points="1" />
          <CardSell image="" id="3" name="Weed" points="1" />
          <CardSell image="" id="4" name="Leaf Litter" points="1" />
          <CardSell image="" id="5" name="Sawdust" points="1" />
          <CardSell image="" id="6" name="Forest Waste" points="1" />
          <CardSell image="" id="7" name="Lifestock Waste" points="1" />
          <CardSell image="" id="8" name="Feathers" points="1" />
        </div>
      </section>
    </>
  );
};

export default Sell;
