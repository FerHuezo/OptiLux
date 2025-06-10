import React from "react";
import Sidebar from "../../components/SideBar/SideBar";
import CategorySelector from "../../components/ComboBox/ComboBox";

const RegisterImport = ({setColor, color, setPrice, price, setAmount, amount, setBrand, brand, saveImportLenses, id, handleEdit, setIncreaseLenses, increaseLenses }) =>{

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mt-6">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
    {id ? "Editar Producto" : "Registrar Nuevo Producto"}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Color</label>
        <select
          className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="" selected >Selecciona una opición</option>
          <option value="rojo">Rojo</option>
          <option value="verde">Verde</option>
          <option value="azul">Azul</option>
        </select>
      </div>

        <div>
        <label className="block text-sm font-medium text-gray-700">Aumento</label>
        <select
          className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
          value={increaseLenses}
          onChange={(e) => setIncreaseLenses(e.target.value)}
        >
          <option value="" selected >Selecciona una opición</option>
          <option value="bajo">1.4</option>
          <option value="masBajo">1</option>
          <option value="superBajo">-0.20</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Marca</label>
        <select
          className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="" selected >Selecciona una opición</option>
          <option value="1">Marca 1</option>
          <option value="2">Marca 2</option>
          <option value="3">Marca 3</option>
        </select>
      </div>
      
    </div>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Cantidad</label>
        <select
          className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        >
          <option value="" selected >Selecciona la cantidad</option>
          {[1, 2, 3, 4, 5].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>

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
      onClick={(e) => id ? handleEdit(e) : saveImportLenses(e)}
    >
      {id ? "Editar" : "Guardar"}
    </button>
  </div>
</div>
    );
}

export default RegisterImport;