// import { Outlet, Link } from "react-router-dom";

// import { library } from '@fortawesome/fontawesome-svg-core';
//  import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from 'react';
// library.add(fas);

// function Navbar() {
// const[menu, setMenu]= useState(false)
// const toggleNav = ()=>{
// setMenu(!menu)
// }
//   return (
//     <>
//       <div>
// <header>
//     <div className="logo">Sole <span>Quest</span></div>
//       <nav>
//         <ul className={`links ${menu ? 'open-nav' : ''}`}>
//             <li>
//             <Link to="/">Home</Link>
//               </li>
//             <li>
//             <Link to="/store">Store</Link>
              
//               </li>
//             <li>
//             <Link to="/collection">Collection</Link>

//             </li>
//             <li>
//             <Link to="/product">Products</Link>

//             </li>
//             <li>
//             <Link to="/store">Store</Link>

//               </li>
//         </ul>
//       </nav>

//       <div className="nav-icons">
//       <FontAwesomeIcon className='font-icon'  icon={['fas', 'search']}  />
//       <FontAwesomeIcon  className='font-icon' icon={['fas', 'shopping-bag']}  />
//       </div>

// <div className="menu-icon"  onClick={toggleNav}>
// <FontAwesomeIcon  icon="fa-solid fa-bars" />
// </div>

// </header>

//       </div>

//       <Outlet />

//     </>
//   );
// }

// export default Navbar;

import React , { useState } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleNav = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <div className="logo">Sole <span>Quest</span></div>
      <nav>
        <ul className={`links ${menu ? 'open-nav' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/store">Store</Link></li>
          <li><Link to="/collection">Collection</Link></li>
          <li><Link to="/product">Products</Link></li>
        </ul>
      </nav>
      <div className="nav-icons">
        <FontAwesomeIcon className="font-icon" icon={['fas', 'search']} />
        <FontAwesomeIcon className="font-icon" icon={['fas', 'shopping-bag']} />
      </div>
      <div className="menu-icon" onClick={toggleNav}>
        <FontAwesomeIcon icon={['fas', 'bars']} />
      </div>
    </header>
  );
}

export default Navbar;

