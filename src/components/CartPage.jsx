import React from "react";

import "../styles/Products.css"
import "../styles/cartPage.css"
import CartItem from './CartItem'
function CartPage({displayCart,addNumber,allPrizes,cartLength,setCartLength}) {
    
    

  
 
   
    return (
        <div className="cartPage">
            <h1 className="yourCart">Your Cart</h1>
            
            {displayCart.map((product) =>
             <CartItem displayCart={displayCart} cartLength={cartLength} setCartLength={setCartLength} addNumber={addNumber} cartProduct={product}  />  
           
           
 
            )}
          <h1 className="totalPrize">Total prize: {allPrizes}$ / {Math.round(allPrizes * 364.34) } HUF </h1>
          <button>Proceed to checkout</button>
        </div>
    )
}

export default CartPage