const mongoose = require("mongoose");
require("dotenv").config();

const url = "mongodb+srv://Rahul:Rahul2018@cluster0.rmihg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log("connection failed to connect db", err);
    });
};

module.exports = connectDB;
