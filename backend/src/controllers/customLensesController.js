import customLensesModel from "../models/customLensesModel.js";

const customLensesController = {}


customLensesController.getAllCustomLenses = async (req, res) => {
    try {
        const customLenses = await customLensesModel.find().populate('filter').populate('ring').populate('terminals');
        res.status(200).json(customLenses);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las lentes personalizadas", error: error.message });
    }
};

customLensesController.postCustomLens = async (req, res) => {
    try {
        const { price, increase, filter, ring, terminals, color } = req.body;

        const newCustomLens = new customLensesModel({
            price,
            increase,
            filter,
            ring,
            terminals,
            color
        });

        await newCustomLens.save();
        res.status(201).json({ message: "Lente personalizada creada exitosamente", customLens: newCustomLens });
    } catch (error) {
        res.status(500).json({ message: "Error al crear la lente personalizada", error: error.message });
    }
};

customLensesController.deleteCustomLens = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCustomLens = await customLensesModel.findByIdAndDelete(id);
        if (!deletedCustomLens) {
            return res.status(404).json({ message: "Lente personalizada no encontrada" });
        }

        res.status(200).json({ message: "Lente personalizada eliminada exitosamente" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la lente personalizada", error: error.message });
    }
};

customLensesController.updateCustomLens = async (req, res) => {
    try {
        const { id } = req.params;
        const { price, increase, filter, ring, terminals,color } = req.body;

        const updatedCustomLens = await customLensesModel.findByIdAndUpdate(
            id,
            { price, increase, filter, ring, terminals, color },
            { new: true }
        );

        if (!updatedCustomLens) {
            return res.status(404).json({ message: "Lente personalizada no encontrada" });
        }

        res.status(200).json({ message: "Lente personalizada actualizada exitosamente", customLens: updatedCustomLens });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la lente personalizada", error: error.message });
    }
}
export default customLensesController;
