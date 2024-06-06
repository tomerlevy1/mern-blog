import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3001;

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

// app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}!`);
});
