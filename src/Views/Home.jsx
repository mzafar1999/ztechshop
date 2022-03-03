import React from 'react'
import styled from 'styled-components';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';


export const Container = styled.div`
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