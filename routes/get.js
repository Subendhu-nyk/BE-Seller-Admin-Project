const express=require('express')
const router=express.Router()
const sequelize=require('../util/database')
const seller = require('../models/database')
const bodyParser=require('body-parser')

const getcontroller=require('../controllers/sellercontroller')
router.get('/user/get-product',getcontroller.getproduct)

module.exports=router