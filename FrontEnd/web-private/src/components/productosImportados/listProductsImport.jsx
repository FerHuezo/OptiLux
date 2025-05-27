import ProductCard from "./productImportCard";
import React from "react";

const ListProduct = ({ deleteImportLenses, update, loading, importLens }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}

        {importLens?.length > 0 ? (
          importLens.map((importLen) => (
            <ProductCard
              key={importLen._id}
              importLen={importLen}
              deleteImportLenses={deleteImportLenses}
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
