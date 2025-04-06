// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import  "../src/assets/Styles/Shoe.css"
// import Store from "./Layout/Store";
// import Home from "./Layout/Home"
// import Collection from "./Layout/Collection";
// import Product from "./Layout/Product";
// import Navbar from "./Components/Navbar";
// function App() {

//   return (
//     <>
//      <BrowserRouter>
//     <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home/>}>
//           <Route index element={<Home />} />
//           <Route path="/store" element={<Store />} />
//           <Route path="/collection" element={<Collection />} />
//           <Route path="/product" element={<Product />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/assets/Styles/Shoe.css";
import Store from "./Layout/Store";
import Home from "./Layout/Home";
import Collection from "./Layout/Collection";
import Product from "./Layout/Product";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
