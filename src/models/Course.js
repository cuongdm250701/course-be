const Sequelize = require("sequelize");
const { Model } = Sequelize;

const sequelize = require(`${__dirname}/../configs/connectDB.js`);

class course extends Model {}

course.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    price: {
      type: Sequelize.BIGINT,
      allowNull: false,
    },
    image: Sequelize.TEXT,
    user_manager_id: {
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
    modified_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    type: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "course",
    timestamps: false,
    freezeTableName: true,
  }
);

course.associate = (db) => {
  db.course.belongsTo(db.user, {
    foreignKey: {
      name: "user_manager_id",
    },
  });
  db.course.hasMany(db.transaction, {
    foreignKey: {
      name: "course_id",
    },
  });
};

module.exports = () => course;
