const Sequelize = require("sequelize");
const { Model } = Sequelize;

const sequelize = require(`${__dirname}/../configs/connectDB.js`);

class complain extends Model {}

complain.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    student_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    confirm_complain: Sequelize.INTEGER,
    user_manager_id: Sequelize.INTEGER,
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    sequelize,
    modelName: "complain",
    timestamps: false,
    freezeTableName: true,
  }
);
complain.associate = (db) => {
  db.complain.belongsTo(db.user, {
    foreignKey: {
      name: "student_id",
    },
  });
};

module.exports = () => complain;
