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
    password: {
      type: Sequelize.STRING(100),
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

user.associate = (db) => {
  db.user.hasOne(db.student, {
    foreignKey: {
      name: "student_id",
    },
  });
  db.user.hasMany(db.course, {
    foreignKey: {
      name: "user_manager_id",
    },
  });
  db.user.hasMany(db.transaction, {
    as: "student_transaction",
    foreignKey: {
      name: "create_by",
    },
  });
  db.user.hasMany(db.transaction, {
    as: "user_manager_transaction",
    foreignKey: {
      name: "user_manager_id",
    },
  });
  db.user.hasMany(db.complain, {
    as: "student_complain",
    foreignKey: {
      name: "student_id",
    },
  });
  db.user.hasMany(db.complain, {
    as: "user_manager_complain",
    foreignKey: {
      name: "user_manager_id",
    },
  });
  db.user.hasMany(db.calander, {
    foreignKey: {
      name: "student_id",
    },
  });
  db.user.belongsTo(db.role, {
    foreignKey: {
      name: "role_id",
    },
  });
};

module.exports = () => user;
