import { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import ListadoPedidos from "../../components/Pedidos/ListaPedidos";

const PaginaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/orders")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener los pedidos");
        return res.json();
      })
      .then((data) => {
        setPedidos(data);
        console.log(data)
        setLoading(false);
      })
      .catch((err) => { 
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SideBar />
      <div className="flex flex-col w-full p-8 bg-white text-gray-800">
        <h1 className="text-2xl font-semibold mb-4">Bienvenido al menú de empleado</h1>
        <h2 className="text-xl font-medium mb-6">Pedidos activos</h2>

        {loading && <p>Cargando pedidos...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {!loading && !error && (
          <ListadoPedidos pedidos={pedidos} />
        )}
      </div>
    </>
  );
};

export default PaginaPedidos;
