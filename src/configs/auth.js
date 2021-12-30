const jwt = require("jsonwebtoken");
require("dotenv").config();

function createJWToken(payload) {
  return jwt.sign(
    {
      data: payload,
    },
    process.env.SECRET,
    {
      algorithm: "RS256",
      expiresIn: 100000000,
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
