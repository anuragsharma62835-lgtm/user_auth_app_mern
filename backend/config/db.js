const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Mongo Atlas Connected Successfully");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
