const { user, student } = require("@models/");
const Sequelize = require("sequelize");
const { ACTIVE, ROLE } = require("../utils/constant");
const { Op } = Sequelize;
const { createJWToken } = require("../configs/auth");
const bcrypt = require("bcrypt");
const sequelize = require("@configs/connectDB");
const { apiCode } = require("../utils/constant");

async function createUser({
  user_name,
  phone,
  full_name,
  email,
  address,
  role_id,
  password,
}) {
  const emailExist = await user.count({
    where: { email, is_active: { [Op.ne]: ACTIVE.INACTIVE } },
  });
  const phoneExist = await user.count({
    where: { phone, is_active: { [Op.ne]: ACTIVE.INACTIVE } },
  });
  if (emailExist) {
    throw apiCode.EMAIL_EXISTS;
  }
  if (phoneExist) {
    throw apiCode.ACCOUNT_EXISTS;
  }
  const id = await sequelize.transaction(async (transaction) => {
    const pass = await generatePassword(password);
    const createUser = await user.create(
      {
        user_name,
        phone,
        full_name,
        email,
        address,
        role_id,
        password: pass,
      },
      { transaction }
    );
    const token = await generateToken(user_name, createUser.id);
    console.log("token", token);
    await user.update(
      {
        token,
      },
      { where: { id: createUser.id }, transaction }
    );
    if (role_id == ROLE.STUDENT) {
      await student.create({
        student_id: createUser.id,
      });
    }
  });
  return id;
}

async function generatePassword(password) {
  return bcrypt.hashSync(password, 10, null);
}

async function generateToken(user_name, id) {
  return createJWToken({
    user_name,
    id,
  });
}

module.exports = { createUser };
