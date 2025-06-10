import ProductAroCard from "./productAroCard";
import React from "react";

const ListProduct = ({ deleteRingLenses, update, loading, aroLens }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}

        {aroLens?.length > 0 ? (
          aroLens.map((aroLen) => (
            <ProductAroCard
              key={aroLen._id}
              aroLen={aroLen}
              deleteRingLenses={deleteRingLenses}
              update={update}
            />
          ))
        ) : (
          !loading && <p className="text-center text-gray-500">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ListProduct;