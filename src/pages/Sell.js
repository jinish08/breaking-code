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
          <CardSell image="cowdung" id="1" name="Cow Dung" points="15" desc="The dry outer covering of some fruits or seeds."/>
          <CardSell image="cropresidues" id="2" name="Husk" points="1" />
          <CardSell image="weedsmoking" id="3" name="Weed" points="1" />
          <CardSell image="leaflitter" id="4" name="Leaf Litter" points="1" />
          <CardSell image="" id="5" name="Sawdust" points="1" />
          <CardSell image="forestwaste" id="6" name="Forest Waste" points="1" />
          <CardSell image="lifestock" id="7" name="Lifestock Waste" points="1" />
          <CardSell image="feather" id="8" name="Feathers" points="1" />
        </div>
      </section>
    </>
  );
};

export default Sell;
