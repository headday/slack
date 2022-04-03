const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        first_name: {type: DataTypes.STRING},
        last_name: {type: DataTypes.STRING},
        // full_name: {type: DataTypes.STRING},
        // role: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING, unique: true},
        password: {type: DataTypes.STRING},
    },
    {
        createdAt: false,
        updatedAt: false,
    }
)

module.exports = {
    User
}
