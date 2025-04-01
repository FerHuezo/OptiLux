import express, { Router } from "express";
import clientsController from "../controllers/clientsController.js";

const router = express.Router();

router
.route("/")
.get(clientsController.getClients)

export default router;
