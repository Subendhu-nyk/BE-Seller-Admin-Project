const Sequelize=require('sequelize')
const sequelize=require('../util/database')
const seller=sequelize.define('seller',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },     
    
    price:{
        type:Sequelize.INTEGER,      
        allowNull:false,

    },
    product:{
        type:Sequelize.STRING,   
        allowNull:false,
    }  

})

module.exports=seller;