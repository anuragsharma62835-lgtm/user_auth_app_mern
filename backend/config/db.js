const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("db connected");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
