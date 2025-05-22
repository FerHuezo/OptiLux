import app from "./app.js"
import { config } from "./src/config.js"

import "./database.js"

async function main(){
    app.listen(config.server.PORT);
    console.log("SERVER ON PORT:  " + config.server.PORT);
    console.log(`Servidor escuchando en http://localhost:${config.server.PORT}`);
}

main();