import dotenv from "dotenv";

dotenv.config();



export const config = {   
    dataBase:{
        URI: process.env.URI  
    },

    server:{

        PORT: process.env.PORT
    }

}