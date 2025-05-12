import Lens from "../models/importLensesModel.js";
import requestMessages from "../utils/strings.js";

const importLensesController = {};

importLensesController.getLenses = async (req, res) => {
  try {
    const lenses = await Lens.find();
    res.status(requestMessages.SUCCESS.code).json(lenses);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

export default importLensesController;
