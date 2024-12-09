const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let tasks = [];

// Endpoint untuk mendapatkan semua tugas
app.get("/tasks", (req, res) => res.json(tasks));

// Endpoint untuk menambahkan tugas baru
app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(port, () => console.log(`Server berjalan di port ${port}`));
