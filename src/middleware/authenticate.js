const Sequelize = require("sequelize");
const { verifyJWToken } = require("@configs/auth");
const { user } = require("@models");
const { Op } = Sequelize;
const { ACTIVE, apiCode } = require("../utils/constant");
const { error } = require("../common/response");

async function isAuthenticate(req, res, next) {
  const { token } = req.headers;
  try {
    if (token) {
      const { data } = verifyJWToken(token);
      const findUser = await user.findOne({
        where: {
          user_name: data.user_name,
          token: { [Op.ne]: null },
          is_active: ACTIVE.ACTIVE,
        },
      });
      if (!findUser) {
        res.json(error(apiCode.UNAUTHORIZED));
      }
      req.auth = findUser;
      next();
    } else {
      res.json(error(apiCode.INVALID_ACCESS_TOKEN));
    }
  } catch (err) {
    res.json(error(apiCode.INVALID_ACCESS_TOKEN));
  }
}

module.exports = { isAuthenticate };
