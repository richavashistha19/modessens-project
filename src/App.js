import React, { useState } from 'react';
import Nav from './component/Nav';
import Allrouter from './router/Allrouter';
import Footer from './component/Footer';

const App = () => {
  // State to keep track of cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  // Calculate the cart item count based on the cartItems array length
  const cartItemCount = cartItems.length;

  return (
    <>
      <Nav cartItemCount={cartItemCount} />
      {/* Pass the addToCart function as a prop to Allrouter */}
      <Allrouter addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default App;
