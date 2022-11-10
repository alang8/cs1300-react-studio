import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // Use useState to create a state variable to hold the state of the cart
  const [cart, setCart] = useState(Array(bakeryData.length).fill(0));
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <h1>My Bakery</h1>
      <div className="appContainer">
        <div className="bakeryItems">
          {bakeryData.map((item, index) => ( // Map bakeryData to BakeryItem components
            <BakeryItem
              key={index}
              item={item}
              cart={cart}
              setCart={setCart}
              index={index}
              total={total}
              setTotal={setTotal}
            />
          ))}
        </div>
        <div className="bakeryCart">
          <h2>My Cart</h2>
          {/* Render a list of items in the cart */}
          { console.log(cart) }
            <p>
            Total: ${Math.round(total * 100) / 100}
              {cart.map((item, index) => {
                if (item > 0) {
                  return (
                    <p>
                      {item}x {bakeryData[index].name}
                    </p>
                  );
                }
              })}
            </p>
        </div>
      </div>
    </div>
  );
}

export default App;
