import express, { Router } from "express";
import branchesController from "../controllers/branchesController.js";

const router = express.Router();

router
.route("/")
.get(branchesController.getBranch)
.post(branchesController.postBranch)
router
.route("/:id")
.put(branchesController.putBranch)
.delete(branchesController.deleteBranch)


export default router;
