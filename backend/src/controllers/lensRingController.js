import lensRingModel from "../models/ringsModel.js";
import requestMessages from "../utils/strings.js";

const lensRingController = {};

lensRingController.getLensRing = async (req, res) => {
  try {
    const lensRings = await lensRingModel.find();
    res.status(requestMessages.SUCCESS.code).json(lensRings);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

lensRingController.postLensRing = async (req, res) => {
  try {
    const { typeLens, price } = req.body;

    const lensRing = new lensRingModel({ typeLens, price });
    await lensRing.save();

    res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

lensRingController.deleteLensRing = async (req, res) => {
  try {
    const lensRing = await lensRingModel.findByIdAndDelete(req.params.id);

    if (!lensRing) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

lensRingController.putLensRing = async (req, res) => {
  try {
    const { typeLens, price } = req.body;

    const updatedLensRing = await lensRingModel.findByIdAndUpdate(
      req.params.id,
      { typeLens, price },
      { new: true }
    );

    if (!updatedLensRing) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

export default lensRingController;