import express, { Router } from "express";
import filtersController from "../controllers/filtersController.js";

const router = express.Router();

router
.route("/")
.get(filtersController.getFilters)
.post(filtersController.postFilters)
router
.route("/:id")
.put(filtersController.putFilter)
.delete(filtersController.deleteFilter)

export default router;
