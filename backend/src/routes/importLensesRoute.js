import express, { Router } from "express";
import importLensesController from "../controllers/importLensesController.js";

const router = express.Router();

router
.route("/")
.get(importLensesController.getLenses)
.post(importLensesController.postLenses)
router
.route("/:id")
.put(importLensesController.putLenses)
.delete(importLensesController.deleteLens)

export default router;
