import express, { Router } from "express";
import lensRingController from "../controllers/lensRingController.js";
import multer from "multer";


const router = express.Router();

const upload = multer({ dest: "public/" });

router
.route("/")
.get(lensRingController.getLensRing)
.post(upload.single("image"),lensRingController.postLensRing)


router
.route("/:id")
.put(upload.single("image"),lensRingController.putLensRing)
.delete(lensRingController.deleteLensRing)


export default router;
