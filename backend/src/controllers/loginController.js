import clientsModel from "../models/clientsModel.js";
import employeesModel from "../models/employeesModel.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";


const loginController = {};

loginController.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let userFound;
        let userType;

        if(email === config.EMAIL.ADMINEMAIL && password === config.EMAIL.ADMINPASSWORD)
        {
           (userType = "admin"), (userFound = {_id: "admin"});
        } else{
            userFound = await employeesModel.findOne({ email });
            userType = "employee";

            if (!userFound) {
                userFound = await clientsModel.findOne({ email });
                userType = "client";
            }
        }

        if (!userFound) {
            console.log("Usuario no encontrado");
            return res.json({message : "usuario no encontrado"})
        }


        if (userType !== "admin") {
            const isMatch = await bcryptjs.compare(password, userFound.password);
            if (!isMatch) {
                console.log("Contraseña incorrecta");
                return res.json({message : "contraseña incorrecta"})
            }  
        }

        jsonwebtoken.sign(
            {id: userFound._id, userType},
            config.JWT.SECRET,
            { expiresIn: config.JWT.EXPIRESIN },

            (error, token) => {
                if (error) console.log(error);
                res.cookie("authToken", token);
                res.json({message: 'Usuario logueado'});
            }
        );
    } catch (error) {
        res.json({message: "error"})
    }
};

export default loginController;