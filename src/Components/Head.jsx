
function Head() {

  

  return (
    <>
      <div className="Hero">
        <h1>Design & High Quality</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Hic,
          cupiditate.
        </p>
        <div className="hero-btn">
          <button>Open Store</button>
          <button>Explore More</button>
        </div>


    

      </div>

      <div className="hero-content" >
     <div className="box-img">
     <img
         
          src="../src/assets/images/shoe.png"
          alt="Shoe 1"
        />
     </div>
      <div className="box-img">
      <img src="../src/assets/images/shoe1.png" alt="Shoe 2" />

      </div>
       <div className="box-img">
       <img  src="../src/assets/images/shoe2.png" alt="Shoe 3" />

       </div>
       <div className="box-img">
       <img  src="../src/assets/images/shoe4.png" alt="Shoe 4" />

       </div>
      </div>

      {/* Next Part of three cards */}
   
    </>
  );
}

export default Head;
