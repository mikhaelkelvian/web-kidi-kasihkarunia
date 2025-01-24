import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import axios from "axios";
import { CiLogout } from "react-icons/ci";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", description: "", price: "", imageUrl: "", category: "" });
  const [imageFile, setImageFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  const navigate = useNavigate();

  // imageBB Api Key
  const imgBBKey = import.meta.env.VITE_IMGBB_API_KEY;

  const handleLogout = async () => {
    try {
      navigate("/");
      await signOut(auth);
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

  try {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${imgBBKey}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data.data.url;
  } catch (error) {
    console.error("Image upload error:", error);
    alert("Gagal mengunggah gambar");
    return null;
  }
  };

  // Add Project
  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const uploadedImageUrl = await handleImageUpload();
      const productData = { ...newProduct, imageUrl: uploadedImageUrl };
      const docRef = await addDoc(collection(db, "products"), productData);

      console.log("Document written with ID: ", docRef.id); // Debugging
      setProducts([...products, { id: docRef.id, ...productData }]);
      setNewProduct({ name: "", description: "", price: "", imageUrl: "", category: "" });
      setImageFile(null);
    } catch (error) {
      console.error("Error adding document: ", error); // Debugging
    } finally {
      alert("Berhasil menambahkan produk!");
      setIsLoading(false);
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

  // formatting IDR (not to use yet)
  const formatToRupiah = (value) => {
    const numericValue = value.replace(/\D/g, "");
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(numericValue);
  };

  const handlePriceChange = (e) => {
    const input = e.target.value;
    const formattedPrice = formatToRupiah(input);
    setNewProduct({...newProduct, price: formattedPrice})
  }

  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
      {/* sidebar */}
      <div id="sidebar" className="w-full lg:w-1/3 bg-blue-300 border-b lg:border-r lg:border-b-0 border-blue-500 shadow-lg">
        <div className="flex flex-col mx-10 lg:mx-10 gap-2 py-5 lg:my-40">
          <h2 className="text-2xl lg:text-3xl font-semibold">Apa itu dashboard admin?</h2>
          <span className="h-[1px] bg-slate-500 opacity-75"></span>
          <p className="font-medium text-sm lg:text-base">
            Dashboard admin adalah tempat dimana kamu dapat menambahkan data produk mu secara otomatis dan tentunya cepat. Karena disini kamu hanya perlu memasukkan data-data uang diperlukan untuk menambahkan produk baru.
          </p>
          {/* back to home & logout action */}
          <div className="flex flex-col lg:flex-row gap-3 my-7">
            <a href="/" className="flex flex-row justify-center gap-1 px-4 py-3 bg-blue-500 hover:bg-blue-600 transition duration-200 text-center text-white rounded-lg">
              <IoChevronBack size={25} color="#fff" /> Ke Beranda
            </a>
            {/* logout button */}
            <button onClick={handleLogout} className="flex flex-row justify-center gap-3 px-4 py-3 bg-red-500 hover:bg-red-600 transition duration-200 text-white rounded-lg">
              <CiLogout size={25} color="#fff" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* main dashboard */}
      <div className="px-5 lg:px-14 flex flex-col w-full lg:w-2/3 overflow-auto">
        <h1 className="flex justify-center text-2xl lg:text-4xl font-semibold my-8 lg:my-16">Dashboard Admin</h1>

        {/* form add new product */}
        <form onSubmit={isEditing ? handleUpdateProduct : handleAddProduct} className="flex flex-col space-y-5">
          <h1 className="text-2xl font-medium">{isEditing ? "Edit Produk" : "Tambahkan Produk Baru Anda"}</h1>
          {/* input gambar produk */}
          <input type="file" onChange={(e) => setImageFile(e.target.files[0])} className="w-full p-2 border-2 rounded border-slate-400" required />
          <input type="text" placeholder="Nama" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} className="w-full p-2 border rounded" required />
          <select
            name="category-option"
            id="category-option"
            value={newProduct.category} // Bind value ke state
            onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} // Update state
            required
          >
            <option value="Percetakan">Percetakan</option>
            <option value="Souvenir">Souvenir</option>
            <option value="Advertising">Advertising</option>
            <option value="Packaging">Packaging</option>
          </select>
          <textarea rows={4} type="text" placeholder="Deskripsi" value={newProduct.description} onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })} className="w-full p-2 border rounded" required />
          <button type="submit" className={`w-3/4 mx-auto py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={isLoading}>
            {isLoading ? "Loading..." : isEditing ? "Perbarui Produk" : "Tambah Produk"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setNewProduct({ name: "", description: "", price: "0", imageUrl: "" });
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
            <h2 className="text-xl lg:text-2xl font-semibold">List Produk</h2>
            <span className="h-[1px] bg-slate-500 w-full opacity-75 mb-3"></span>
          </div>
          {/* product item */}
          <ul className="flex flex-col space-y-4">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col lg:flex-row justify-between p-4 bg-blue-200 border-2 border-blue-500 rounded-lg">
                <div className="flex flex-col gap-1 w-full lg:w-3/4">
                  <div className="flex flex-row gap-2 lg:gap-4 mx-1 lg:mx-2">
                    <h3 className="text-lg lg:text-2xl font-semibold self-center">{product.name}</h3>
                    {product.category && <span className="bg-blue-500 h-fit self-center px-3 rounded-xl text-sm font-semibold text-slate-200">{product.category}</span>}
                  </div>
                  <span className="h-[1px] bg-slate-500 w-full opacity-75"></span>
                  <p className="mx-2">{product.description}</p>
                  {product.imageUrl && <img src={product.imageUrl} alt={product.name} className="mt-2 h-32 lg:h-48 object-cover rounded" />}
                </div>
                <div className="flex flex-row lg:flex-col gap-2 mt-3 lg:mt-0">
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
