import FiltroCard from "./productFiltroCard";
import React from "react";

const ListProduct = ({ deleteFilterLenses, update, loading, filterLens }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}

        {filterLens?.length > 0 ? (
          filterLens.map((filterLen) => (
            <FiltroCard
              key={filterLen._id}
              filterLen={filterLen}
              deleteFilterLenses={deleteFilterLenses}
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
