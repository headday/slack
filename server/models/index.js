const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING},
        login: {type: DataTypes.STRING},
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
