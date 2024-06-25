import express from "express";
import cors from "cors";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";

// app congig

const app = express();
const port = 4000;

// middleware

app.use(express.json());
app.use(cors());

// db connection
connectDB()

app.get("/", (req, res) => {
  res.send("API working");
});
app.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
