import express, { Router } from "express";
import importLensesController from "../controllers/importLensesController.js";

const router = express.Router();

router
.route("/")
.get(importLensesController.getLenses)

export default router;
