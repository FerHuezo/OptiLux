import { useState, useEffect } from "react";

const useDataProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:4000/api/imported");

      if (!response.ok) {
        throw new Error("Error al obtener los productos");
      }

      const data = await response.json();
      console.log
      setProducts(data);
    } catch (err) {
      setError(err.message || "Algo salió mal");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useDataProducts;
