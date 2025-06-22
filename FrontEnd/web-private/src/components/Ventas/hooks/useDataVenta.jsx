import { useState, useEffect } from "react";

const useDataVenta = (orderId) => {
  const [sales, setSales] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!orderId) return; // Evita llamadas si no hay ID

    setLoading(true);
    fetch(`http://localhost:4000/api/sales/order/${orderId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: No se pudo obtener la orden`);
        }
        return response.json();
      })
      .then((data) => {
        setSales(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [orderId]);

  return { sales, loading, error };
};

export default useDataVenta;
