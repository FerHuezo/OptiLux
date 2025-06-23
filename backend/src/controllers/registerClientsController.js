import jsonwebtoken from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { config } from '../config.js';
import ClientsModel from '../models/clientsModel.js';
import nodemailer from 'nodemailer';

const registerClientsController = {};

// 1. Registro y envío del código por correo
registerClientsController.registerClient = async (req, res) => {
    const { firstName, lastName, telephone, dui, email, password } = req.body;

    if (!firstName || !lastName || !telephone || !dui || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    try {
        const existingClient = await ClientsModel.findOne({ email });

        if (existingClient) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
        }

        const passwordHash = await bcryptjs.hash(password, 10);
        const verificationCode = Math.floor(10000 + Math.random() * 90000).toString();
        const expiresAt = Date.now() + 2 * 60 * 60 * 1000;

        const tokenCode = jsonwebtoken.sign(
            { email, verificationCode, expiresAt, firstName, lastName, telephone, dui, password },
            config.JWT.SECRET,
            { expiresIn: '2h' }
        );

        // Envío del correo
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

        await transporter.sendMail(mailOptions);

        // ✅ Establecer la cookie
        res.cookie("verificationToken", tokenCode, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // true en producción con HTTPS
            maxAge: 2 * 60 * 60 * 1000 // 2 horas
        });

        return res.status(201).json({
            message: "Cliente registrado exitosamente. Por favor verifica tu correo electrónico."
        });

    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ message: "Error en el servidor", error: error.message });
    }
};

// 2. Verificación del código
registerClientsController.verifyCodeEmail = async (req, res) => {
    const { verificationCode } = req.body;
    const token = req.cookies.verificationToken;

    if (!token) {
        return res.status(401).json({ message: "No verification token provided" });
    }

    try {
        const decoded = jsonwebtoken.verify(token, config.JWT.SECRET);
        const { email, verificationCode: storedCode, firstName, lastName, telephone, dui, password } = decoded;

        if (verificationCode !== storedCode) {
            return res.status(400).json({ message: "Código de verificación inválido" });
        }

        const existingClient = await ClientsModel.findOne({ email });
        if (existingClient) {
            return res.status(400).json({ message: "Este correo ya está registrado." });
        }

        const newClient = new ClientsModel({
            firstName,
            lastName,
            telephone,
            dui,
            email,
            password,
            isVerified: true
        });

        await newClient.save();

        // ✅ Limpiar la cookie
        res.clearCookie("verificationToken");

        return res.status(200).json({ message: "Correo verificado y cliente registrado correctamente" });

    } catch (error) {
        console.error("Error verificando el email:", error);
        return res.status(500).json({ message: "Error verificando el correo electrónico", error: error.message });
    }
};

export default registerClientsController;
