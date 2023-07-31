const sequelize=require('../util/database')
const seller = require('../models/database')

exports.postproduct=async (req, res) => {
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
  }

  exports.getproduct=async(req,res)=>{
    try{
    const sellers=await seller.findAll();
    res.status(200).json({allproducts:sellers});
    }catch(err){
        console.log('get user is failing', JSON.stringify(err))
        res.status(500).json({error:err })
    }
}


exports.deleteproduct=async(req,res)=>{
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
}