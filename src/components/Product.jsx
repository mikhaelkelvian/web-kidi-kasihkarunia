import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Products = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched Projects: ", data); // Debugging
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects: ", error); // Debugging
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="project" className="p-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 ? (
            <p>No products available.</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="p-4 bg-gray-200 rounded shadow-md">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
                {project.imageUrl && <img src={project.imageUrl} alt={project.name} className="h-32 w-full object-cover mb-2" />}
                <a href={project.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  View Project
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