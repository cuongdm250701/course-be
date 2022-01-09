const { wrapHandleWithResposeJSON } = require("../common/response");
const { ROLE } = require("../utils/constant");
const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { authorizeMiddleware } = require("../middleware/authorizeMiddleware");

router.post(
  "/createUser",
  // authorizeMiddleware([ROLE.ADMIN]),
  wrapHandleWithResposeJSON(userController.createUser)
);

module.exports = router;
