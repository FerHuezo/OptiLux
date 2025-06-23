import ringsModel from "../models/ringsModel.js";
import requestMessages from "../utils/strings.js";
import { v2 as cloudinary } from "cloudinary";
import { config } from "../config.js";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const lensRingController = {};

// Obtener todos los anillos de lentes
lensRingController.getLensRing = async (req, res) => {
  try {
    const lensRings = await ringsModel.find();
    res.status(requestMessages.SUCCESS.code).json(lensRings);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

// Crear un nuevo anillo de lente con imagen
lensRingController.postLensRing = async (req, res) => {
  const { typeLens, price } = req.body;
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
      const newRing = new ringsModel({ typeLens, price, image: imageURL });
      await newRing.save();
      res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message });
    } catch (error) {
      res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
    }
};

// Actualizar un anillo de lente, incluyendo imagen
lensRingController.putLensRing = async (req, res) => {
  try {
    const { typeLens, price, } = req.body;
    let image = req.body.image; 
    const imageFile = req.file; 

    if (imageFile) {
      console.log("Actualizando imagen en Cloudinary...");
      const uploadResult = await cloudinary.v2.uploader.upload(imageFile.path, {
        folder: "lenses",
      });
      image = uploadResult.secure_url;
    }

    const updatedRing = await ringsModel.findByIdAndUpdate(
      req.params.id,
      { typeLens, price, image },
      { new: true }
    );


    if (!updatedRing) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }
    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

// Eliminar un anillo de lente
lensRingController.deleteLensRing = async (req, res) => {
  try {
    const lensRing = await ringsModel.findByIdAndDelete(req.params.id);

    if (!lensRing) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

export default lensRingController;
