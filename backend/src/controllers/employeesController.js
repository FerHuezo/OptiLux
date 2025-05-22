import employeesModel from "../models/employeesModel.js";

const employeesController = {};

employeesController.getEmployees = async (req, res) => {
    const employees = await employeesModel.find();
    res.json(employees);    
}

employeesController.putEmployee = async (req, res) => {
    const { name, lastName,  password, email, telephone, address, dui, issnumber } = req.body;

    const updatedEmployee = await employeesModel.findByIdAndUpdate(
        req.params.id,
        { name, lastName, email, telephone, address, dui, issnumber  },
        { new: true }
    );

    if (!updatedEmployee) {
        return res.status(404).json({ message: 'Empleado no encontrado' });
    }

    res.json({ message: 'Empleado actualizado', employee: updatedEmployee });
}

employeesController.deleteEmployee = async (req, res) => {
    const deletedEmployee = await employeesModel.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
        return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.json({ message: 'Empleado eliminado' });
};

export default employeesController;