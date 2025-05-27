import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import { data } from "react-router";

const useDataFiltro = ()=>{
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:4000/api/filters";
    const [id, setId] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [price, setPrice] = useState("");
    const [filterLens, setFilterLens] = useState([]);
    const [loading, setLoading] = useState(true);

    const cleanData = () => {
        setId("");
        setTypeFilter("");
        setPrice("");
    }

    
    const fetchFiltro = async() =>{
      
        const response = await fetch(API);
        if(!response.ok){
            throw new Error("hubo un error al obtener los lentes importados")
        }

        const data = await response.json();
        setFilterLens(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchFiltro();
      }, []);

    const saveFilterLenses = async(e) =>{
        e.preventDefault();

        const newFilterLenses = {
            typeFilter: typeFilter,
            price: Number(price),
            
        };

        console.log("Enviando:", newFilterLenses);
        if (!typeFilter || !price ) {
         toast.error("Todos los campos son obligatorios");
        return;
}

        const response = await fetch(API,{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(newFilterLenses),
        });

        if(!response.ok){
                throw new Error("hubo un error al registrar los lentes importados")
        }

        const data = await response.json();
        toast.success("nuevos lentes registrados exitosamente")
        setFilterLens(data);
        fetchFiltro();
        setTypeFilter("");
        setPrice("");
    };

    const deleteFilterLenses = async(id)=>{
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
        fetchFiltro();
    };

    const update = async(dataFilterLens)=>{
        setId(dataFilterLens._id);
        setTypeFilter(dataFilterLens.filter);
        setPrice(dataFilterLens.price);
        setActiveTab("form");
    };

    const handleEdit = async (e) => {
        e.preventDefault();
    
        try {
          const editFilterLens = {
            typeFilter: typeFilter,
            price: price,
          };
          const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editFilterLens),
          });
    
          if (!response.ok) {
            throw new Error("Error al actualizar la marca");
          }
    
          const data = await response.json();
          toast.success('Lentes Actualizados');
          setFilterLens(data);
          setId(""); 
         
          fetchFiltro();
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
        typeFilter,
        setTypeFilter,
        price,
        setPrice,
        filterLens,
        setFilterLens,
        loading,
        setLoading,
        cleanData,
        saveFilterLenses,
        fetchFiltro,
        deleteFilterLenses,
        update,
        handleEdit,
      };
};

export default useDataFiltro;