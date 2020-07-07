const db = require('./db');
const Sequelize = require('sequelize');
const {DataTypes, Model} = Sequelize;

class Account extends Model{}
Account.init({
    acount_code:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {isNumeric: true},
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    balance:{
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    currency:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {max: 3},
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    authentic_status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_ic:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isNumeric: true},
    }
}, 
{sequelize: db,modelName: 'account'}
);

module.exports = Account;