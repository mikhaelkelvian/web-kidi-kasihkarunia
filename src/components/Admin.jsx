import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import axios from "axios";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", imageUrl: "" });
  const [imageFile, setImageFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  // Fetch Products
  try {
    useEffect(() => {
      const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      };
      fetchProducts();
    }, []);
  } catch (error) {
    console.error("Error", error);
  }

  // Handle Image Upload
  const handleImageUpload = async () => {
    if (!imageFile) return null;

    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${imgBBKey}`, formData);
    return response.data.data.url;
  };

  // Add Project
  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const uploadedImageUrl = await handleImageUpload();
      const productData = { ...newProduct, imageUrl: uploadedImageUrl };
      const docRef = await addDoc(collection(db, "products"), productData);

      console.log("Document written with ID: ", docRef.id); // Debugging
      setProducts([...products, { id: docRef.id, ...productData }]);
      setNewProduct({ name: "", description: "", price: "", imageUrl: "" });
      setImageFile(null);
    } catch (error) {
      console.error("Error adding document: ", error); // Debugging
    }
  };

  // Update Project
  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    const uploadedImageUrl = imageFile ? await handleImageUpload() : newProduct.imageUrl;
    const updatedProduct = { ...newProduct, imageUrl: uploadedImageUrl };

    const productRef = doc(db, "products", currentProductId);
    await updateDoc(productRef, updatedProduct);

    setProducts(products.map((project) => (project.id === currentProductId ? { id: currentProductId, ...updatedProduct } : project)));
    setIsEditing(false);
    setNewProduct({ name: "", description: "", price: "", imageUrl: "" });
    setImageFile(null, currentProductId, setCurrentProductId(null));
  };

  // Delete Project
  const handleDeleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    setProducts(products.filter((product) => product.id !== id));
  };

  // Start Editing Project
  const startEditingProduct = (product) => {
    setIsEditing(true);
    setNewProduct(product, currentProductId, setCurrentProductId(product.id));
  };

  return (
    <div className="flex flex-row h-screen">
      {/* sidebar */}
      <div id="sidebar" className="flex w-1/3 bg-blue-300 border-r border-blue-500 shadow-lg">
        <div className="flex flex-col mx-10 gap-2 self-center">
          <h2 className="text-3xl font-semibold">Apa itu dashboard admin?</h2>
          <span className="h-[1px] bg-slate-500 opacity-75"></span>
          <p className="font-medium">
            Di dashboard admin adalah tempat dimana kamu dapat menambahkan data produk mu secara otomatis dan tentunya cepat. Karena disini kamu hanya perlu memasukkan data-data uang diperlukan untuk menambahkan produk baru.
          </p>
          {/* logout button */}
          <button onClick={handleLogout} className="px-4 py-3 bg-red-500 text-white rounded-lg my-7">
            Logout
          </button>
        </div>
      </div>

      {/* main dashboard */}
      <div className="px-14 flex flex-col w-2/3 h-screen overflow-scroll">
        <h1 className="flex justify-center text-4xl font-semibold my-16">Dashboard Admin</h1>
        {/* form add new product */}
        <form onSubmit={isEditing ? handleUpdateProduct : handleAddProduct} className="flex flex-col space-y-5">
          <h1 className="text-2xl font-medium">{isEditing ? "Edit Produk" : "Tambahkan Produk Baru Anda"}</h1>
          <input type="file" onChange={(e) => setImageFile(e.target.files[0])} className="w-full h-[150px] p-2 border-2 rounded border-slate-400" />
          <div className="flex flex-row gap-4">
            <input type="text" placeholder="Nama" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Harga Satuan" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} className="w-full p-2 border rounded" />
          </div>
          <textarea rows={4} type="text" placeholder="Deskripsi" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-3/4 mx-auto py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg">
            {isEditing ? "Perbarui Produk" : "Tambah Produk"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setNewProduct({ name: "", description: "", price: "", imageUrl: "" });
                setImageFile(null);
              }}
              className="w-3/4 mx-auto py-2 bg-none hover:bg-red-500 border-2 border-red-500 rounded-lg font-medium text-red-500 hover:text-white transition duration-150"
            >
              Batal
            </button>
          )}
        </form>

        {/* list products */}
        <div className="my-12">
          <div id="header" className="flex flex-col w-full gap-3">
            <h2 className="text-2xl font-semibold">List Produk</h2>
            <span className="h-[1px] bg-slate-500 w-full opacity-75"></span>
          </div>
          <ul>
            {products.map((product) => (
              <div key={product.id} className="flex flex-row justify-between p-4 my-4 bg-blue-200 border-2 border-blue-500 rounded-lg">
                <div className="flex flex-col gap-1 w-3/4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="h-[1px] bg-slate-500 w-full opacity-75"></span>
                  <p>{product.description}</p>
                  {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="size-16 object-cover" />}
                </div>
                <div className="flex flex-col gap-2 w-fit self-center">
                  <button onClick={() => startEditingProduct(product)} className="px-6 py-1 bg-gray-500 text-white rounded">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteProduct(product.id)} className="px-6 py-1 bg-red-500 text-white rounded">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
