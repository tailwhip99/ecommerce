import {React , useEffect , useState} from "react";
import {useParams , Link} from "react-router-dom"
import Data from "./data/Data"
import '../styles/Products.css'



function Product(props) {
  const {id} = useParams()
  


    const info= Data.find((item)=> item.id === id)
   
    
    const addToCart = () => {
      props.addToCart(info);
    };
  





    return(
      <div className="products">
     <img alt="" src={info.image}></img>
     {console.log(info.id)}
        <div className="infos">
          <h1 >{info.name}</h1>
          <h1>Prize: {info.prize}$ / {Math.round(info.prize * 364.34) }Ft </h1>
          <button onClick={addToCart}  >Add to Cart</button>
          <Link className="link" to={`/shop/${info.category_id}`}><h3>Go Back</h3></Link>
        </div>
      </div>
        
    )
}

export default Product