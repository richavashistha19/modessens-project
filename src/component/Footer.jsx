import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  
  left: 0;
  bottom: 0;
  width: 100%
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;