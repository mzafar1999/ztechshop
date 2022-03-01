import React from 'react'
import styled from 'styled-components';
import Categories from './Categories';
import Navbar from './Navbar';
import Slider from './Slider';


const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

 
const Home = () => {
  return (
    <Container>
     <Navbar/>
     <Slider/>
     <Categories/>
    </Container>
  )
}

export default Home