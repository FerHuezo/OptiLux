import { useEffect, useState } from "react";

const useDataPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/orders");
        console.log("Respuesta de la API:", res); // 💡 Agrega este log
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
    
        const data = await res.json();
        console.log("Datos recibidos:", data); // 💡 Otro log para ver la estructura
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
