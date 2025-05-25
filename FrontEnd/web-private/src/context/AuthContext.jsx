import React from "react";
import { createContext, useContext, useState, useEffect } from "react";


const SERVER_URL = "http://localhost:4000/api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authCokie, setAuthCokie] = useState(null);

const Login = async (email, password) => {
  try {
    const response = await fetch(`${SERVER_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json(); 

    if (!response.ok) {
      throw new Error(data.message || "Error en la autenticación");
    }

    localStorage.setItem("authToken", data.token);
    localStorage.setItem("user", JSON.stringify({ email }));
    setAuthCokie(data.token);
    setUser({ email });

    return { success: true, message: data.message };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

    const logout = async () => {

    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setAuthCokie(null);
    setUser(null);
  };

  // En useEffect
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const savedUser = localStorage.getItem("user");
    if (token) {
      setAuthCokie(token);
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, Login, logout, authCokie, setAuthCokie }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
