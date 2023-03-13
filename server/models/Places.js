const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Places=sequelize.define('Places',{
        id:{type:DataTypes.INTEGER,autoIncrement: true,primaryKey:true},
        name:{type:DataTypes.STRING,allowNull: false },
        address:{type:DataTypes.STRING,allowNull: false },
        description:DataTypes.STRING,
        img:DataTypes.STRING,
        is_active:DataTypes.BOOLEAN,
        segula:DataTypes.STRING
    },
    {
        freezeTableNmae:true,
        timestamps: false
        
    }

    );
    return Places;

}
