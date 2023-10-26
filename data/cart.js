export const cart = [];

export const addToCarts = (productId) =>{
 let marchingItem;
   cart.forEach((cartItem)=>{
       if(productId === cartItem.productId){
         marchingItem = cartItem;
       }
   });

   if(marchingItem){
     marchingItem.quantity += 1;
   } 
   else {
     cart.push ({
       productId : productId,
       quantity : 1
     });
   }
}