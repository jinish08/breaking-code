import React from "react";

const CardRedeem = (props) => {
  return (
    <>
      <div class="card">
        <div class="content">
          <img src="/images/tractor.png" alt="Missing" />
          <h2>{props.name}</h2>
          <p>Redeem Points: {props.points}</p>
        </div>
        <button
          type="button"
          class="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target={"#exampleModal" + props.id}
        >
          Redeem
        </button>
      </div>
      <div
        class="modal fade"
        id={"exampleModal" + props.id}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
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
