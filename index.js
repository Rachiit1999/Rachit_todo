const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todo");

const app = express();
dotenv.config();
const PORT = process.env.PORT;
//defining the variable
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "server is running" })); // This is our first route
app.use("/todo", todoRoutes);


mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
  })
  .catch((err) => {
    console.log("Database connection failed");
    console.log(err);
  });
