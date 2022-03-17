import React from 'react'
import styled from 'styled-components'
import { Title } from '../../components/styledComponents'

const Container = styled.div`
    position: relative;
    width: 70vw;
    height: 98vh;
    transform: translateX(35%); /* Equal to translate(10px) */
`

const AddProduct = () => {
  return (
    <Container>
        <Title className='mt-4 text-center'>Add product</Title>
    </Container>
  )
}

export default AddProduct