const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// custom rate limiter middleware
const rateLimiter = require("./middleware/rateLimiter");

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", rateLimiter, require("./routes/authroutes"));
app.use("/api/user", rateLimiter, require("./routes/userroutes")); 

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
