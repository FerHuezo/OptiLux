import express from 'express';
import salesController from '../controllers/salesController.js';


const router = express.Router();

router
.route("/")
.post(salesController.createSale)
.get(salesController.getSales)

router
.route("/:id")
.put(salesController.updateSale)
.delete(salesController.deleteSale)

router
.route("/order/:orderId")
.get(salesController.getSaleByOrderId)
export default router;  