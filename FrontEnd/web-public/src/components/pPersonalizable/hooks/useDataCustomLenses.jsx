import React,{useState, useEffect} from "react";
import { use } from "react";
import toast from "react-hot-toast";


const useDataCustomLenses = () => {
    const [activeTab, setActiveTab] = useState("list");
    const API = "http://localhost:4000/api/customLenses";
    const [filter, setFilter] = useState([]);
    const [ring, setRing] = useState([]);
    const [terminals, setTerminals] = useState([]);
    const [customLenses, setCustomLenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPrice   , setTotalPrice] = useState(100);

    const [id, setId] = useState("");
    const [price, setPrice] = useState("");
    const [increase, setIncrease] = useState("");
    const [filterSelected, setFilterSelected] = useState("");
    const [ringSelected, setRingSelected] = useState("");
    const [terminalsSelected, setTerminalsSelected] = useState("");
    const [color , setColor] = useState("");


useEffect(() => {
  const basePrice = 100;

  const findPrice = (arr, selectedId) => {
    const found = arr.find(item => item._id === selectedId);
    return found ? found.price || 0 : 0;
  };

  const total =
    basePrice +
    findPrice(filter, filterSelected) +
    findPrice(ring, ringSelected) +
    findPrice(terminals, terminalsSelected);

  setTotalPrice(total);
  setPrice(total);
}, [filterSelected, ringSelected, terminalsSelected,filter, ring, terminals]);

    

    const fetchCustomLenses = async () => {
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error("Hubo un error al obtener los lentes personalizados");
        }
        const data = await response.json();
        setCustomLenses(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchCustomLenses();
    }, []);

    useEffect(() => {   
            const fetchData = async () => {
      try {
        const  lensFilter = await fetch("http://localhost:4000/api/filters");
        const  lensRing = await fetch("http://localhost:4000/api/lensRing");
        const  lensTerminals = await fetch("http://localhost:4000/api/terminalLenses");

        const dataFilter = await lensFilter.json();
        const dataRing = await lensRing.json();
        const dataTerminals = await lensTerminals.json();

        setFilter(dataFilter);
        setRing(dataRing);
        setTerminals(dataTerminals);
      } catch (error) {
        console.error("Error al cargar datos del catálogo:", error);
      }
    };
    fetchData();

    }, []);

    const saveCustomLenses = async (e) => {
        e.preventDefault();

        const newCustomLenses = {
            increase: Number(increase),
            filter: filterSelected,
            ring: ringSelected,
            terminals: terminalsSelected,
            price: Number(price),
            color: color,
        };

        if (!increase || !filterSelected || !ringSelected || !terminalsSelected || !price || !color) {
            toast.error("Todos los campos son obligatorios");
            return;
        }

        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(newCustomLenses),
        });

        if (!response.ok) {
            toast.error("Error al guardar los lentes personalizados");
            return;
        }

        const data = await response.json();
        toast.success("Lente personalizado registrado")
        setCustomLenses(data);
        fetchCustomLenses();
        setIncrease("");
        setPrice("");
        setColor("");
        setFilterSelected("");
        setRingSelected("");
        setTerminalsSelected("");
    };

    const deleteCustomLenses = async (id) => {
    try {
        const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        });

        if (!response.ok) throw new Error();

        toast.success("Lente personalizado eliminado");
        fetchCustomLenses();
    } catch (err) {
        toast.error("Error al eliminar el lente");
    }
    };

    
    const update = async (dataCustomLenses) => {
        setId(dataCustomLenses._id);
        setColor(dataCustomLenses.color);
        setFilterSelected(dataCustomLenses.filter);
        setIncrease(dataCustomLenses.increase);
        setRingSelected(dataCustomLenses.ring);
        setTerminalsSelected(dataCustomLenses.terminals);
        setPrice(dataCustomLenses.price);
        setActiveTab("form");
    };

    const handleEdit = async (e) => {
        e.preventDefault();

        try {
            const editCustomLenses = {
                increase: Number(increase),
                filter: filterSelected,
                ring: ringSelected,
                terminals: terminalsSelected,
                price: Number(price),
                color: color,
            };

            const response = await fetch(`${API}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(editCustomLenses),
            });

            if (!response.ok) {
                throw new Error("Hubo un error al actualizar el lente personalizado");
            }

            const data = await response.json();
            toast.success("Lente personalizado actualizado")
            setCustomLenses(data);
            setId("");

            fetchCustomLenses();
            
        }catch (error) {
            console.error("Error al editar el lente personalizado:", error);
            toast.error("Error al editar el lente personalizado");
        }
    };

    return {
        activeTab,
        setActiveTab,
        customLenses,
        loading,
        fetchCustomLenses,
        saveCustomLenses,
        deleteCustomLenses,
        update,
        handleEdit,
        increase,
        filter,
        ring,
        terminals,
        increase,
        color,
        setColor,
        setIncrease,
        filterSelected,
        setFilterSelected,
        ringSelected,
        setRingSelected,
        terminalsSelected,
        setTerminalsSelected,
        price, 
        setPrice,
        totalPrice,
        setTotalPrice,
    };
}

export default useDataCustomLenses;