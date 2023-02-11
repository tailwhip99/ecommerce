import React , {useState,useRef} from "react"
import {Link} from "react-router-dom"
import "../styles/cartPage.css"
function CartItem({cartProduct,addNumber,setCartLength,cartLength,displayCart}) {
    const {  id, name, prize, image, number } =cartProduct;
    

    
    const currentNumber = useRef(null)
    const handleChange = (e) => {
      
        const value = e.target.value;
        currentNumber.current = number
        const diff = value - currentNumber.current
        if (value >= 0) {

      
        console.log(value)
        addNumber(id,  +value);
      
        if ((diff <0) && (currentNumber.current === 1)) {
            let removeItem =  displayCart.find((removeItem)=> removeItem.id === id)
            const index = displayCart.indexOf(removeItem)
            displayCart.splice(index,1)
            setCartLength(cartLength-1)
           }
        if (currentNumber.current >= 0 ) {
        if (diff < 0 )   {
            setCartLength(cartLength-1)
            
        }else {
            setCartLength(cartLength+1) 
        }

        
    }
} 

       
    };
     
           
      

          const add = () => {
           currentNumber.current = number +1
          
           
           console.log( currentNumber.current)
          addNumber(id,  currentNumber.current);
          setCartLength(cartLength+1)
          }
         
          const substract = () => {
            if (number >= 1) {
            currentNumber.current = number -1
            
           
            console.log( currentNumber.current.value)
           addNumber(id,  currentNumber.current);
           setCartLength(cartLength-1)

           if (currentNumber.current === 0 ) {
            let removeItem =  displayCart.find((removeItem)=> removeItem.id === id)
            const index = displayCart.indexOf(removeItem)
            displayCart.splice(index,1)
           }
         
        }
       
           
           }


    return (
       
         <>
         <div key={id} className="cart-item" >
             
            <div className="image">
            <img alt="" src={image}></img>
            </div>
           <div className="name"> <Link className="link" to={`../shop/products/${id}`}><h1>{name}</h1></Link> </div>
           <div className="prize"> <h2>{prize * number  }$ / {Math.round(prize * number * 364.34) } HUF</h2></div>
                <div class="quantity">
                 
                <button onClick={substract} >-</button>
             <input  value={number}   type="number"   onChange={handleChange} ></input>
           
             <button onClick={add}  >+</button>
             </div>
            
             </div>
         </>
    )
}

export default CartItem
