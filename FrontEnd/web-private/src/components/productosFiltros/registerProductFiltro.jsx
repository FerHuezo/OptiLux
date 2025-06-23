import React from "react";

const RegisterFiltro = ({setTypeFilter, typeFilter, setPrice, price, saveFilterLenses, id, handleEdit, image, setImage, }) =>{

    const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mt-6">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
    {id ? "Editar Producto" : "Registrar Nuevo Producto"}
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Nombre</label>
        <input
          type="text"
          placeholder="Ej: Filtro azul, Filtro UV"
          className="w-full mt-1 p-2 border rounded-lg bg-gray-50"
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
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

    <div className="space-y-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">Imagen del Producto</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full p-2 border rounded-lg bg-white shadow-sm text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition"
      />
      {!id && !image && (
        <p className="text-sm text-red-500 mt-1">* La imagen es obligatoria.</p>
      )}
      {image && (
        <div className="mt-3">
          <p className="text-sm text-gray-700 mb-1">Vista previa:</p>
          <img
            src={URL.createObjectURL(image)}
            alt="Vista previa"
            className="w-32 h-32 object-cover rounded-lg border border-gray-300 shadow-sm"
          />
        </div>  
      )}
    </div>
  </div>

  <div className="mt-6">
    <button
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition" style={{ marginLeft: "39%" }}
      onClick={(e) => id ? handleEdit(e) : saveFilterLenses(e)}
    >
      {id ? "Editar" : "Guardar"}
    </button>
  </div>
</div>
    );
}

export default RegisterFiltro;