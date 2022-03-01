import React from 'react'
import styled from 'styled-components';
import Categories from './Categories';
import Featured from './Featured';
import Footer from './Footer';
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
     <Featured/>
     <Footer/>
    </Container>
  )
}

export default Home