import React , {useEffect,  useState}  from "react";
import '../styles/Shop.css'
import uniqid from 'uniqid'
import Categories from "./data/Categories";
import { Link ,  Route , Routes , useParams} from "react-router-dom"
import Data from "./data/Data";
import Product from "./Product"

function Shop(props){
    const { parameter } = useParams()
    
    
    const category = Categories.filter((category)=> category.id === parameter)

    console.log(category)
   
    const [products , setProducts] = useState([])
    useEffect(()=> {
        if (category) {
            const products = Data.filter(
                (product) => (parameter === product.category_id)  );  
               
                setProducts(products)
                
        }
    }, [parameter]);

    return(
        <div className="shop">
<div className="left-side">
    <div className="chosenCategory">
<p >{parameter}</p>
</div>
   <ul  >
       {Categories.map((category)=>(
         <Link key={category.id} className="category"   to={`../shop/${category.id}`}> <li  >[ {category.name} ]</li></Link>
         
       ))}
      </ul>
   
   </div>

  
<div className="right-side">
   

 {products.map((product)=>(
 
<Link className="link" to={`../shop/products/${product.id}`}>
    <div key={uniqid()}>
        
    <div className="image">
<img alt="" src={product.image}></img>
</div>
<div className="productinfo">
 <h1>{product.name}</h1>
 <h2>{product.prize} USD / {(Math.round((product.prize) * 364.34))} HUF</h2>
 </div>
 </div>
 </Link>

))}

</div>


</div>
    )
}
 

export default Shop;