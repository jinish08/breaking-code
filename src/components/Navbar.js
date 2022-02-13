import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../utils/init-firebase";
import { useAuth } from "../contexts/AuthContext";
import { NavLink } from "react-router-dom";

// import { collection, query, where, getDocs } from "firebase/firestore";

export const Navbar = () => {
  const { currentUser } = useAuth();
  const uid = currentUser.uid;
  const [user, setUser] = useState({});
  useEffect(() => {
    const getuser = async () => {
      try {
        // const userRef = collection(db, "users");
        // const q = query(userRef, where("user_id", "==", uid));
        // const querySnapshot = await getDocs(q);
        // const userID = querySnapshot.docs[0].id;
        // console.log(userID);
        // const userDoc = doc(db, "users", userID);
        // console.log(userDoc.);
        const q = query(collection(db, "users"), where("user_id", "==", uid));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          setUser(doc.data());
          console.log(user);
        });
      } catch (error) {
        console.log(error.message);
      }
    };
    getuser();
  }, [user]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/main" style={{marginLeft:"60px"}}>
            Farm Grow
          </NavLink>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/main"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
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
              <li className="nav-item">
                <NavLink className="nav-link active" to="/redeem">
                  Redeem
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/sell">
                  Sell
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                <p>{user.name}</p>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Points: {user.points}</p>
              <p>Email: {user.email}</p>
              <p>Address: {user.address}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
