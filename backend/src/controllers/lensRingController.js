import lensRingModel from "../models/ringsModel.js";
import requestMessages from "../utils/strings.js";
import cloudinary from "cloudinary";

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const lensRingController = {};

// Obtener todos los anillos de lentes
lensRingController.getLensRing = async (req, res) => {
  try {
    const lensRings = await lensRingModel.find();
    res.status(requestMessages.SUCCESS.code).json(lensRings);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

// Crear un nuevo anillo de lente con imagen
lensRingController.postLensRing = async (req, res) => {
  try {
    const { typeLens, price } = req.body;
    const imageFile = req.file; // El archivo debe ser manejado con Multer

    if (!typeLens || !price || !imageFile) {
      return res.status(requestMessages.BAD_REQUEST.code).json({ message: "Todos los campos son obligatorios." });
    }

    // Subir imagen a Cloudinary
    const uploadResult = await cloudinary.v2.uploader.upload(imageFile.path, {
      folder: "lensRings",
    });

    const lensRing = new lensRingModel({
      typeLens,
      price,
      img: uploadResult.secure_url, // Guardar URL de la imagen
    });

    await lensRing.save();
    res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message, lensRing });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

// Actualizar un anillo de lente, incluyendo imagen
lensRingController.putLensRing = async (req, res) => {
  try {
    const { typeLens, price } = req.body;
    const imageFile = req.file;

    let updateData = { typeLens, price };

    // Si hay una nueva imagen, subirla a Cloudinary y actualizar
    if (imageFile) {
      const uploadResult = await cloudinary.v2.uploader.upload(imageFile.path, {
        folder: "lensRings",
      });
      updateData.img = uploadResult.secure_url;
    }

    const updatedLensRing = await lensRingModel.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedLensRing) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message, lensRing: updatedLensRing });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

// Eliminar un anillo de lente
lensRingController.deleteLensRing = async (req, res) => {
  try {
    const lensRing = await lensRingModel.findByIdAndDelete(req.params.id);

    if (!lensRing) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

export default lensRingController;
