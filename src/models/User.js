const Sequelize = require("sequelize");

const { Model } = Sequelize;
const sequelize = require(`${__dirname}/../configs/connectDB.js`);

class user extends Model {}

user.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_name: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    full_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: Sequelize.STRING(100),
    address: Sequelize.STRING(100),
    token: {
      type: Sequelize.STRING(500),
      allowNull: false,
      defaultValue: "",
    },
    role_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    is_active: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    profile_image: Sequelize.TEXT,
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = () => user;
