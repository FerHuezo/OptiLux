import dotenv from "dotenv";

dotenv.config();

export const config = {   
    dataBase:{
        URI: process.env.URI  
    },

    server:{
        PORT: process.env.PORT || 4000,
    },

    JWT:{
        SECRET : process.env.JWT_SECRET,
        EXPIRESIN : process.env.JWT_EXPIRES
    },

    EMAIL:{
        EMAILUSER: process.env.EMAIL_USER,
        EMAILPASS: process.env.EMAIL_PASS,
    },

    EMAILADMIN:{
        EMAILADMIN: process.env.ADMIN_EMAIL,
        EMAILPASS: process.env.ADMIN_PASSWORD,
    },

    cloudinary:{
        cloud_name : process.env.CLOUDINARY_NAME,
        api_key : process.env.CLOUDINARY_API_KEY,
        api_secret : process.env.CLOUDINARY_API_SECRET
    }

}