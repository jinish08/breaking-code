import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from "react";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/init-firebase";
import { useAuth } from "../contexts/AuthContext";

const CardSell = (props) => {
  const [sellquantity, setSellquantity] = useState(0);

  const { id, uid, quantity } = props;
  const [newAddress, setNewAddress] = useState(props.address);

  const handleSell = async () => {
    try {
      // const productsCollectionRef = collection(db, 'products');
      const productDoc = doc(db, "products", id);
      const newField = { quantity: quantity + sellquantity };
      await updateDoc(productDoc, newField);
      console.log("Sold Succesfully");
    } catch (error) {
      console.log(error);
    }

    try {
      if (props.address !== newAddress) {
        console.log(uid);
        const userDoc = doc(db, "users", uid);
        const newField = { address: newAddress };
        await updateDoc(userDoc, newField);
        console.log("Address Updated Succesfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="card">
        <div class="content" style={{ color: "black" }}>
          <img
            src={"/images/" + props.image + ".jpg"}
            alt="Missing"
            width="200px"
            height="120px"
            style={{ minHeight: "125px", objectFit: "fill" }}
          />
          <h2 style={{ paddingTop: "20px" }}>{props.name}</h2>
          <p>Points: {props.points}</p>
          <p style={{ lineHeight: 1, color: "gray", fontSize: "13px" }}>
            {props.desc}
          </p>
        </div>
        <button
          type="button"
          class="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target={"#exampleModal" + props.id}
          style={{ width: "80%", background: "#1572A1", color: "#9AD0EC" }}
        >
          Sell
        </button>
      </div>
      <div
        class="modal fade"
        id={"exampleModal" + props.id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ color: "black" }}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {props.name}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Quantity (Kgs):
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="recipient-name"
                    required
                    onChange={(e) => setSellquantity(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Address :
                  </label>
                  <textarea
                    class="form-control"
                    id="message-text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={handleSell}
              >
                Sell Waste
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSell;
