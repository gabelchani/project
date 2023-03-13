const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Messengers=sequelize.define('Messengers',{
        id:{type:DataTypes.INTEGER,primaryKey:true},
        password:{type:DataTypes.STRING,allowNull:false},
        name:{type:DataTypes.STRING,allowNull:false},
        id_Bank:{type:DataTypes.INTEGER,allowNull: false },
        img:DataTypes.STRING,
        email:{type:DataTypes.STRING,allowNull:false},
        phone:{type:DataTypes.STRING,allowNull:false},
        anonymous:DataTypes.BOOLEAN,
        places:DataTypes.STRING,
        is_active:DataTypes.BOOLEAN,
        sms:DataTypes.BOOLEAN,
        popup:DataTypes.BOOLEAN
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Messengers;

}
