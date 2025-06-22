import Sales from "../models/salesModel.js";
import requestMessages from "../utils/strings.js";
import mongoose from "mongoose";

const salesController = {};

salesController.getSales = async (req, res) => {
  try {
    const sales = await Sales.find().populate("idOrder");
    res.status(requestMessages.SUCCESS.code).json(sales);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

salesController.getSaleByOrderId = async (req, res) => {
  try {
    console.log("ID recibido en params:", req.params.orderId);

    const sale = await Sales.findOne({ idOrder: req.params.orderId }).populate("idOrder");
    console.log("Resultado de la búsqueda:", sale);

    if (!sale) {
      return res.status(404).json({ message: "Venta no encontrada" });
    }

    res.status(200).json(sale);
  } catch (error) {
    console.error("Error en getSaleByOrderId:", error);
    res.status(500).json({ message: "Error al obtener la venta", error });
  }
};


salesController.createSale = async (req, res) => {
  try {
    const newSale = new Sales(req.body);
    const savedSale = await newSale.save();
    res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message, sale: savedSale });
  } catch (error) {
    res.status(requestMessages.BAD_REQUEST.code).json({ message: requestMessages.BAD_REQUEST.message });
  }
};

salesController.updateSale = async (req, res) => {
  try {
    const updatedSale = await Sales.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedSale) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }
    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message, sale: updatedSale });
  } catch (error) {
    res.status(requestMessages.BAD_REQUEST.code).json({ message: requestMessages.BAD_REQUEST.message });
  }
};

salesController.deleteSale = async (req, res) => {
  try {
    const deletedSale = await Sales.findByIdAndDelete(req.params.id);
    if (!deletedSale) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }
    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

export default salesController;