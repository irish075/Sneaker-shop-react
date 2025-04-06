import products from '../JsFiles/Sample';

function StoreCard() {
  return (
    <div>
        <h1 style={{color:"white", textAlign:"center", marginBlock:"4rem"}}>Explore Our Best Shoes</h1>
   <div className="products-card">
    {Object.keys(products).map((key)=>{
 const product= products[key];
 return(
    <div className="product-list" key={product.id}>
  <img src={product.imageURL} alt={product.name} />
            <h2>Nike Shoes</h2>
            <p>Brand:<span>{product.brand}</span> </p>
            {/* <p>Gender:<span>{product.gender}</span></p> */}
            {/* <p> {product.category}</p> */}
            <p> Price:<span>${product.price}</span></p>
            {/* <p>Availibality :<span>{product.is_in_inventory ? 'In Stock' : 'Out of Stock'} </span> </p> */}
    </div>
 )
    })}
    
    </div>      
    </div>
  )
}

export default StoreCard
