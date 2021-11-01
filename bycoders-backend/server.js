require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/alive", (req, res) => {
  res.json({ data: true, status: "success" });
});

const PORT = process.env.BACKEND_PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});