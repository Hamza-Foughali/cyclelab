const express = require("express");
const router = express.Router();
const bicycleController = require("../controllers/bicycleController");

router.get("/bicycles", bicycleController.getAllBicycles);
router.get("/bicycles/:id", bicycleController.getBicycleById);
router.post("/bicycles", bicycleController.createBicycle);
router.delete("/bicycles/:id", bicycleController.deleteBicycle);

module.exports = router;
