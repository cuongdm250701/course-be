const jwt = require("jsonwebtoken");
require("dotenv").config();

function createJWToken(payload) {
  return jwt.sign(
    {
      data: payload,
    },
    process.env.SECRET,
    {
      algorithm: "HS256",
      expiresIn: 10000000000,
    }
  );
}

function verifyJWToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    return decoded;
  } catch (err) {
    console.log(err);
  }
}

module.exports = { createJWToken, verifyJWToken };
