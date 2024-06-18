const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");
const bookRoutes = require("./routes/bookRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

connectDB();

app.use(bodyParser.json());
app.use("/api", bookRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
