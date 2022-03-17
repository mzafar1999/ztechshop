import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/styledComponents'


const Container = styled.div`
    position: relative;
    width: 70vw;
    height: 98vh;
    overflow-y: scroll;
    transform: translateX(35%); /* Equal to translate(10px) */
`

const AllProducts = () => {
  return (
    <Container className='border mt-2 mx-4 p-2'>
        <Title className='text-center'>AllProducts</Title>
    </Container>
  )
}

export default AllProducts