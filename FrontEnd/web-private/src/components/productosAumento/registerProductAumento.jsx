import React from "react";

const RegisterAumento = ({setIncreaseLevel, increaseLevel, setPrice, price, saveIncreaseLenses, id, handleEdit}) =>{

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mt-6">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
    {id ? "Editar Producto" : "Registrar Nuevo Producto"}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">nivel de aumento</label>
        <input
          type="number"
          placeholder="Aumento"
          className="w-full mt-1 p-2 border rounded-lg bg-gray-50" step="0.01" min="-0.25" max = "20"
          value={increaseLevel}
          onChange={(e) => setIncreaseLevel(e.target.value)}
        />
      </div>
    </div>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Precio</label>
        <input
          type="number"
          placeholder="Precio"
          className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
    </div>
  </div>

  <div className="mt-6">
    <button
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition" style={{ marginLeft: "39%" }}
      onClick={(e) => id ? handleEdit(e) : saveIncreaseLenses(e)}
    >
      {id ? "Editar" : "Guardar"}
    </button>
  </div>
</div>
    );
}

export default RegisterAumento;