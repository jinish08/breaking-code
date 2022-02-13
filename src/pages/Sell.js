import React, { useEffect, useState } from 'react';
import CardSell from "../components/CardSell";
import { Navbar } from "../components/Navbar";
import "../css/main.css";
import { db } from '../utils/init-firebase';
import { useAuth } from '../contexts/AuthContext';
import {
  collection,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const Sell = () => {
  const [products, setProducts] = useState([]);

	const productsCollectionRef = collection(db, 'products');
  const userRef = collection(db, "users");

  const [quantity, setQuantity] = useState(0);

  const [address, setAddress] = useState("");

  const {currentUser} = useAuth();

  
  const userId = currentUser.uid;
  console.log(userId);


  useEffect(() => {
		const getProducts = async () => {
			try {
				const data = await getDocs(productsCollectionRef);

				setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			} catch (error) {
				console.log(error.message);
			}
		};
    const getUser = async () => {
      try {
          const q = query(userRef, where("user_id", "==", userId));
          const querySnapshot = await getDocs(q);
          const userData = querySnapshot.docs[0].data();
          setAddress(userData.address);
          console.log("This is address"+address);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
		getProducts();
	}, []);

  
  return (
    <>
      <section className="header">
        <Navbar />
        <div class="container1">
          {products?.map((product) => (
								<CardSell
                key={product.id}
									image={product.image}
									id={product.id}
                  uid={userId}
									name={product.name}
									points={product.points}
									desc={product.desc}
                  quantity={product.quantity}
                  address={address}
								/>
							))}
        </div>
      </section>
    </>
  );
};

export default Sell;
