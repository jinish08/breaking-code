import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import "../css/redeem.css";
import CardRedeem from "../components/CardRedeem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/init-firebase";
import { useAuth } from "../contexts/AuthContext";

const Redeem = () => {
  const [utilities, setutilities] = useState([]);

  const utilitiesCollectionRef = collection(db, "utilities");

  const [quantity, setQuantity] = useState(0);

  const { currentUser } = useAuth();

  useEffect(() => {
    const getutilities = async () => {
      try {
        const data = await getDocs(utilitiesCollectionRef);

        setutilities(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.log(error.message);
      }
    };
    getutilities();
  }, []);
  return (
    <>
      <section className="header">
        <Navbar />
        <div class="container1">
          {utilities?.map((utility) => (
            <CardRedeem
              image={utility.image}
              id={utility.id}
              name={utility.name}
              points={utility.points}
              desc={utility.desc}
              quantity={utility.quantity}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Redeem;
