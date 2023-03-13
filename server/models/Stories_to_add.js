const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Stories_to_adds=sequelize.define('Stories_to_adds',{
        id:{type:DataTypes.INTEGER,primaryKey:true,allowNull:false},
        title:{type:DataTypes.STRING,allowNull:false},
        story:{type:DataTypes.STRING,allowNull:false},
        place_id:DataTypes.INTEGER,
        nameUser:DataTypes.STRING,
        emailUser:DataTypes.STRING,
        phonUser:DataTypes.INTEGER
    },
    {
        freezeTableNmae:true,
        timestamps: false
    }

    );
    return Stories_to_adds;

}