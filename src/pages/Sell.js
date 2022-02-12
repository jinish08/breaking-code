import React, { useEffect, useState } from 'react';
import CardSell from "../components/CardSell";
import { Navbar } from "../components/Navbar";
import "../css/main.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../utils/init-firebase';
import { useAuth } from '../contexts/AuthContext';

const Sell = () => {
  const [products, setProducts] = useState([]);

	const productsCollectionRef = collection(db, 'products');

  const [quantity, setQuantity] = useState(0);

  const {currentUser} = useAuth();


  useEffect(() => {
		const getProducts = async () => {
			try {
				const data = await getDocs(productsCollectionRef);

				setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			} catch (error) {
				console.log(error.message);
			}
		};
		getProducts();
	}, []);

  const userId = currentUser.uid;
  const address = currentUser.address;

  console.log(userId);
  

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
