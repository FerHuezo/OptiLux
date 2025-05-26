import React from "react";

const productCard = ({})=>{

    return(
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Marca:{" "}
            <span className="text-xl font-medium text-gray-700">
              {brand.name}{" "}
            </span>
          </h2>
  
                  <button 
          label={"Eliminar"}
          actionButton={() => deleteBrand(brand._id)}
          colorClass={"danger"}
          />
                  <button 
          label={"Editar Información"}
          actionButton={() => updateBrands(brand)}
          colorClass={"warning"}
          />
        </div>
      </div>
    );
}

export default productCard;