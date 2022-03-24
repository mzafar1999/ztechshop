import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/Sidebar'
import SingleProduct from '../components/SingleProduct'
import {products} from '../products'
const Container = styled.div`
    width: 70vw;
    height: 86vh;
    overflow-y: scroll;
    transform: translateX(35%); /* Equal to translate(10px) */
`
const Box = styled.div`
    overflow: hidden;
`
const Title = styled.h1`
    position: relative;
    left: 160px;
`

const AllProducts = () => {
  return (
    <Box className=' mt-2 mx-4 p-2'>
        <Sidebar/>
        <Title className='text-center'>AllProducts</Title>
        <Container className='p-4  border '>
        { products.map((product) => {
            return <SingleProduct {...product} />
        })}
        </Container>
    </Box>
  )
}

export default AllProducts