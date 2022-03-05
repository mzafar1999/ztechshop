import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import CarouselComp from '../components/CarouselComp'
import { Button, Col, Container, Row } from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RelatedProducts from '../components/RelatedProducts'



const ContainerSmall = styled.div`
  
`

const SingleProductView = () => {

    const location = useLocation()
    console.log(location);
    // const getSingleProduct = useSelector()

    return (
    <Container style={{backgroundColor:'#eeeded'}}>
       <Navbar/>
        <ContainerSmall className='container mb-5 mt-5' >
        <Row className='row'>
          <Col className='col-lg-5 col-md-5' >
            <CarouselComp/>
          </Col>
          <Col className='col-lg-6 col-md-5 mx-4' style={{backgroundColor:'#ffffff'}}>
            <h1>Active</h1>
            <h3>$25</h3>
            <div>
              ***** Rating 4.8 | 36 Comments
            </div>
            <strong>Brand</strong> : Easy Wear
            <div>
              <strong>Description</strong>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ea rem vel doloremque reiciendis odit aut, voluptates laborum ut vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nisi consectetur dicta laborum quidem officia laboriosam optio facilis eligendi amet?</p>
            </div>
            <div>
              <strong>Available Colors: </strong> Black white
            </div>
            <div><strong>Spectification: </strong>
              <ul>
                <li>abc</li>
                <li>abc</li>
                <li>abc</li>
                <li>abc</li>
                <li>abc</li>
                <li>abc</li>
              </ul>
            </div>
            <div className='d-flex'>
              <div className='me-auto'>Size</div>
              <div className='ms-auto'>Quantitiy</div>
            </div>
            <div>
              <Button className='btn btn-success mx-3 w-25'>Buy</Button>
              <Button className='btn btn-success mx-3 w-25'>Add to Cart</Button>
            </div>
          </Col>
        </Row>
        </ContainerSmall>
        <RelatedProducts/>
       <Footer/>
    </Container>
  )
}

export default SingleProductView