const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Requests=sequelize.define('Requests',{
        id:{type:DataTypes.INTEGER,allowNull: false,primaryKey:true},
        name_to_prayer:{type:DataTypes.STRING,allowNull: false },
        request:DataTypes.STRING,
        is_done:{type:DataTypes.BOOLEAN,allowNull: false },
        id_period:{type:DataTypes.INTEGER,allowNull: false },
        idUser:{type:DataTypes.INTEGER,allowNull: false },
        nameUser:DataTypes.STRING,
        phonUser:DataTypes.INTEGER,
        emailUser:DataTypes.STRING
         
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Requests;

}
