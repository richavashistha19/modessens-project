import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 330px; /* Adjust this value to control the number of cards per row */
  margin: 0 auto;
`;

const Card = styled.div`
  border: 1px solid red;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  max-width: 100px;
  max-width: calc((100% - 40px) / 3);
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

const Women = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/Women')
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1>Latest Summer Collection</h1>
      <div>
        {products.map((product) => (
          <Card key={product.id}>
            <ProductImage src={product.imageurl} alt={product.productname} />
            <ProductTitle>{product.productname}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Women;
