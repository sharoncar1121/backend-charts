const {DataTypes } = require("sequelize");
const sequelize = require ("../db/connection.js");

const Producto = sequelize.define('product',{
    partNumber:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    productType:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    categoryCode:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    brandCode:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    familyCode:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    lineCode:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    productSegmentCode:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    status:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    value:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    valueCurrency:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    statusdefaultQuantityUnits:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    description:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    plannerCode:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
    sourceLink:{
        type: DataTypes.STRING(100),
        allowNull: true
    },
},
{
    tableName:'product',
    timestamps:false
}
)

module.exports = Producto