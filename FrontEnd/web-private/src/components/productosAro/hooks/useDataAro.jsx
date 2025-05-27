import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import { data } from "react-router";

const useDataAro = ()=>{
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:4000/api/lensRing";
    const [id, setId] = useState("");
    const [typeLens, setTypeLens] = useState("");
    const [price, setPrice] = useState("");
    const [aroLens, setAroLens] = useState([]);
    const [loading, setLoading] = useState(true);

    const cleanData = () => {
        setId("");
        setTypeLens("");
        setPrice("");
    }

    
    const fetchAros = async() =>{
      
        const response = await fetch(API);
        if(!response.ok){
            throw new Error("hubo un error al obtener los lentes importados")
        }

        const data = await response.json();
        setAroLens(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchAros();
      }, []);

    const saveRingLenses = async(e) =>{
        e.preventDefault();

        const newRingLenses = {
            typeLens: typeLens,
            price: Number(price),
            
        };

        console.log("Enviando:", newRingLenses);
        if (!typeLens || !price ) {
         toast.error("Todos los campos son obligatorios");
        return;
}

        const response = await fetch(API,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(newRingLenses),
        });

        if(!response.ok){
                throw new Error("hubo un error al registrar  el aro")
        }

        const data = await response.json();
        toast.success("nuevos aumento registrado")
        setAroLens(data);
        fetchAros();
        setTypeLens("");
        setPrice("");
    };

    const deleteRingLenses = async(id)=>{
        const response = await fetch(`${API}/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error("hubo un error al eliminar el aro")
        }

        toast.success("Aro eliminado")
        fetchAros();
    };

    const update = async(dataRingLens)=>{
        setId(dataRingLens._id);
        setTypeLens(dataRingLens.typelens);
        setPrice(dataRingLens.price);
        setActiveTab("form");
    };

    const handleEdit = async (e) => {
        e.preventDefault();
    
        try {
          const editRingLens = {
            typeLens: typeLens,
            price: price,
          };
          const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editRingLens),
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
        typeLens,
        setTypeLens,
        aroLens,
        setAroLens,
        price,
        setPrice,
        loading,
        setLoading,
        cleanData,
        saveRingLenses,
        fetchAros,
        deleteRingLenses,
        update,
        handleEdit,
      };
};

export default useDataAro;