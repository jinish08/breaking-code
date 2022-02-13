import React, { useState } from "react";
import {
  collection,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import {
  useToast,
} from "@chakra-ui/react";
import { db } from "../utils/init-firebase";

const CardRedeem = (props) => {
  const { id, uid, quantity } = props;

  const toast = useToast();

  const handleBuy = async () => {
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("user_id", "==", uid));
      const querySnapshot = await getDocs(q);
      const userID = querySnapshot.docs[0].id;
      console.log(userID);
      const userDoc = doc(db, "users", userID);
      const points = querySnapshot.docs[0].data().points;
      if (parseInt(points) >= parseInt(props.points)) {
        try {
          const utilDoc = doc(db, "utilities", id);
          const newField = { quantity: parseInt(quantity) - 1 };
          await updateDoc(utilDoc, newField);
          console.log("Bought Succesfully");
        } catch (error) {
          console.log(error);
        }
        try {
          const newField = {
            points: parseInt(points) - parseInt(props.points),
          };
          await updateDoc(userDoc, newField);
          console.log("Points Updated Succesfully by " + props.points);
          toast({
            description: "Redeemed Successful",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("Insufficient Points");
        toast({
          description: "Insufficient Points",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="card">
        <div className="content" style={{ height: "250px" }}>
          <img
            src={"/images/" + props.image + ".jpg"}
            alt="Missing"
            width="200px"
            height="120px"
            style={{
              minHeight: "125px",
              maxHeight: "125px",
              objectFit: "fill",
            }}
          />
          <h2 style={{ paddingTop: "20px" }}>{props.name}</h2>
          <p>Points: {props.points}</p>
          <p style={{ lineHeight: 1, color: "gray", fontSize: "13px" }}>
            {props.desc}
          </p>
        </div>
        <button
          type="button"
          className="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target={"#exampleModal" + props.id}
          style={{ width: "80%", background: "#1572A1", color: "#9AD0EC" }}
        >
          Redeem
        </button>
      </div>
      <div
        className="modal fade"
        id={"exampleModal" + props.id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to use {props.points} points for{" "}
              {props.name}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleBuy}
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRedeem;
