const { apiCode } = require("../utils/constant");

function authorizeMiddleware(role = []) {
  if (typeof role === "string") {
    role = [role];
  }
  return (req, res, next) => {
    if (req.auth && role.length && !role.includes(req.auth.role_id)) {
      res.json({
        status: 0,
        code: apiCode.NO_PERMISSION.code,
        msg: apiCode.NO_PERMISSION.message,
        ex: "",
        data: {},
      });
    }
    next();
  };
}

module.exports = { authorizeMiddleware };
