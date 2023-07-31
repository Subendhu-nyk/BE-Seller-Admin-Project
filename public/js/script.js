

async function OnSubmit(event){

     event.preventDefault();
     let price=document.getElementById('price').value
     let product=document.getElementById('product').value

     let obj={
         price,
         product
     }
     try{
     const response= await axios.post('http://localhost:3000/user/add-product',obj)
     console.log(response.data)
     console.log(response.data.newsellerDetail)
     showdetails()
     }
     catch(error){
         console.log(error)
     }
 }

 async function showdetails(){
     try{
         const response= await axios.get('http://localhost:3000/user/get-product')
         const data=response.data.allproducts
         console.log(data)
         const parentElement=document.getElementById('itemlist')              
         parentElement.innerHTML='';  
         totalValue = 0;           
         data.forEach(object => {                    
             const childElement=document.createElement('li')
             childElement.style.marginBottom='10px'
             const productPrice = parseFloat(object.price);
             totalValue=totalValue + productPrice;
             childElement.textContent=`Product Price :-  ${object.price} Product Name :-  ${object.product}`
             parentElement.appendChild(childElement)               
           
            
             const deletebutton=document.createElement('input')
                 deletebutton.type="submit"
                 deletebutton.style.marginLeft="10px"
                 deletebutton.value="Delete"
                 childElement.appendChild(deletebutton)
                 deletebutton.onclick= async ()=>{
                     try{
                         const response=await axios.delete(`http://localhost:3000/user/delete-product/${object.id}`)
                         parentElement.removeChild(childElement)                       
                         totalValue= totalValue - productPrice
                         updateTotal()
                     }
                     catch(err){
                         console.log(err)
                     }
                 }                  


                 });             
                 updateTotal();
             }
             catch(error){
                 console.log(error)
             }
         } 
         function updateTotal() {
 const totalElement = document.getElementById('total');
 totalElement.textContent = `Total price of products: ${totalValue}`;
}

        
         showdetails()
