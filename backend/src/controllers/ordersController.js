import Order from "../models/ordersModel.js";
import requestMessages from "../utils/strings.js";

const ordersController = {};


ordersController.getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("idClient")
      .populate({
        path: "products.idProduct",
        options: { strictPopulate: false },
      });

    res.status(requestMessages.SUCCESS.code).json(orders);
  } catch (error) {
    console.error("Error al obtener las órdenes:", error);
    res.status(requestMessages.SERVER_ERROR.code).json({
      message: "Error interno del servidor.",
    });
  }
};

ordersController.postOrder = async (req, res) => {
  try {
    const { idClient, products, total, status } = req.body;

    const newOrder = new Order({
      idClient,
      products,
      total,
      status,
    });

    await newOrder.save();

    res.status(requestMessages.CREATED.code).json({
      message: requestMessages.CREATED.message,
    });
  } catch (error) {
    console.error("POST /orders error:", error); 
    res.status(requestMessages.SERVER_ERROR.code).json({
      message: requestMessages.SERVER_ERROR.message,
    });
  }
};


ordersController.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res
        .status(requestMessages.NOT_FOUND.code)
        .json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.DELETED.code).json({
      message: requestMessages.DELETED.message,
    });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({
      message: requestMessages.SERVER_ERROR.message,
    });
  }
};

ordersController.putOrder = async (req, res) => {
  try {
    const { idClient, products, total, status } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { idClient, products, total, status },
      { new: true }
    );

    if (!updatedOrder) {
      return res
        .status(requestMessages.NOT_FOUND.code)
        .json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.UPDATED.code).json({
      message: requestMessages.UPDATED.message,
    });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({
      message: requestMessages.SERVER_ERROR.message,
    });
  }
};

export default ordersController;
