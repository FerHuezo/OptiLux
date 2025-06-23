import Filter from "../models/filtersModel.js";
import { v2 as cloudinary } from "cloudinary";
import requestMessages from "../utils/strings.js";
import { config } from "../config.js";

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
}); 

const filtersController = {};

filtersController.getFilters = async (req, res) => {
  try {
    const filters = await Filter.find();
    res.status(requestMessages.SUCCESS.code).json(filters);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

filtersController.postFilters = async (req, res) => {
    const { typeFilter, price } = req.body;

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
      const newFilter = new Filter({ typeFilter, price, image: imageURL });
      await newFilter.save();
      res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message });
    } catch (error) {
      res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
    }
  };


filtersController.deleteFilter = async (req, res) => {
  try {
    const filter = await Filter.findByIdAndDelete(req.params.id);
    if (!filter) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }
    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

filtersController.putFilter = async (req, res) => {
  try {
    const { typeFilter, price } = req.body;
    let image = req.body.image; 
    const imageFile = req.file; 

    if (imageFile) {
      console.log("Actualizando imagen en Cloudinary...");
      const uploadResult = await cloudinary.v2.uploader.upload(imageFile.path, {
        folder: "lenses",
      });
      image = uploadResult.secure_url;
    }

    const updatedFilter = await Filter.findByIdAndUpdate(
      req.params.id,
      { typeFilter, price, image },
      { new: true }
    );


    if (!updatedFilter) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }
    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

export default filtersController;