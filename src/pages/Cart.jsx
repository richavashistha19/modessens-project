import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  margin: 20px auto;
  width: 90%;
  max-width: 1200px; /* Limit the maximum width for larger screens */
`;

const CartItem = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin: 10px 0;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* For smaller screens, stack the elements vertically */
  }
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 20px;
`;

const CartTitle = styled.h2`
  margin-bottom: 20px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  margin: 0 5px;
  padding: 4px 8px;
  font-size: 14px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const QuantityLabel = styled.span`
  margin: 0 10px;
`;

const TotalItems = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const TotalSum = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const ProceedToPaymentButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #2c3e9e;
  }
`;

const EmptyCartMessage = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Get the cart items from local storage and update the state
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalSum = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleProceedToPayment = () => {
    window.location.href = "/thankyou";
  };

  const handleQuantityChange = (index, amount) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += amount;
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };
 



  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <CartTitle>Your Cart</CartTitle>
        <EmptyCartMessage>Your cart is empty. Please add items to the cart.</EmptyCartMessage>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
     
      {cartItems.map((item, index) => (
        <CartItem key={index}>
          <ProductImage src={item.imageurl} alt={item.productname} />
          <div>
            <p>{item.productname}</p>
            <QuantityContainer>
              <QuantityButton onClick={() => handleQuantityChange(index, -1)}>-</QuantityButton>
              <QuantityLabel>{item.quantity}</QuantityLabel>
              <QuantityButton onClick={() => handleQuantityChange(index, 1)}>+</QuantityButton>
            </QuantityContainer>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        </CartItem>
      ))}
      <TotalItems>Total Items: {calculateTotalItems()}</TotalItems>
      <TotalSum>Total Sum: ${calculateTotalSum()}</TotalSum>
      <ProceedToPaymentButton onClick={handleProceedToPayment}>Proceed to Payment</ProceedToPaymentButton>
    </CartContainer>
  );
};

export default Cart;
