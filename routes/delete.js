const express=require('express')
const router=express.Router()
const sequelize=require('../util/database')
const seller = require('../models/database')
const deletecontroller=require('../controllers/sellercontroller')
router.delete('/user/delete-product/:id',deletecontroller.deleteproduct)

module.exports=router;