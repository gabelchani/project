const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Messengers_to_add=sequelize.define('Messengers_to_add',{
        id:{type:DataTypes.INTEGER,primaryKey:true},
        password:{type:DataTypes.STRING,allowNull:false},
        name:{type:DataTypes.STRING,allowNull:false},
        img:DataTypes.STRING,
        email:DataTypes.STRING,
        phone:DataTypes.STRING,
        places:DataTypes.STRING
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Messengers_to_add;

}