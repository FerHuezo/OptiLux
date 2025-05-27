import Lens from "../models/importLensesModel.js";
import requestMessages from "../utils/strings.js";
import cloudinary from "cloudinary";

// Configuración de Cloudinary
/*cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
*/
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

importLensesController.postLens = async (req, res) => {
  const { color, price, increaseLenses, amount, brand } = req.body;

 /* let imageURL = "";

  // Subir imagen a Cloudinary
  if (req.file) {
    try {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "lenses",
        allowed_formats: ["jpg", "png", "jpeg"],
      });

      imageURL = result.secure_url;
    } catch (error) {
      console.error("Error al subir la imagen a Cloudinary:", error);
      return res.status(requestMessages.SERVER_ERROR.code).json({ message: "Error al subir la imagen." });
    }
  }*/

  try {
    const newLens = new Lens({
      color,
      price,
      increaseLenses,
      amount,
      brand,
      /*img: imageURL,*/
    });

    await newLens.save();
    res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message, lens: newLens });

  } catch (error) {
    console.error("Error al crear el lente:", error);
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

// Actualizar un lente, incluyendo opción para actualizar imagen en Cloudinary
importLensesController.putLens = async (req, res) => {
  try {
    const { color, price, increaseLenses, amount, brand } = req.body;
    /*let img = req.body.img; 
    const imageFile = req.file; 

    if (imageFile) {
      console.log("Actualizando imagen en Cloudinary...");
      const uploadResult = await cloudinary.v2.uploader.upload(imageFile.path, {
        folder: "lenses",
      });
      img = uploadResult.secure_url;
    }*/

    const updatedLens = await Lens.findByIdAndUpdate(
      req.params.id,
      { color, price, increaseLenses, amount, brand, /*img*/ },
      { new: true }
    );

    if (!updatedLens) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message, lens: updatedLens });
  } catch (error) {
    console.error("Error al actualizar lente:", error);
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

importLensesController.deleteLens = async (req, res) => {
  try {
    const lens = await Lens.findById(req.params.id);
    
    if (!lens) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    await Lens.findByIdAndDelete(req.params.id);
    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });

  } catch (error) {
    console.error("Error al eliminar lente:", error);
    res.status(requestMessages.SERVER_ERROR.code).json({ message: error.message });
  }
};

export default importLensesController;
