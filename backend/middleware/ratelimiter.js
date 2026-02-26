const ratelimit = require("express-rate-limit");

const ratelimiter = ratelimit({
  max: 2000,
  windowMs: 60 * 60 * 1000,
  message: "too many requests from this IP",
});
module.exports = ratelimiter;
