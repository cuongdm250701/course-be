const Sequelize = require("sequelize");
const { Model } = Sequelize;

const sequelize = require(`${__dirname}/../configs/connectDB.js`);

class transaction extends Model {}

transaction.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_manager_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    create_by: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    course_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
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
  },
  {
    sequelize,
    modelName: "transaction",
    timestamps: false,
    freezeTableName: true,
  }
);

transaction.associate = (db) => {
  db.transaction.belongsTo(db.user, {
    foreignKey: {
      name: "create_by",
    },
  });
  db.transaction.belongsTo(db.user, {
    foreignKey: {
      name: "user_manager_id",
    },
  });
  db.transaction.belongsTo(db.course, {
    foreignKey: {
      name: "course_id",
    },
  });
};
module.exports = () => transaction;
