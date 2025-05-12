import express from "express";
import increaseLensesRoutes from "./src/routes/increaseLenses.js";
import lensRingRoutes from "./src/routes/lensRing.js";
import terminalLensesRoutes from "./src/routes/terminalLenses.js";
import branchesRoute from "./src/routes/branchesRoute.js";
import clientsRoute from "./src/routes/clientsRoute.js"
import filtersRoute from "./src/routes/filtersRoute.js"
import importLenses from "./src/routes/importLensesRoute.js"

const app = express();
app.use(express.json());

app.use("/api/increaseLenses", increaseLensesRoutes);
app.use("/api/lensRing", lensRingRoutes)
app.use("/api/terminalLenses", terminalLensesRoutes)
app.use("/api/branches", branchesRoute)
app.use("/api/clients", clientsRoute)
app.use("/api/filters", filtersRoute)
app.use("/api/imported", importLenses)

export default app;
