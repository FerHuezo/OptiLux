import express from "express";
const router = express.Router();
import importLensesController from "../controllers/importLensesController.js";
import multer from "multer";

// Configuración de multer para archivos temporales
const upload = multer({ dest: "public/" });

router
  .route("/")
  .get(importLensesController.getLenses) 
  .post(upload.single("img"), importLensesController.postLens); 

router
  .route("/:id")
  .put(upload.single("img"), importLensesController.putLens) 
  .delete(importLensesController.deleteLens); 

export default router;
