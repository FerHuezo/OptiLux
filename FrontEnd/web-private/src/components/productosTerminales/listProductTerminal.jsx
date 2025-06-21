import React from "react";
import ProductTerminalCard from "./productTerminalCard";

const ListProductTerminal = ({ deleteTerminalLenses, update, loading, terminalLensesA }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold underline text-center">
        Listado de Productos
      </h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}

        {terminalLensesA?.length > 0 ? (
          terminalLensesA.map((terminalLen) => (
            <ProductTerminalCard
              key={terminalLen._id}
              terminalLen={terminalLen}
              deleteTerminalLenses={deleteTerminalLenses}
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

export default ListProductTerminal;
