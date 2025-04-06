import { library } from '@fortawesome/fontawesome-svg-core';
 import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);


function CardComponent() {
  const CardComponentData = [
    {
      CardName: "Air Griffey max 1",
      imgSrc: "https://freepngimg.com/thumb/categories/1498.png",
      price: 154,
    },
    {
      CardName: "Air Griffey max Plus",
      imgSrc: "https://freepngimg.com/thumb/shoes/28116-8-nike-shoes-thumb.png",
      price: 190,
    },
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
      {
        CardName: "Nike Air Max Plus ",
          imgSrc:"https://freepngimg.com/thumb/shoes/55552-7-sneakers-image-free-hd-image-thumb.png",
        price: 204,
      },

  ];
  return (
    <>
       <div className="card-component">
        <h1>Our Collection</h1>
        <div className="card-grids">
          {CardComponentData.map((item, index) => (
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
    </>
  );
}

export default CardComponent;
