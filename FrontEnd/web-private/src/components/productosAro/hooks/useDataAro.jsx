import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import { data } from "react-router";

const useDataAro = ()=>{
  
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:4000/api/lensRing";
    const [id, setId] = useState("");
    const [typeLens, setTypeLens] = useState("");
    const [image, setImage] = useState(null);
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

        const formData = new FormData();
        formData.append("typeLens", typeLens);
        formData.append("price", price);
        formData.append("image", image); 

        try {
          const response = await fetch(API, {
            method: "POST",
            body: formData,
            credentials: "include",
          });

          if (!response.ok) {
            throw new Error("Error al registrar el Aro");
          }

          const data = await response.json();
          toast.success("Nuevos Aros registrados exitosamente");
          fetchAros();
          cleanData();
          setImage(null);
        } catch (error) {
          toast.error("Error al registrar el producto");
        }
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
          setAroLens(data);
          setId(""); 
         
          fetchAumento();
        } catch (error) {
          console.error("Error al editar los lentes:", error);
          alert("Error al editar los lentes");
        }
      };
    
      return{
        activeTab,
        image,
        setImage,
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