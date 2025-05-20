// controllers/ordersController.js
import Order from "../models/orderModel.js"; // Asegúrate de que el path es correcto
import CustomLenses from "../models/customLensesModel.js";  // Asegúrate de importar el modelo correctamente

ordersController.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("idClient")
      .populate("importLenses.idProduct")
      .populate("customLenses.idProduct");

    res.status(requestMessages.SUCCESS.code).json(orders);
  } catch (error) {
    console.error("Error al obtener las órdenes:", error); // Asegúrate de ver el error real
    res.status(requestMessages.SERVER_ERROR.code).json({
      message: "Error interno del servidor.",
    });
  }
};
