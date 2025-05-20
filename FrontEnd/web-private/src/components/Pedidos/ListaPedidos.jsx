import PedidoCard from "./CardPedidos";

const ListadoPedidos = ({ pedidos }) => {
  return (
    <div className="flex flex-col gap-6">
      {pedidos.map((pedido) => (
        <PedidoCard key={pedido.id} pedido={pedido} />
      ))}
    </div>
  );
};

export default ListadoPedidos;
