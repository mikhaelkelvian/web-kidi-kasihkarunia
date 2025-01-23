import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const categories = ["all", "percetakan", "souvenir", "advertising", "packaging"];
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched products:", data); // Debugging log
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory === "all" ? products : products.filter((product) => product.category?.toLowerCase() === selectedCategory.toLowerCase());

  if (selectedProduct) {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-blue-200 p-8">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6">
          <img src={selectedProduct.imageUrl} alt={selectedProduct.name} className="size-1/3 rounded-lg" />
          <div className="md:ml-6 mt-4 md:mt-0 w-3/5">
            <div className="flex flex-row gap-2">
              <h1 className="text-3xl font-bold self-center">{selectedProduct.name}</h1>
              <p className="bg-blue-500 h-fit px-3 rounded-xl self-center text-sm font-semibold text-slate-200">{selectedProduct.category}</p>
            </div>
            <span className="flex my-3 h-[1px] opacity-70 bg-slate-700"></span>
            <p className="text-gray-700">{selectedProduct.description}</p>
            {selectedProduct.link && (
              <a href={selectedProduct.link} className="block mt-4 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                View Product
              </a>
            )}
            <button onClick={() => setSelectedProduct(null)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Kembali
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="product" className="bg-gradient-to-r from-blue-50 to-blue-200 p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Product</h2>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-2 rounded-lg border border-gray-300">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length === 0 ? (
            <p>No products available.</p>
          ) : (
            filteredProducts.map((product) => (
              <div key={product.id} onClick={() => setSelectedProduct(product)} className="cursor-pointer relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 group">
                {product.imageUrl ? (
                  <img src={product.imageUrl} alt={product.name} className="w-full h-80 object-cover" />
                ) : (
                  <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">No image available</p>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-center py-2 opacity-90">{product.name}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
