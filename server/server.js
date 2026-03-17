const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// serve static assets
app.use("/assets", express.static("public/assets"));

// routes
app.use("/feedback", require("./routes/feedback"));

// cars endpoint
app.get("/cars", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cars");
    res.json(result.rows);
  } catch (err) {
    console.error("GET /cars error:", err);
    res.status(500).send("Server error");
  }
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});