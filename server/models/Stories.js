const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    
    const Stories=sequelize.define('Stories',{
        id:{type:DataTypes.INTEGER,primaryKey:true},
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
    return Stories;

}