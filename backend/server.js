import express from "express";
import Cat from "./models/Cat.js";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mydatabase"

mongoose.connect(MONGO_URI);

app.use(express.json())

app.get("/", async (req, res) => {
  const result = await Cat.find({});
  return res.json(result)
})

app.post("/cat", async (req, res) => {
  const data = req.body;
  const result = await Cat.create({ ...data });

  return res.json(result)
})


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
})