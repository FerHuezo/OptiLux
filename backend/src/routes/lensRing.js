import express, { Router } from "express";
import lensRingController from "../controllers/lensRingController.js";


const router = express.Router();

router
.route("/")
.get(lensRingController.getLensRing)
.post(lensRingController.postLensRing)


router
.route("/:id")
.put(lensRingController.putLensRing)
.delete(lensRingController.deleteLensRing)


export default router;
