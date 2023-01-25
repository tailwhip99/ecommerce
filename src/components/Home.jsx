import React from "react";
import '../styles/navbar.css'
import '../styles/Home.css'
import { Link , useParams } from "react-router-dom"
 function Home() {



    return (
        <div className="home">
        <h1 >“Keep Calm & drink a cocktail.”</h1>
        <Link className="btn"  to="/shop/cocktails"><button className="btn">SHOP NOW</button></Link>
        </div>
    )
}

export default Home;