const express = require("express");
const cors = require("cors");
const pool = require("./db");
const router = express.Router();


const app = express();

app.use(cors());
app.use(express.json());
app.use("/assets", express.static("public/assets"));
app.use("/", require("./routes/feedback"));

app.get("/cars", async (req, res) => {
  const result = await pool.query("SELECT * FROM cars");
  res.json(result.rows);
});


// POST feedback
router.post("/feedback", async (req, res) => {
  try {
    const { name, feedback } = req.body;

    const result = await pool.query(
      "INSERT INTO feedback (name, feedback) VALUES ($1, $2) RETURNING *",
      [name, feedback]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// GET all feedback
router.get("/feedback", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM feedback ORDER BY created_at DESC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;





const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
