import jsonwebtoken from 'jsonwebtoken';
import { config } from '../config.js';


export const validateAuthToken = (allowedUserTypes = []) => {
    return(req, res , next)=>{
        try {
            const {authToken} = req.cookies;

            if(!authToken){
                return res.status(401).json({message: 'cookies no encontradas, deberias iniciar sesion'});
            }

            const decoded = jsonwebtoken.verify(authToken, config.JWT.SECRET);
            req.user = decoded;

            if (allowedUserTypes.includes(decoded.userType)) {
                return res.json({message: "acceso denegado"})
            }
            next();

        } catch (error) {
            console.log("error"+error);
        }
    };
};