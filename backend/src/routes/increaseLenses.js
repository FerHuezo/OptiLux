import express, { Router } from "express";

import increaseLensesController from "../controllers/increaseLensesController.js";

const router = express.Router();


router
.route("/")
.get(increaseLensesController.getIncrease)
.post(increaseLensesController.createIncrease);

router
.route("/:id")
.put(increaseLensesController.updateIncrease)
.delete(increaseLensesController.deleteIncrease)

export default router;