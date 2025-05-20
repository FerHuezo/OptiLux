import Client from "../models/clientsModel.js";
import requestMessages from "../utils/strings.js";

const clientController = {};

clientController.getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(requestMessages.SUCCESS.code).json(clients);
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

clientController.putClient = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    const updatedClient = await Client.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email },
      { new: true }
    );

    if (!updatedClient) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.UPDATED.code).json({ message: requestMessages.UPDATED.message, client: updatedClient });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

clientController.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);

    if (!client) {
      return res.status(requestMessages.NOT_FOUND.code).json({ message: requestMessages.NOT_FOUND.message });
    }

    res.status(requestMessages.DELETED.code).json({ message: requestMessages.DELETED.message });
  } catch (error) {
    res.status(requestMessages.SERVER_ERROR.code).json({ message: requestMessages.SERVER_ERROR.message });
  }
};

export default clientController;
