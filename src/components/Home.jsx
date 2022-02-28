import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';


const Container = styled.div`
    display: flex;
`;

 
const Home = () => {
  return (
    <Container>
     <Navbar/>
    </Container>
  )
}

export default Home