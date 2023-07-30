const express=require('express')
const server=express()
const path=require('path')
const sequelize=require('./util/database')
const seller = require('./models/database')
const bodyParser=require('body-parser')
server.use(express.json());
const cors=require('cors')
server.use(cors())
server.use(bodyParser.urlencoded({extended:false}))
server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','html','seller.html'))
})
server.post('/user/add-product', async (req, res) => {
    try {
      const price = req.body.price;
      const product = req.body.product;
    
  
      const data = await seller.create({
        price: price,
        product: product,
       
      });        
      res.status(201).json({ newsellerDetail: data });
    } catch (err) {       
    res.status(500).json({ error: err }) 
    }
  });

  server.get('/user/get-product',async(req,res)=>{
    try{
    const sellers=await seller.findAll();
    res.status(200).json({allproducts:sellers});
    }catch(err){
        console.log('get user is failing', JSON.stringify(err))
        res.status(500).json({error:err })
    }
})

server.delete('/user/delete-product/:id',async(req,res)=>{
    try{

        if(req.params.id=='undefined'){
            console.log('ID is missing')
            return res.status(400).json({err:'ID is missing'})
        }
    const uId=req.params.id;
    await seller.destroy({where:{id:uId}})
        res.sendStatus(200);
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


seller.sync().then((result)=>{
    console.log(result)
})

server.listen(3000)