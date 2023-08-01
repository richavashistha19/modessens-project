import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHome, AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import "../App.css";

const Container = styled.div`
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: white;
  margin-left: 20px;

  &:hover {
    color: #ccc;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  color:white;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const NavIcons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const CartCount = styled.span`
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 50%;
  margin-left: 5px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer; /* Add cursor pointer to indicate clickable */

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  margin-right: 5px;
`;

const Nav = ({ cartItemCount }) => {
  const handleSearchClick = () => {
    // Redirect to "/search" when search is clicked
    window.location.href = '/search';
  };

  return (
    <Container>
      <h2>MODESSENS</h2>
      <NavItems>
        <NavbarLink><Link to='/mens'>Mens</Link></NavbarLink>
        <NavbarLink><Link to='/women'>Women</Link></NavbarLink>
        <NavbarLink><Link to='/kids'>Kids</Link></NavbarLink>
      </NavItems>
      <NavIcons>
        <NavbarLink><Link to='/'><AiOutlineHome size={30} /></Link></NavbarLink>
        <NavbarLink><Link to='/signup'><AiOutlineUser size={30} /></Link></NavbarLink>
        <NavbarLink>
          <Link to='/cart'>
            <AiOutlineShoppingCart size={30} />
            {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
          </Link>
        </NavbarLink>
      </NavIcons>
      <SearchContainer onClick={handleSearchClick}>
        <SearchIcon size={30} />
        <div>Search</div>
      </SearchContainer>
    </Container>
  );
};

const ParentComponent = () => {
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
      {/* Rest of the component */}
    </>
  );
};

export default ParentComponent;
