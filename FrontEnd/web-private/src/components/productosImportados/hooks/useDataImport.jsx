import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import { data } from "react-router";

const useDataImport = ()=>{
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:4000/api/imported";
    const [id, setId] = useState("");
    const [color, setColor] = useState("");
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState("");
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState(null);
    const [increaseLenses, setIncreaseLenses] = useState("");
    const [importLens, setImportLens] = useState([]);
    const [loading, setLoading] = useState(true);

    const cleanData = () => {
        setId("");
        setColor("");
        setPrice("");
        setAmount("");
        setBrand("");
        setIncreaseLenses("");
    }

    
    const fetchImportLens = async() =>{
      
        const response = await fetch(API);
        if(!response.ok){
            throw new Error("hubo un error al obtener los lentes importados")
        }

        const data = await response.json();
        setImportLens(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchImportLens();
      }, []);

const saveImportLenses = async (e) => {
  e.preventDefault();

  if (!color || !increaseLenses || !brand || !price || !amount || !image) {
    toast.error("Todos los campos son obligatorios, incluyendo la imagen.");
    return;
  }

  const formData = new FormData();
  formData.append("color", color);
  formData.append("price", price);
  formData.append("amount", amount);
  formData.append("increaseLenses", increaseLenses);
  formData.append("brand", brand);
  formData.append("image", image); // Aquí va la imagen

  try {
    const response = await fetch(API, {
      method: "POST",
      body: formData,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error al registrar los lentes importados");
    }

    const data = await response.json();
    toast.success("Nuevos lentes registrados exitosamente");
    fetchImportLens();
    cleanData();
    setImage(null);
  } catch (error) {
    toast.error("Error al registrar el producto");
  }
};

    const deleteImportLenses = async(id)=>{
        const response = await fetch(`${API}/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("hubo un error al eliminar los lentes")
        }

        toast.success("lentes eliminados")
        fetchImportLens();
    };

    const update = async(dataImportLens)=>{
        setId(dataImportLens._id);
        setColor(dataImportLens.color);
        setPrice(dataImportLens.price);
        setAmount(dataImportLens.amount);
        setIncreaseLenses(dataImportLens.increaseLenses);
        setBrand(dataImportLens.brand);
        setActiveTab("form");
    };

    const handleEdit = async (e) => {
        e.preventDefault();
    
        try {
          const editImportLens = {
            color: color,
            price: price,
            amount : amount,
            setIncreaseLenses: increaseLenses,
            brand : brand,
          };
          const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editImportLens),
          });
    
          if (!response.ok) {
            throw new Error("Error al actualizar la marca");
          }
    
          const data = await response.json();
          toast.success('Lentes Actualizados');
          setImportLens(data);
          setId(""); 
         
          fetchImportLens();
        } catch (error) {
          console.error("Error al editar los lentes:", error);
          alert("Error al editar los lentes");
        }
      };
    
      return{
        activeTab,
        setActiveTab,
        id,
        setId,
        color,
        setColor,
        price,
        setPrice,
        amount,
        setAmount,
        brand,
        setBrand,
        importLens,
        setImportLens,
        loading,
        setLoading,
        image,
        setImage,
        fetchImportLens,
        saveImportLenses,
        deleteImportLenses,
        update,
        setIncreaseLenses,
        increaseLenses,
        handleEdit,
        cleanData
      };
};

export default useDataImport;