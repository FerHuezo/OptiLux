import { useContext } from "react";
import { CartContext } from "./useCartContext";

export const useCart = () => useContext(CartContext);
