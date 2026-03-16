const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/assets", express.static("public/assets"));

app.get("/cars", async (req, res) => {
<<<<<<< HEAD
  const result = await pool.query("SELECT * FROM cars");
  res.json(result.rows);
})

const PORT = 3002;
=======
  const result = await pool.query("SELECT * FROM cars");
  res.json(result.rows);
});


const PORT = 3001;
>>>>>>> e2d7be2a4ad44a1294d88452b1d2cd1cc6cd5415

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
