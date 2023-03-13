const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Places_to_adds=sequelize.define('Places_to_adds',{
        id:{type:DataTypes.INTEGER,autoIncrement: true,primaryKey:true},
        name:{type:DataTypes.STRING,allowNull: false },
        address:{type:DataTypes.STRING,allowNull: false },
        description:DataTypes.STRING,
        img:DataTypes.STRING,
        segula:DataTypes.STRING
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Places_to_adds;

}
