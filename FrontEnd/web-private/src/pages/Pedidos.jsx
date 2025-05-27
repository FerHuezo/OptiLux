import React from "react";
import { motion } from "framer-motion";
import ListPedidos from "../components/Pedidos/ListaPedidos";
import BlurText from "../components/BlurTitle";
import Sidebar from "../components/SideBar/SideBar";

const Pedidos = () => {

  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 overflow-hidden mr-80">
          <Sidebar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-6xl p-10 mx-auto text-center"
      >
          <BlurText
            text="Listado de pedidos"
            delay={300}
            animateBy="words"
            direction="bottom"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl mt-4 mb-5"
          />        
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
          <ListPedidos />
        </div>
      </motion.div>
    </div>
  );
};

export default Pedidos;
