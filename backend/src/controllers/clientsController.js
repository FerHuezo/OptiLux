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

export default clientController;
