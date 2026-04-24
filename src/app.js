const express = require("express");
const app = express();
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
const testRoutes=require("./routes/testRoutes");
app.use("/api/test", testRoutes);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

module.exports = app;