import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/init-firebase";
import { useAuth } from "../contexts/AuthContext";

export const Navbar = () => {
  const [users, setusers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  const [quantity, setQuantity] = useState(0);

  const { currentUser } = useAuth();

  useEffect(() => {
    const getusers = async () => {
      try {
        const data = await getDocs(usersCollectionRef);

        setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error.message);
      }
    };
    getusers();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="main">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Account
                    </a>
                  </li>
                  <li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Points
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Help
                      </a>
                    </li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Log out
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="redeem">
                  Redeem
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <p>Lance Correia</p>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Points: </p>
              <p>Email</p>
              <p>Address</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
