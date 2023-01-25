
import './App.css';
import {React , useEffect , useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'
import Data from './components/data/Data'
import Product from "./components/Product"
import "./styles/navbar.css"


import CartPage from './components/CartPage';


function App(props) {

const [Cart,setCart] = useState([])
const [cartLength,setCartLength] = useState()
 const [allPrizes,setAllPrizes] = useState()
  


 function addNumber(productId,newValue)  {
  const newCart = Cart
  
  console.log(newCart)
  const product = newCart.filter((item) => item.id === productId)
  console.log(product)
  product[0].number = newValue

  console.log(newValue)
  console.log(product.number)
  newCart.map((cartItem) => ((cartItem.id === productId ? product : null)))

 setCart(newCart)
 
  console.log(Cart)
  totalPrice()
}

 const addToCart = (chosenValue) => {
   let cartItem = chosenValue
   
   const itemsInCart = Cart.filter((item)=> item.name === cartItem.name)
   if (itemsInCart.length === 0 ) {
    Cart.push(cartItem)
   }
   
     
   
   let count = 0

  
  
   let value = cartItem.number
   cartItem.number = value+1

  Cart.forEach((product)=> count+=product.number )

setCartLength(count)
const cartCounter = document.querySelector('.shoppingCart p')
cartCounter.style.visibility='visible'
 console.log(Cart)



  
 totalPrice()
displayCard()
 
 };

 function displayCard() {
  
 }

function totalPrice() {
 let sumPrizes = 0
 Cart.forEach((product)=> {
  const prize = product.prize * product.number
  console.log(prize)
  sumPrizes += prize
 } )
 setAllPrizes(sumPrizes)

};


  return (
   
  <>
  <Navbar cartLength={cartLength}  />

   <Routes >
<Route path="/" element={<Home />} />
<Route  path="/shop/:parameter" element={<Shop   data={Data} />} />
<Route path="/about" element={<About/>} />
<Route path="/shop/products/:id" element={<Product addToCart={addToCart}    data={Data} />} />
<Route path="/cart" element={<CartPage displayCart={Cart} addNumber={addNumber} cartLength={cartLength} setCartLength={setCartLength}   allPrizes={allPrizes}  data={Data} />}></Route>
   </Routes>
   </>
   
  );
}

export default App;
