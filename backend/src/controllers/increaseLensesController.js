import increaseLensesModel from "../models/increasesModel.js";
import requestMessages from "../utils/strings.js";

const increaseLensesController = {};

increaseLensesController.getIncrease = async (req, res) => {
  try {
    const increaseLens = await increaseLensesModel.find();
    res.status(requestMessages.SUCCESS.code).json(increaseLens);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

increaseLensesController.createIncrease = async (req, res) => {
  try {
    const { increaseLevel, price } = req.body;
    const increaseLens = new increaseLensesModel({ increaseLevel, price });
    await increaseLens.save();

    res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

increaseLensesController.deleteIncrease = async (req, res) => {
  try {
    const increaseLens = await increaseLensesModel.findByIdAndDelete(req.params.id);
    if (!increaseLens) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

increaseLensesController.updateIncrease = async (req, res) => {
  try {
    const { increaseLevel, price } = req.body;

    const updatedLens = await increaseLensesModel.findByIdAndUpdate(
      req.params.id,
      { increaseLevel, price },
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

export default increaseLensesController;