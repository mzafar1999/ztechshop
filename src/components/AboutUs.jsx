import React from 'react'
import { Col, Container, Row, Title,Text, ImageWrapper } from './styledComponents'

const AboutUs = () => {
  return (
    <Container className='container-fluid'>
        <Row className='row p-5'>
            <Col className='col-sm-6 d-flex justify-content-center align-items-center'>
            <ImageWrapper>
                        <img width={'100%'} src='/images/aboutus.png'/>
                    </ImageWrapper>
            </Col>
            <Col className='col-sm-6 my-s-5'>
                <Text>
                    <Title className='h3'>Welcome to the ZE-Commerce Store</Title>
                    <Text>
                    ZE-Commerce Stores, commonly referred to as , ZE-Commerce is a multinational conglomerate corporation headquartered in Paris, France. Its diversified business is primarily focused on the electronics (TV, gaming consoles, smartphones and laptops), game, entertainment tech services sectors. The company is one of the leading manufacturers of electronic products for the consumer and professional markets. ZE-Commerce is ranked 105th on the 2014 list of Fortune Global 500.
                    </Text>
                    <ImageWrapper>
                        <img width={'100%'} src='/images/store.jpg'/>
                    </ImageWrapper>
                </Text>
            </Col>
        </Row>
    </Container>
  )
}

export default AboutUs