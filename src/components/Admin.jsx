import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import axios from "axios";

const Admin = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", description: "", link: "", imageUrl: "" });
  const [imageFile, setImageFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const imgBBKey = "34554820ac53ecd3a3cd2df2361c9cbf"; // Ganti dengan API Key Anda

  // Fetch Projects
  try {
    useEffect(() => {
      const fetchProjects = async () => {
        const querySnapshot = await getDocs(collection(db, "projects")); // error
        setProjects(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      };
      fetchProjects();
    }, []);
  } catch(error) {
    console.error("Error", error)
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
  const handleAddProject = async (e) => {
    e.preventDefault();
  
    try {
      const uploadedImageUrl = await handleImageUpload();
      const projectData = { ...newProject, imageUrl: uploadedImageUrl };
      const docRef = await addDoc(collection(db, "projects"), projectData);
  
      console.log("Document written with ID: ", docRef.id); // Debugging
      setProjects([...projects, { id: docRef.id, ...projectData }]);
      setNewProject({ name: "", description: "", link: "", imageUrl: "" });
      setImageFile(null);
    } catch (error) {
      console.error("Error adding document: ", error); // Debugging
    }
  };

  // Update Project
  const handleUpdateProject = async (e) => {
    e.preventDefault();

    const uploadedImageUrl = imageFile ? await handleImageUpload() : newProject.imageUrl;
    const updatedProject = { ...newProject, imageUrl: uploadedImageUrl };

    const projectRef = doc(db, "projects", currentProjectId);
    await updateDoc(projectRef, updatedProject);

    setProjects(projects.map((project) => (project.id === currentProjectId ? { id: currentProjectId, ...updatedProject } : project)));
    setIsEditing(false);
    setNewProject({ name: "", description: "", link: "", imageUrl: "" });
    setImageFile(null);
    setCurrentProjectId(null);
  };

  // Delete Project
  const handleDeleteProject = async (id) => {
    await deleteDoc(doc(db, "projects", id));
    setProjects(projects.filter((project) => project.id !== id));
  };

  // Start Editing Project
  const startEditingProject = (project) => {
    setIsEditing(true);
    setNewProject(project);
    setCurrentProjectId(project.id);
  };

  return (
    <div className="p-8">
      <h1 className="flex justify-center m-auto text-3xl mb-10">Dashboard Admin</h1>
      <div>
        <form onSubmit={isEditing ? handleUpdateProject : handleAddProject} className="space-y-4">
          <h1 className="text-2xl">{isEditing ? "Edit Produk" : "Tambahkan Produk Baru"}</h1>
          <input type="text" placeholder="Nama" value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Deskripsi" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} className="w-full p-2 border rounded" required />
          <input type="text" placeholder="Harga Satuan" value={newProject.link} onChange={(e) => setNewProject({ ...newProject, link: e.target.value })} className="w-full p-2 border rounded" />
          <input type="file" onChange={(e) => setImageFile(e.target.files[0])} className="w-full p-2 border rounded" />
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
            {isEditing ? "Update Project" : "Add Project"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setNewProject({ name: "", description: "", link: "", imageUrl: "" });
                setImageFile(null);
              }}
              className="px-4 py-2 bg-gray-500 text-white rounded ml-2"
            >
              Cancel
            </button>
          )}
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.imageUrl && <img src={project.imageUrl} alt={project.name} className="h-16 w-16 object-cover" />}
                </div>
                <div>
                  <button onClick={() => startEditingProject(project)} className="px-4 py-1 bg-yellow-500 text-white rounded mr-2">
                    Edit
                  </button>
                  <button onClick={() => handleDeleteProject(project.id)} className="px-4 py-1 bg-red-500 text-white rounded">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
