const Sequelize = require("sequelize");
const { Model } = Sequelize;

const sequelize = require(`${__dirname}/../configs/connectDB.js`);

class role extends Model {}

role.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    modelName: "role",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = () => role;
