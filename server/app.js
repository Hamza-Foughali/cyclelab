const express = require("express");
//  require("./config/database");
const bicycleRoutes = require("./routes/bicycleRoutes");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", bicycleRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
