// ThreeCards.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

const ThreeCards = () => {
  // Dummy data for the three cards
  const cardsData = [
    {
      name: "Secure Payment",
      description: "Secure your payment",
      icon: "fas fa-money-bill-wave",
    },
    {
      name: "24/7 Support",
      description: "Contact us on 24/7",
      icon: "fas fa-clock",
    },
    {
      name: "Fast Delivery",
      description: "Fast delivery on order",
      icon: "fas fa-truck",
    }
  ];

  return (
    <>
    <div className="three-cards">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
        <FontAwesomeIcon className='Threeicons' icon={card.icon} />
         
          <div className="card-content">
            <h3>{card.name}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>

    </>
  );
}

export default ThreeCards;
