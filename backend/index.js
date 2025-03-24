import app from "./app.js"
import { config } from "./src/config.js"

import "./database.js"

async function main(){
    
    app.listen(config.server.PORT);
    console.log("el puerto conectado es: " + config.server.PORT);

}

main();