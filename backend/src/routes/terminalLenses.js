import express from "express";

import terminalLensController from "../controllers/terminalLensController.js";

const router = express.Router();



router
.route("/")
.get(terminalLensController.getTerminal)
.post(terminalLensController.createTerminal)


router
.route("/:id")
.put(terminalLensController.updateTerminal)
.delete(terminalLensController.deleteTerminal)

export default router;