import express from "express";
import cors from "cors";  // Importa el middleware CORS
import cookieParser from "cookie-parser";
import increaseLensesRoutes from "./src/routes/increaseLenses.js";
import lensRingRoutes from "./src/routes/lensRing.js";
import terminalLensesRoutes from "./src/routes/terminalLenses.js";
import branchesRoute from "./src/routes/branchesRoute.js";
import clientsRoute from "./src/routes/clientsRoute.js";
import filtersRoute from "./src/routes/filtersRoute.js";
import importLenses from "./src/routes/importLensesRoute.js";
import ordersRoute from "./src/routes/ordersRoute.js";
import clientsRegisterRoute from "./src/routes/registerClients.js";
import registerEmployeesRoute from "./src/routes/registerEmployeesRoute.js";
import employeesRoute from "./src/routes/employeesRoute.js";
import loginRoute from "./src/routes/login.js";
import logoutRoute from "./src/routes/logout.js";
import dotenv from "dotenv";


dotenv.config();
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",  
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true,
};

app.use(cors(corsOptions));  
app.use(cookieParser());  
app.use(express.json());


// Rutas
app.use("/api/increaseLenses", increaseLensesRoutes);
app.use("/api/lensRing", lensRingRoutes);
app.use("/api/terminalLenses", terminalLensesRoutes);
app.use("/api/branches", branchesRoute);
app.use("/api/clients", clientsRoute);
app.use("/api/filters", filtersRoute);
app.use("/api/imported", importLenses);
app.use("/api/orders", ordersRoute);
app.use("/api/registerClients", clientsRegisterRoute);
app.use("/api/registerEmployees", registerEmployeesRoute);
app.use("/api/employees", employeesRoute);

app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);
export default app;
