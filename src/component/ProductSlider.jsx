/* import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const SlideAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
`;

const Slide = styled.img`
  width: 100%;
  height: auto;
  animation: ${SlideAnimation} 0.5s ease-in-out;
`;

const ProductSlider = () => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('http://localhost:3001/slider');
        const data = await response.json();
        setImages(data.slider);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [images]);

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <SliderContainer>
      {images.map((image, index) => (
        <Slide key={index} src={image.image} style={{ display: currentSlide === index ? 'block' : 'none' }} />
      ))}
    </SliderContainer>
  );
};

 export default ProductSlider; */
 import React from 'react'
 
 const ProductSlider = () => {
   return (
     <div>ProductSlider</div>
   )
 }
 
 export default ProductSlider