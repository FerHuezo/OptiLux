import Lens from "../models/lens.js";
import requestMessages from "../utils/strings.js";

const importLensController = {};

importLensController.getLenses = async (req, res) => {
  try {
    const lenses = await Lens.find().populate("idIncreaseLenses");
    res.status(requestMessages.SUCCESS.code).json(lenses);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

importLensController.postLenses = async (req, res) => {
  try {
    const { color, price, idIncreaseLenses, amount, brand } = req.body;
    const newLens = new Lens({ color, price, idIncreaseLenses, amount, brand });
    await newLens.save();
    res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

importLensController.putLenses = async (req, res) => {
  try {
    const { color, price, idIncreaseLenses, amount, brand } = req.body;
    const updatedLens = await Lens.findByIdAndUpdate(
      req.params.id,
      { color, price, idIncreaseLenses, amount, brand },
      { new: true }
    );

    if (!updatedLens) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }
    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

importLensController.deleteLens = async (req, res) => {
  try {
    const lens = await Lens.findByIdAndDelete(req.params.id);
    if (!lens) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }
    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

export default importLensController;
