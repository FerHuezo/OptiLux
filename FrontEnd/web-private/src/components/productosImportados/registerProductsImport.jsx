import React from "react";

const RegisterImport = ({
  setColor, color,
  setPrice, price,
  setAmount, amount,
  setBrand, brand,
  saveImportLenses,
  id, handleEdit,
  setIncreaseLenses, increaseLenses,
  image, setImage
}) => {
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  return (
    <div className="bg-white bg-opacity-70 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-gray-200 mt-6">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-slate-800 tracking-tight">
        {id ? "Editar Producto" : "Registrar Nuevo Producto"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna izquierda */}
        <div className="space-y-6">
          <InputText
            label="Color"
            placeholder="Ej: Azul, Rojo..."
            value={color}
            onChange={setColor}
          />

          <InputText
            label="Aumento"
            placeholder="Ej: 1.4, -0.25..."
            value={increaseLenses}
            onChange={setIncreaseLenses}
          />

          <InputText
            label="Marca"
            placeholder="Ej: Luxottica, Ray-Ban..."
            value={brand}
            onChange={setBrand}
          />
        </div>

        {/* Columna derecha */}
        <div className="space-y-6">
          <InputNumber
            label="Cantidad"
            placeholder="Ej: 1, 5, 10"
            value={amount}
            onChange={setAmount}
            min={1}
          />

          <InputNumber
            label="Precio"
            placeholder="Ej: 25.99"
            value={price}
            onChange={setPrice}
            min={0}
            step={0.01}
          />

          <div>
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
      </div>

      <div className="mt-10 flex justify-center">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-8 rounded-xl shadow-md transition"
          onClick={(e) => id ? handleEdit(e) : saveImportLenses(e)}
        >
          {id ? "Editar" : "Guardar"}
        </button>
      </div>
    </div>
  );
};

// Componentes reutilizables
const InputText = ({ label, placeholder, value, onChange }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>
);

const InputNumber = ({ label, placeholder, value, onChange, min = 0, step = 1 }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <input
      type="number"
      placeholder={placeholder}
      min={min}
      step={step}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
    />
  </div>
);

export default RegisterImport;
