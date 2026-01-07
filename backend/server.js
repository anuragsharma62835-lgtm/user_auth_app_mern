const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const expressRateLimiter = require("express-rate-limiter");
const ratelimiter = require("./middleware/ratelimiter");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", ratelimiter,require("./routes/authRoutes"));
app.use("/api/user", ratelimiter,require("./routes/userroutes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
