import React from 'react'
import styled from 'styled-components'
import { Box, Title } from '../../components/styledComponents'
import SingleProduct from '../components/SingleProduct'
import {products} from '../products'
const Container = styled.div`
    position: relative;
    width: 70vw;
    height: 98vh;
    overflow-y: scroll;
    transform: translateX(35%); /* Equal to translate(10px) */
`

const AllProducts = () => {
    console.log(products);
  return (
    <Container className='border mt-2 mx-4 p-2'>
        <Title className='text-center'>AllProducts</Title>
        <Box className='p-4 m-3 border'>
        { products.map((product) => {
            return <SingleProduct {...product} />
        })}
        </Box>
    </Container>
  )
}

export default AllProducts