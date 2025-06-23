import React,{useState, useEffect} from "react";
import toast from "react-hot-toast";



const useDataTerminal = () => {
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:4000/api/terminalLenses";
    const [id, setId] = useState("");
    const[image, setImage] = useState(null);
    const [typeTerminals, setTypeTerminals] = useState("");
    const [price, setPrice] = useState("");
    const [terminalLensesA, setTerminalLensesA] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const cleanData = () => {
        setId("");
        setTypeTerminals("");
        setPrice("");
    }

    const fetchTerminalLenses = async () => {
        try {

        const response = await fetch(API);
        if (!response.ok) {
            throw new Error("Hubo un error al obtener los lentes terminales");
        }

        const data = await response.json();
        setTerminalLensesA(data);
        setLoading(false);

        } catch (error) {
            console.error("Error al obtener los lentes terminales:", error);
            toast.error("Error al obtener los lentes terminales");
            setLoading(false);
        }

    };

    useEffect(() => {
        fetchTerminalLenses();
    }, []);

    const saveTerminalLenses = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("typeTerminals", typeTerminals);
        formData.append("price", price);
        formData.append("image", image); 

        try {
          const response = await fetch(API, {
            method: "POST",
            body: formData,
            credentials: "include",
          });

          if (!response.ok) {
            throw new Error("Error al registrar la terminal");
          }

          const data = await response.json();
          toast.success("Nueva terminal registrada exitosamente");
          fetchTerminalLenses();
          cleanData();
          setImage(null);
        } catch (error) {
          toast.error("Error al registrar el producto");
        }
    };

    const deleteTerminalLenses = async (id) => {
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
        });

        if (!response.ok) {
            toast.error("Error al eliminar el producto");
            return;
        }
        toast.success("Producto eliminado correctamente");
        fetchTerminalLenses();
    }

    const update = async(dataTerminalLens)=>{
    setId(dataTerminalLens._id);
    setTypeTerminals(dataTerminalLens.typeTerminals);
    setPrice(dataTerminalLens.price);
    setActiveTab("form");
    };
    

    const handleEdit = async (e) => {
        e.preventDefault();

        try {


        const updatedTerminalLenses = {
            typeTerminals: typeTerminals,
            price: Number(price),
        };

        if (!typeTerminals || !price) {
            toast.error("Todos los campos son obligatorios");
            return;
        }

        const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(updatedTerminalLenses),
        });

        if (!response.ok) {
            toast.error("Error al actualizar el producto");
            return;
        }

        const data = await response.json();
        toast.success("Producto actualizado correctamente");
        setTerminalLensesA(data);
        setId("");
        fetchTerminalLenses();

        } catch (error) {
            console.error("Error al editar el producto:", error);
            toast.error("Error al editar el producto");
        }
        
        
    };

    return {
        activeTab,
        setActiveTab,
        id,
        image,
        setImage,
        setId,
        typeTerminals,
        setTypeTerminals,
        price,
        setPrice,
        terminalLensesA,
        setTerminalLensesA,
        loading,
        cleanData,
        saveTerminalLenses,
        deleteTerminalLenses,
        update,
        handleEdit
    };
}; 

export default useDataTerminal;                                                                                                          