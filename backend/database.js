import mongoose from "mongoose";

import { config } from "./src/config.js";

//conectar la base de datos
//esta dirección se ubica en la carpeta config
mongoose.connect(config.dataBase.URI);

//conectada
const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("DB is connected");
});
//desconectada
connection.on("disconnected", ()=>{
    console.log("DB is disconnected");
});
//error
connection.on("error", (error)=>{
    console.log("error found: " + error);
});
