const Joi = require("joi");
const userServer = require("../service/userService");
const { apiCode } = require("../utils/constant");

async function createUser(req, res) {
  const schema = Joi.object()
    .keys({
      phone: Joi.string().required().error(apiCode.INVALID_PARAM),
      full_name: Joi.string().required().error(apiCode.INVALID_PARAM),
      email: Joi.string().required().error(apiCode.INVALID_PARAM),
      role_id: Joi.number().required().error(apiCode.INVALID_PARAM),
      password: Joi.string().required().error(apiCode.INVALID_PARAM),
    })
    .unknown(true);

  const { phone, full_name, email, address, role_id, password } =
    await schema.validateAsync(req.body);
  return userServer.createUser({
    user_name: phone,
    phone,
    full_name,
    email,
    address,
    role_id,
    password,
  });
}

module.exports = { createUser };
