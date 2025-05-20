import express from "express";
import ordersController from "../controllers/ordersController.js";

const router = express.Router();

router
  .route("/")
  .get(ordersController.getOrders)
  .post(ordersController.postOrder);

router
  .route("/:id")
  .put(ordersController.putOrder)
  .delete(ordersController.deleteOrder);

export default router;
