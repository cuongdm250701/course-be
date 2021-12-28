const Sequelize = require("sequelize");

const { Model } = Sequelize;
const sequelize = require(`${__dirname}/../configs/connectDB.js`);

class student extends Model {}

student.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    course_id: Sequelize.INTEGER,
    student_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    expired_at: Sequelize.DATE,
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    modelName: "student",
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = () => student;
