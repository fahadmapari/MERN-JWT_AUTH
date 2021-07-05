require("dotenv").config({
  path: "config.env",
});
const connectDB = require("./config/db");
connectDB();
const express = require("express");
const errorHandler = require("./middleware/error");
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

//Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on localhost port: ${PORT}`)
);
