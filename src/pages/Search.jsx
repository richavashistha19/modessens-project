import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../component/ProductCard';

const MainWrapper = styled.div`
  padding: 0 20px; /* Add left-right padding */
  text-align: center; /* Center the content */
`;

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
  
`;

const Men = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data from the API endpoint (http://localhost:5000/Mens)
    fetch('http://localhost:5000/Mens')
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

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  // Filter the products based on the search query
  const filteredProducts = products.filter((product) =>
    product.productname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainWrapper>
      <h1>Men's Collection</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ProductListContainer>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        ) : (
          <p>No data found.</p>
        )}
      </ProductListContainer>
    </MainWrapper>
  );
};

export default Men;
