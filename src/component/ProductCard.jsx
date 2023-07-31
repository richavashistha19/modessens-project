import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
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
const MainWrapper = styled.div`
  padding: 0 20px; /* Add left-right padding */
 maring:0 auto;
`;
const ProductPrice = styled.p`
  font-weight: bold;
`;

const ProductRating = styled.p`
  margin-top: 8px;
  color: #ff9800;
`;

const ProductCard = ({ product }) => {
  return (
    <MainWrapper>
    <Card>
      <ProductImage src={product.imageurl} alt={product.productname} />
      <ProductTitle>{product.productname}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <ProductRating>Rating: {product.rating}</ProductRating>
    </Card>
    </MainWrapper>
  );
};

export default ProductCard;
