const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/assets", express.static("public/assets"));

app.get("/cars", async (req, res) => {
  const result = await pool.query("SELECT * FROM car");
  res.json(result.rows);
});


const PORT = 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
