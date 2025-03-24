import express from "express";
import increaseLensesRoutes from "./src/routes/increaseLenses.js";
import lensRingRoutes from "./src/routes/lensRing.js";
import terminalLensesRoutes from "./src/routes/terminalLenses.js";

const app = express();

app.use(express.json());


app.use("/api/increaseLenses", increaseLensesRoutes);
app.use("/api/lensRing",lensRingRoutes)
app.use("/api/terminalLense",terminalLensesRoutes)







export default app;
