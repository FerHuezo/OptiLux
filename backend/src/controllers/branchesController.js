import Branch from "../models/branchesModel.js";
import requestMessages from "../utils/strings.js";

const branchesController = {};

branchesController.getBranch = async (req, res) => {
  try {
    const branches = await Branch.find();
    res.status(requestMessages.SUCCESS.code).json(branches);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

branchesController.postBranch = async (req, res) => {
  try {
    const { name, address, phone } = req.body;
    const newBranch = new Branch({ name, address, phone });
    await newBranch.save();
    
    res.status(requestMessages.CREATED.code).json({ message: requestMessages.CREATED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

branchesController.deleteBranch = async (req, res) => {
  try {
    const branch = await Store.findByIdAndDelete(req.params.id);
    
    if (!branch) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

branchesController.putBranch = async (req, res) => {
  try {
    const { name, address, phone } = req.body;
    
    const updatedBranch = await Store.findByIdAndUpdate(
      req.params.id,
      { name, address, phone },
      { new: true }
    );

    if (!updatedBranch) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

export default branchesController;