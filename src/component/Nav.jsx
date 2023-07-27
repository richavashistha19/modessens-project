import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: white;
  margin-left: 20px;

  &:hover {
    color: #ccc;
  }
`;

const Nav = () => {
  return (
    <Container>
      <h2>My Website</h2>
      <div>
        <NavbarLink><Link to='/mens' >Mens</Link></NavbarLink>
        <NavbarLink><Link to='/women' >Women</Link></NavbarLink>
        <NavbarLink ><Link to='/kids' >Kids</Link></NavbarLink>
      </div>
      <div>
        <NavbarLink><Link to='/' >Home</Link> </NavbarLink>
        <NavbarLink><Link to='/about' >About</Link> </NavbarLink>
        <NavbarLink><Link to='/contact' >Contact</Link></NavbarLink>
      </div>
    </Container>
  );
};

export default Nav;
