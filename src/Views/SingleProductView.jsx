import React from 'react'
import styled from 'styled-components'
import CarouselComp from '../components/CarouselComp'
import { Col, Container, Row } from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



const ContainerSmall = styled.div`
  
`

const SingleProductView = () => {


    return (
    <Container>
       <Navbar/>
        <ContainerSmall className='container'>
        <Row>
          <Col className='col-lg-5 col-md-5'>
            <CarouselComp/>
          </Col>
          <Col className='col-lg-7 col-md-5'>
          </Col>
        </Row>
        </ContainerSmall>
       <Footer/>
    </Container>
  )
}

export default SingleProductView