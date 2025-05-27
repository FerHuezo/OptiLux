import AumentoCard from "./productAumentoCard";
import React from "react";

const ListProduct = ({ deleteIncreaseLenses, update, loading, increaseLens }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}

        {increaseLens?.length > 0 ? (
          increaseLens.map((increaseLen) => (
            <AumentoCard
              key={increaseLen._id}
              increaseLen={increaseLen}
              deleteIncreaseLenses={deleteIncreaseLenses}
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
