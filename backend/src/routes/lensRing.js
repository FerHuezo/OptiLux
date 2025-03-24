import express, { Router } from "express";
import lensRingController from "../controllers/lensRingController.js";


const router = express.Router();

router
.route("/")
.get(lensRingController.getlensRing)
.post(lensRingController.createLensRing)


router
.route("/:id")
.put(lensRingController.updateLensRing)
.delete(lensRingController.deleteLensRing)


export default router;
