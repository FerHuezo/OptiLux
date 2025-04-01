import terminalLensesModel from "../models/terminalsModel.js";
import requestMessages from "../utils/strings.js";

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
  try {
    const { typeTerminals, price } = req.body;
    const terminalLens = new terminalLensesModel({ typeTerminals, price });
    await terminalLens.save();

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
    const { typeTerminals, price } = req.body;

    const updatedTerminal = await terminalLensesModel.findByIdAndUpdate(
      req.params.id,
      { typeTerminals, price },
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