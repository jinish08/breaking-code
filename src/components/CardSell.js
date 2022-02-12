import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

const CardSell = (props) => {
  return (
    <>
      <div class="card">
        <div class="content">
          <img
            src={"/images/" + props.image + ".jpg"}
            alt="Missing" width="200px" height="120px"
            style={{ minHeight: "125px" , objectFit: "fill"}}
          />
          <h2 style={{paddingTop:"20px"}}>{props.name}</h2>
          <p>Points: {props.points}</p>
          <p style={{lineHeight:1 , color:"gray" ,fontSize:"13px"}}>{props.desc}</p>
        </div>
        <button
          type="button"
          class="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target={"#exampleModal" + props.id}
          style={{width:"80%" , background: "#1572A1" ,color: "#9AD0EC"}}
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
      >
        {/* <div class="modal-dialog">
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
              Are you sure you want to use {props.points} points for{" "}
              {props.name}
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
                data-bs-dismiss="modal"
              >
                Sell
              </button>
            </div>
          </div>
        </div> */}
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{props.name}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Quantity (Kgs):</label>
                  <input type="number" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">Address :</label>
                  <textarea class="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Sellnd message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSell;