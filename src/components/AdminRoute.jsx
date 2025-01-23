import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { db, auth } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

function AdminRoute({ children }) {
  const { currentUser } = useAuth();
  const [isAdmin, setIsAdmin] = useState(null); // null: loading, true: admin, false: not admin

  useEffect(() => {
    const fetchRole = async () => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setIsAdmin(userData.role === "admin");
          } else {
            setIsAdmin(false);
          }
        } catch (error) {
          console.error("Error verifying admin role:", error);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
    };

    fetchRole();
  }, [currentUser]);

  if (isAdmin === null) {
    return <div>Loading...</div>; // Optional: Better UX while checking admin role
  }

  if (!currentUser || !isAdmin) {
    // Force logout if not admin
    if (currentUser) {
      auth.signOut();
    }
    return <Navigate to="/login-admin" />;
  }

  return children;
}

export default AdminRoute;