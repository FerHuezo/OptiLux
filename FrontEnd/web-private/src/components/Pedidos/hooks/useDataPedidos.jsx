import { useEffect, useState } from "react";

const useDataPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/orders");
        const data = await res.json();
        setPedidos(data);
      } catch (err) {
        console.error("Error cargando pedidos:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPedidos();
  }, []);

  return { pedidos, isLoading };
};

export default useDataPedidos;
