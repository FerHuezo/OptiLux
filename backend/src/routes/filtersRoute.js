import express, { Router } from "express";
import filtersController from "../controllers/filtersController.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "public/" });

router
.route("/")
.get(filtersController.getFilters)
.post(upload.single("image"),filtersController.postFilters)
router
.route("/:id")
.put(upload.single("image"),filtersController.putFilter)
.delete(filtersController.deleteFilter)

export default router;
