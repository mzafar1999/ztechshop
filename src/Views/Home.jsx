import React from 'react'
import styled from 'styled-components';
import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Slider from '../components/Slider';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

 
const Home = () => {
  return (
    <Container>
     <Slider/>
     <Categories/>
     <Featured/>
    </Container>
  )
}

export default Home