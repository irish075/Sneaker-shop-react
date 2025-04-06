import { library } from '@fortawesome/fontawesome-svg-core';
 import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);



function CardDetail() {

const TopSelling=[
   {
      CardName: "Nike Air Max Plus ",
        imgSrc:"https://freepngimg.com/thumb/shoes/55552-7-sneakers-image-free-hd-image-thumb.png",
      price: 234,
    },

    {
        CardName: "Air Griffey max 1",
        imgSrc: "https://freepngimg.com/thumb/shoes/26230-6-nike-shoes-clipart-thumb.png",
        price: 159,
      },
      {
        CardName: "Air Griffey max Plus",
        imgSrc: "https://freepngimg.com/thumb/shoes/28116-8-nike-shoes-thumb.png",
        price: 177,
      },
]

  return (
    <>
     <div className="card-detail">
        {/* <div className="cardDetail-img"> */}
       <img  src="../src/assets/images/shoe6.png" alt="Shoe 4" />
        {/* </div> */}
     <div className="cardDetail-head">
        <h1>Dedicated to quailty and result</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet quos qui animi, omnis id aperiam labore laudantium reiciendis officiis fuga eum tempore temporibus odio soluta.</p>
        <button className="cardDetail-btn">Explore More</button>
     </div>

        </div> 


{/* ============================
_______TOP SELLING PRODUCT______ 
=============================*/}

<div className="two-grid-section">
   <div className="two-grid">
      <img src="https://images.unsplash.com/photo-1552858115-f4bc9e392b45?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwZm9vdHdlYXIlMjBoZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
     <h2>Mens Running</h2>
      <button>Shop</button>
   </div>
   <div className="two-grid">
      <img src="https://plus.unsplash.com/premium_photo-1695603437800-a679762b893e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHMlMjBmb290d2VhciUyMGhkfGVufDB8fDB8fHww" alt="" />
   <h2>Women Running</h2>
   <button>Shop</button>
   </div>
</div>


<div className="card-component">
        <h1>Top Selling Products</h1>
        <div className="card-grids">
          {TopSelling.map((item, index) => (
            <div key={index} className="card-grid">
              <img className="card-img" src={item.imgSrc} alt={item.CardName} />
              <h3>{item.CardName}</h3>
             <p>Lorem ipsum dolor sit amet.</p>
              <div className="card-grid-icon">
              <h5>{`${item.price}`} <span>$</span> </h5>
              <FontAwesomeIcon  className='grid-icon' icon={['fas', 'shopping-bag']}  />
              {/* <FontAwesomeIcon icon="fa-regular fa-heart" /> */}
              </div>
            </div>
          ))}
        </div>
      </div>

  <div className="footWear">
   <div className="foot-head">
   <h1>IF THE SHOE FITS</h1>
    <div className="foot-btn">
      <button>Shop Women</button>
      <button>Shop Men</button>
    </div>
    </div>
  </div>



    </>
  )
}

export default CardDetail
