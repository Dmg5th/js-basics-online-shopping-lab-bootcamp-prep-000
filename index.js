var cart = [];

function addToCart(item){
  var price = Math.floor(Math.random() * 99);
  
  cart.push({ [item]:price });
  
  console.log(`${item} has been added to your cart.`);
  
  return cart
  
  
}




