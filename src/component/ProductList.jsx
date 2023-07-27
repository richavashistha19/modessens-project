import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid red;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  max-width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductTitle = styled.h3`
  margin-top: 0;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
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
      <div>
        {Array.isArray(products) &&
          products.map((product, index) => (
            <Card key={index}>
              <ProductImage src={product.imageurl} alt={product.productname} />
              <ProductTitle>{product.productname}</ProductTitle>
              <ProductPrice>${product.price}</ProductPrice>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Men;