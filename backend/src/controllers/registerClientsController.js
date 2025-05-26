import jsonwebtoken from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { config } from '../config.js';
import ClientsModel from '../models/clientsModel.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

const registerClientsController = {};

registerClientsController.registerClient = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    console.log("Datos recibidos:", req.body); // Para depuración

    try {
        const existingClient = await ClientsModel.findOne({ email });

        if (existingClient) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
        }

        const passwordHash = await bcryptjs.hash(password, 10);

        const newClient = new ClientsModel({
            firstName,
            lastName,
            email,
            password: passwordHash
        });

        await newClient.save();

        const verificationCode = crypto.randomBytes(3).toString('hex');
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
            subject: 'Verificación de cuenta',
            text: `Tu código de verificación es: ${verificationCode}`,
        };

        try {
            let info = await transporter.sendMail(mailOptions);
            console.log("Correo electrónico enviado:", info.response);

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
    const token = req.cookies.verificationToken; // Obtener el token de la cookie

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