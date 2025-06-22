import jsonwebtoken from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { config } from '../config.js';
import ClientsModel from '../models/clientsModel.js';
import nodemailer from 'nodemailer';

const registerClientsController = {};

registerClientsController.registerClient = async (req, res) => {
    const { firstName, lastName, telephone, dui, email, password } = req.body;

    if (!firstName || !lastName || !telephone || !dui || !email || !password ) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    console.log("Datos recibidos:", req.body);

    try {
        const existingClient = await ClientsModel.findOne({ email });

        if (existingClient) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
        }

        const passwordHash = await bcryptjs.hash(password, 10);

        const newClient = new ClientsModel({
            firstName, 
            lastName, 
            telephone, 
            dui, 
            email, 
            password : passwordHash
        });

        await newClient.save();

       const verificationCode = Math.floor(10000 + Math.random() * 90000).toString();
       const expiresAt = Date.now() + 2 * 60 * 60 * 1000;

        const tokenCode = jsonwebtoken.sign(
            { email, verificationCode, expiresAt },
            config.JWT.SECRET,
            { expiresIn: '2h' }
        );

        // Verificar que el email es válido antes de enviar el correo
        if (!email) {
            return res.status(400).json({ message: "El correo electrónico es obligatorio." });
        }
        
        console.log("Enviando correo a:", email); // Para depuración

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.EMAIL.EMAILUSER,
                pass: config.EMAIL.EMAILPASS,
            },
        });

        const mailOptions = {
            from: config.EMAIL.EMAILUSER,
            to: email,
            subject: "Verificación de cuenta - OptiLux",
            html: `
                <div style="background-color: #f4f4f4; padding: 20px; font-family: Arial, sans-serif;">
                <div style="max-width: 500px; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1); text-align: center;">
                    <h2 style="color: #333;">¡Bienvenido a OptiLux!</h2>
                    <p style="color: #666; font-size: 16px;">Usa el siguiente código para verificar tu cuenta:</p>
                    <div style="background: #007bff; color: white; font-size: 24px; font-weight: bold; padding: 12px; border-radius: 6px; margin: 10px auto; display: inline-block;">
                    ${verificationCode}
                    </div>
                    <p style="color: #666; font-size: 14px;">Este código expira en 2 horas.</p>
                    <hr style="border: 0; height: 1px; background: #ddd; margin: 20px 0;">
                    <p style="font-size: 12px; color: #999;">Si no has solicitado este correo, ignóralo.</p>
                </div>
                </div>
            `
        };

        try {
            let info = await transporter.sendMail(mailOptions);
            console.log("Correo electrónico enviado:", info.response);
            console.log(verificationCode)
            res.status(201).json({
                message: "Cliente registrado exitosamente. Por favor verifica tu correo electrónico.",
                token: tokenCode
            });

        } catch (error) {
            console.error("Error al enviar el correo electrónico:", error);
            return res.status(500).json({ message: "Error al enviar el correo electrónico." });
        }

    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ message: "Error", error: error.message });
    }
};

registerClientsController.verifyCodeEmail = async (req, res) => {
    const { verificationCode } = req.body;
    const token = req.cookies.verificationToken;

    if (!token) {
        return res.status(401).json({ message: "No verification token provided" });
    }

    try {
        const decoded = jsonwebtoken.verify(token, config.JWT.SECRET);
        const { email, verificationCode: storedCode } = decoded;

        // Comparar el código recibido con el almacenado en el JWT
        if (verificationCode !== storedCode) {
            console.log("el store es " + storedCode)
            return res.status(400).json({ message: "Invalid verification code el codigo es: " + storedCode });
            
        }

        // Marcar al cliente como verificado
        const client = await ClientsModel.findOne({ email });
        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }

        // Actualizar el campo de verificación
        client.isVerified = true;
        await client.save();

        // Limpiar la cookie después de la verificación
        res.clearCookie("verificationToken");

        res.status(200).json({ message: "Email verified successfully" });

    } catch (error) {
        console.error("Error verificando el email:", error);
        res.status(500).json({ message: "Error verifying email", error: error.message });
    }
};

export default registerClientsController;