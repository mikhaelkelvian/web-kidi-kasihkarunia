import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched Products: ", data); // Debugging
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error); // Debugging
      }
    };
    fetchProducts();
  }, []);

  return (
    <section id="product" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="p-4 bg-gray-200 rounded shadow-md">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="h-32 w-full object-cover mb-2" />}
                <a href={product.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  View Product
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
