import Filter from "../models/filtersModel.js";
import requestMessages from "../utils/strings.js";

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
    try {
      const { typeFilter, price } = req.body;
      const newFilter = new Filter({ typeFilter, price });
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
    const updatedFilter = await Filter.findByIdAndUpdate(
      req.params.id,
      { typeFilter, price },
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