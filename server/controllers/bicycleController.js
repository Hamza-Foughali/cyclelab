const Bicycle = require("../models/bicycleModel");

exports.getAllBicycles = async (req, res) => {
  try {
    const bicycles = await Bicycle.findAll();
    res.json(bicycles);
  } catch (error) {
    console.error("Error fetching bicycles:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error while fetching bicycles." });
  }
};

exports.getBicycleById = async (req, res) => {
  try {
    const bicycle = await Bicycle.findByPk(req.params.id);
    if (bicycle) {
      res.json(bicycle);
    } else {
      res.status(404).json({ error: "Bicycle not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "error fetching the bicycle." });
  }
};

exports.createBicycle = async (req, res) => {
  try {
    const { name, type, price, description, imageURL } = req.body;
    const bicycle = await Bicycle.create({
      name,
      type,
      price,
      description,
      imageURL,
    });
    res.status(201).json(bicycle);
  } catch (error) {
    console.error("Error creating bicycle:", error);
    res.status(500).json({ error: "Failed to create bicycle" });
  }
};

exports.deleteBicycle = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Bicycle.destroy({ where: { id } });
    if (!deleted) {
      return res.status(404).json({ error: "Bicycle not found" });
    }
    res.status(204).end();
  } catch (error) {
    console.error("Error deleting bicycle:", error);
    res.status(500).json({ error: "Failed to delete bicycle" });
  }
};
