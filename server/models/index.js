const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    bio: { type: DataTypes.STRING },
    login: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  },
  {
    tableName: "user",
    createdAt: false,
    updatedAt: false,
  }
);

const Channel = sequelize.define(
  "channel",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  },
  {
    tableName: "channel",
    createdAt: false,
    updatedAt: false,
  }
);
const UserChannel = sequelize.define(
  "user_channel",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_user: { type: DataTypes.INTEGER },
    id_channel: { type: DataTypes.INTEGER },
  },
  {
    tableName: "user_channel",
    createdAt: false,
    updatedAt: false,
  }
);
User.hasMany(Channel, {as :"UserChannel", foreignKey: "id_user"})


// Channel.belongsTo(UserChannel, {
//     foreignKey:"id_channel"
// })

module.exports = {
  User,
  Channel,
  UserChannel
};
