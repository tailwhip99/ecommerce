import {React , useEffect, useState }from "react";
import '../styles/navbar.css'
import '../styles/cartPage.css'

import { Link , useParams } from "react-router-dom"

 const Navbar = (props) => {
    const {id} = useParams()
    console.log(id)
    
   const openCart = () => {
    const cart = document.querySelector(".cart")
    cart.style.visibility = "visible"
   }

    

  
    return (
    <div className="navbar">
        <h1 className="logo"><Link className="link" to="/">[ Oliver's Cocktail bar ]</Link></h1>
        <div className="menu">
            <h1><Link className="link"    to="/shop/cocktails">Shop</Link></h1>
            <h1><Link className="link"     to="/about">About</Link></h1>
            
                <div className="shoppingCart">
                <Link className="svg" to="/cart"><svg className="cart" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>   </Link>
                <p>{props.cartLength}</p>
                </div>
             
             
        </div>
    </div>
    )
}
export default Navbar