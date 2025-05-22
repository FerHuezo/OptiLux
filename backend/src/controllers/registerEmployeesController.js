import employeesModel from "../models/employeesModel.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { config } from "../config.js";


const registerEmployeesController = {};

registerEmployeesController.registerEmployee = async (req, res) => {
    const { name, lastName, email, password, telephone, address, dui, issnumber } = req.body;

    if (!name || !lastName || !email || !password || !telephone || !address || !dui || !issnumber) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }
    try {
        const existingEmployee = await employeesModel.findOne({ email });

        if (existingEmployee) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
        }

        const passwordHash = await bcryptjs.hash(password, 10);
        const newEmployee = new employeesModel({
            name,
            lastName,
            email,
            password: passwordHash,
            telephone,
            address,
            dui,
            issnumber
        });
        await newEmployee.save();

        jsonwebtoken.sign(
            {id: newEmployee._id},
            config.JWT.SECRET,
            { expiresIn: config.JWT.EXPIRESIN },
            (error, token) => {
                if (error) console.log(error);
                res.cookie("authToken", token);
                res.json({message: 'Empleado registrado'});
            }
        );
    } catch (error) {
        console.log(error);
    }
}

export default registerEmployeesController;