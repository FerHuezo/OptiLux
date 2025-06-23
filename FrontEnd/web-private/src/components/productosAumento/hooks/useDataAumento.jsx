import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import { data } from "react-router";

const useDataAumento = ()=>{
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:4000/api/increaseLenses";
    const [id, setId] = useState("");
    const [increaseLevel, setIncreaseLevel] = useState("");
    const [price, setPrice] = useState("");
    const [increaseLens, setIncreaseLens] = useState([]);
    const [loading, setLoading] = useState(true);

    const cleanData = () => {
        setId("");
        setIncreaseLevel("");
        setPrice("");
    }

    
    const fetchAumento = async() =>{
      
        const response = await fetch(API);
        if(!response.ok){
            throw new Error("hubo un error al obtener los lentes importados")
        }

        const data = await response.json();
        setIncreaseLens(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchAumento();
      }, []);

    const saveIncreaseLenses = async(e) =>{
        e.preventDefault();

        const newIncreaseLenses = {
            increaseLevel: increaseLevel,
            price: Number(price),
            
        };

        console.log("Enviando:", newIncreaseLenses);
        if (!increaseLevel || !price ) {
         toast.error("Todos los campos son obligatorios");
        return;
}

        const response = await fetch(API,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(newIncreaseLenses),
        });

        if(!response.ok){
                throw new Error("hubo un error al registrar  el aumento")
        }

        const data = await response.json();
        toast.success("nuevos aumento registrado")
        setIncreaseLens(data);
        fetchAumento();
        setIncreaseLevel("");
        setPrice("");
    };

    const deleteIncreaseLenses = async(id)=>{
        const response = await fetch(`${API}/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("hubo un error al eliminar el aumento")
        }

        toast.success("Aumento eliminados")
        fetchAumento();
    };

    const update = async(dataIncreaseLens)=>{
        setId(dataIncreaseLens._id);
        setIncreaseLevel(dataIncreaseLens.increase);
        setPrice(dataIncreaseLens.price);
        setActiveTab("form");
    };

    const handleEdit = async (e) => {
        e.preventDefault();
    
        try {
          const editIncreaseLens = {
            increaseLens: increaseLens,
            price: price,
          };
          const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editIncreaseLens),
          });
    
          if (!response.ok) {
            throw new Error("Error al actualizar");
          }
    
          const data = await response.json();
          toast.success('Lentes Actualizados');
          setIncreaseLens(data);
          setId(""); 
         
          fetchAumento();
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
        increaseLevel,
        setIncreaseLevel,
        increaseLens,
        setIncreaseLens,
        price,
        setPrice,
        loading,
        setLoading,
        cleanData,
        saveIncreaseLenses,
        fetchAumento,
        deleteIncreaseLenses,
        update,
        handleEdit,
      };
};

export default useDataAumento;