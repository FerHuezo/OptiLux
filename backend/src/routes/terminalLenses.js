import express from "express";
import multer from "multer";
import terminalLensController from "../controllers/terminalLensController.js";

const router = express.Router();
const upload = multer({ dest: "public/" });


router
.route("/")
.get(terminalLensController.getTerminal)
.post(upload.single("image"),terminalLensController.createTerminal)


router
.route("/:id")
.put(upload.single("image"),terminalLensController.updateTerminal)
.delete(terminalLensController.deleteTerminal)

export default router;