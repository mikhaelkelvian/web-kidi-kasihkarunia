import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  const toggleDescription = (id) => {
    setActiveProduct((prevId) => (prevId === id ? null : id)); // Toggle description visibility
  };

  return (
    <section id="product" className="p-8 bg-blue-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="p-4 bg-blue-200 rounded shadow-md hover:shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => toggleDescription(product.id)} // Toggle description on click
              >
                <div className="relative">
                  {product.imageUrl && (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-64 w-full object-cover rounded-t-lg"
                    />
                  )}
                  <h3 className="text-xl font-bold mt-4">{product.name}</h3>
                  {activeProduct === product.id && (
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
