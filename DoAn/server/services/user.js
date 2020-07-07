const db = require('./db');
const Sequelize = require('sequelize');
const {DataTypes, Model} = Sequelize;

class User extends Model{}
User.init({
    displayName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    ic_number:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {isNumeric: true},
    },
    ic_issuance_at:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    ic_issuance_place:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    token:{
        type: DataTypes.STRING,
    }
}, 
{sequelize: db,modelName: 'user'}
);

module.exports = User;