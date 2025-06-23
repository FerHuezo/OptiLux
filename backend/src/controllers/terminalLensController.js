import terminalLensesModel from "../models/terminalsModel.js";
import requestMessages from "../utils/strings.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const terminalLensController = {};

terminalLensController.getTerminal = async (req, res) => {
  try {
    const terminals = await terminalLensesModel.find();
    res.status(requestMessages.SUCCESS.code).json(terminals);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

terminalLensController.createTerminal = async (req, res) => {
  const { typeTerminals, price } = req.body;
  let imageURL = "";

    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "public",
        allowed_formats: ["jpg", "png", "jpeg", "webp"],
      });

      imageURL = result.secure_url;
    } catch (error) {
      console.error("Error al subir la imagen a Cloudinary:", error);
      return res.status(requestMessages.SERVER_ERROR.code).json({ message: "Error al subir la imagen." });
    }

    try {
      const newTerminal = new terminalLensesModel({ typeTerminals, price, image: imageURL });
      await newTerminal.save();
      res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message });
    } catch (error) {
      res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
    }
};

terminalLensController.deleteTerminal = async (req, res) => {
  try {
    const terminalLens = await terminalLensesModel.findByIdAndDelete(req.params.id);

    if (!terminalLens) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

terminalLensController.updateTerminal = async (req, res) => {
  try {
    const { typeTerminals, price, } = req.body;
    let image = req.body.image; 
    const imageFile = req.file; 

    if (imageFile) {
      console.log("Actualizando imagen en Cloudinary...");
      const uploadResult = await cloudinary.v2.uploader.upload(imageFile.path, {
        folder: "lenses",
      });
      image = uploadResult.secure_url;
    }

    const updatedTerminal = await ringsModel.findByIdAndUpdate(
      req.params.id,
      { typeTerminals, price, image },
      { new: true }
    );


    if (!updatedTerminal) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }
    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

export default terminalLensController;