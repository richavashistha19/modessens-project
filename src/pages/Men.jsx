import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding: 20px;
  margin: 0 auto;
`;

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px; /* Increase the width of each card to 600px */
  width: 100%; /* Added width for smaller screens */
  max-width: 300px; /* Set a maximum width for the cards */
`;

const ProductTitle = styled.h3`
  margin-top: 0;
`;

const ProductImage = styled.img`
  margin-bottom: 8px;
  object-fit: cover;
  width: 100%;
  height: 200px;
`;

const MainContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0 20px; /* Added left-right padding */
`;

const ProductPrice = styled.p`
  font-weight: bold;
`;

const ProductRating = styled.p`
  margin-top: 8px;
  color: #ff9800;
`;

const AddToCartButton = styled.button`
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

const Men = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/Mens')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addToCart = (product) => {
    // Get existing cart items from local storage or initialize an empty array
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    

    // Check if the product is already in the cart
    const existingProduct = existingCartItems.find((item) => item.productname === product.productname);

    if (existingProduct) {
      // If the product is already in the cart, update its quantity
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      product.quantity = 1;
      existingCartItems.push(product);
    }

    // Save the updated cart items to local storage
    localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

    window.alert(`Item added successfully!`);
  };

  return (
    <div>
      <h1>Men's Collection</h1>
      <h3>Wide Range of Upperwear</h3>
      <MainContainer>
        <ProductListContainer>
          {Array.isArray(products) &&
            products.slice(0, 7).map((product, index) => (
              <Card key={index}>
                <ProductImage src={product.imageurl} alt={product.productname} />
                <ProductTitle>{product.productname}</ProductTitle>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductRating>Rating: {product.rating}</ProductRating>
                <AddToCartButton onClick={() => addToCart(product) }>Add to Cart</AddToCartButton>
              </Card>
            ))}
        </ProductListContainer>
      </MainContainer>
      <h3>Wide Range of Bottomwear</h3>
      <MainContainer>
        <ProductListContainer>
          {Array.isArray(products) &&
            products.slice(8, 15).map((product, index) => (
              <Card key={index}>
                <ProductImage src={product.imageurl} alt={product.productname} />
                <ProductTitle>{product.productname}</ProductTitle>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductRating>Rating: {product.rating}</ProductRating>
                <AddToCartButton onClick={() => addToCart(product)}>Add to Cart</AddToCartButton>
              </Card>
            ))}
        </ProductListContainer>
      </MainContainer>
      <h3>Items on sale</h3>
      <MainContainer>
        <ProductListContainer>
          {Array.isArray(products) &&
            products.slice(16, 21).map((product, index) => (
              <Card key={index}>
                <ProductImage src={product.imageurl} alt={product.productname} />
                <ProductTitle>{product.productname}</ProductTitle>
                <ProductPrice>${product.price}</ProductPrice>
                <ProductRating>Rating: {product.rating}</ProductRating>
                <AddToCartButton onClick={() => addToCart(product)}>Add to Cart</AddToCartButton>
              </Card>
            ))}
        </ProductListContainer>
      </MainContainer>
    </div>
  );
};

export default Men;
