const express=require('express')
const router=express.Router()
const sequelize=require('../util/database')
const seller = require('../models/database')
const bodyParser=require('body-parser')
const postcontroller=require('../controllers/sellercontroller')


router.post('/user/add-product',postcontroller.postproduct );

  module.exports=router;
