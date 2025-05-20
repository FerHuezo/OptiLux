import Lens from "../models/importLensesModel.js";
import requestMessages from "../utils/strings.js";
import cloudinary from "cloudinary";

// Configuración de Cloudinary (Asegúrate de que las variables de entorno están definidas)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const importLensesController = {};

// Obtener todos los lentes importados
importLensesController.getLenses = async (req, res) => {
  try {
    const lenses = await Lens.find();
    res.status(requestMessages.SUCCESS.code).json(lenses);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

// Crear un nuevo lente y subir imagen a Cloudinary
importLensesController.postLens = async (req, res) => {
  try {
    const { color, price, idIncreaseLenses, amount, brand } = req.body;
    const imageFile = req.file; // Asegúrate de usar multer para manejar `req.file`

    // Validar datos obligatorios
    if (!color || !price || !idIncreaseLenses || !amount || !brand || !imageFile) {
      return res.status(requestMessages.BAD_REQUEST.code).json({ message: "Todos los campos son obligatorios." });
    }

    // Subir imagen a Cloudinary
    const uploadResult = await cloudinary.v2.uploader.upload(imageFile.path, {
      folder: "lenses",
    });

    // Crear nuevo lente con la URL de Cloudinary
    const newLens = new Lens({
      color,
      price,
      idIncreaseLenses,
      amount,
      brand,
      img: uploadResult.secure_url,
    });

    await newLens.save();
    res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message, lens: newLens });

  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

importLensesController.putLens = async (req, res) => {
  try {
    const { color, price, idIncreaseLenses, amount, brand, img } = req.body;

    const updatedLens = await Lens.findByIdAndUpdate(
      req.params.id,
      { color, price, idIncreaseLenses, amount, brand, img },
      { new: true }
    );

    if (!updatedLens) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message, lens: updatedLens });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

importLensesController.deleteLens = async (req, res) => {
  try {
    const lens = await Lens.findByIdAndDelete(req.params.id);

    if (!lens) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

export default importLensesController;
