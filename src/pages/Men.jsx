import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0 20px; /* Add padding on the left and right */
`;

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductTitle = styled.h3`
  margin-top: 0;
`;

const ProductImage = styled.img`
  margin-bottom: 8px;
  object-fit:cover;
  margin-bottom: 8px;
  width: 100%;
  height: 200px;
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
        // Check if data.products is an array before setting the state
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ProductListContainer>
        {Array.isArray(products) &&
          products.map((product, index) => (
            <Card key={index}>
              <ProductImage src={product.imageurl} alt={product.productname} />
              <ProductTitle>{product.productname}</ProductTitle>
              <ProductPrice>${product.price}</ProductPrice>
              <ProductRating>Rating: {product.rating}</ProductRating>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </Card>
          ))}
      </ProductListContainer>
    </div>
  );
};

export default Men;
