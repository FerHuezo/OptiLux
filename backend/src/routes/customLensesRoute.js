import express from 'express';
import customLensesController from '../controllers/customLensesController.js';

const Router = express.Router();

Router
.route("/")
.get(customLensesController.getAllCustomLenses)
.post(customLensesController.postCustomLens);   

Router
.route("/:id")
.delete(customLensesController.deleteCustomLens)
.put(customLensesController.updateCustomLens);

export default Router;