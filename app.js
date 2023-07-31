const express=require('express')
const server=express()
const path=require('path')
const sequelize=require('./util/database')
const seller = require('./models/database')
const bodyParser=require('body-parser')
const postrouter=require('./routes/post')
const getrouter=require('./routes/get')
const deleterouter=require('./routes/delete')
server.use(express.json());
const cors=require('cors')
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))
server.use(express.static(path.join(__dirname, 'public')));
server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','html','seller.html'))
})
server.use(postrouter)
server.use(getrouter)
server.use(deleterouter)



seller.sync().then((result)=>{
    console.log(result)
})

server.listen(3000)