import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {  TitleWrapper,Title,SubTitle, Col } from './styledComponents'
import { featureddata } from './featureddata'
import { StarDiv } from './styledComponents'


const Container = styled.div`
    background-color: #e9eef5;
`

const CardWrapper = styled.div`
    background-color: white;

`
const ImageWrapper = styled.div`
    height: 300px;
    flex: 1;

`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Row = styled.div`
    flex: 1;
`
const DetailsWrapper = styled.div`
    min-height: 300px;
`
const NavLink = styled(Link)`
    text-decoration: none;
    color: black;
`;
const Reviews = styled.h4``
const Description = styled.p`
    font-size: 1.2rem;
`
const Featured = () => {
    return (
       <Container>
            <Container className='container py-5 d-flex flex-column'>
            <Row className='row '>
                <TitleWrapper className='col-md-6 text-center mx-auto'>
                    <Title>Featured Product</Title>
                    <SubTitle>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</SubTitle>
                </TitleWrapper>
            </Row>
            <Row className='row'>
                {featureddata.map((item,i) => {
                    return (<Container key={i} className=' d-flex column align-items-center col-md-4 col-12 my-3 '>
                        <CardWrapper>
                            <ImageWrapper>
                                <NavLink to={`/`}><Image src={item.img} /></NavLink>
                            </ImageWrapper>
                           <Row>
                           <Row className='d-flex justify-content-between px-3'>
                                <StarDiv className=''>*****</StarDiv>
                                <Col className=''>{item.price}$</Col>
                            </Row>
                            <DetailsWrapper className='p-3 d-flex flex-column justify-content-around'>
                                <Title> <NavLink to={`/`}> {item.title} </NavLink> </Title>
                                <Description> 
                                    {item.desc}
                                </Description>
                                <Reviews>
                                   Reviews {`(${item.reviews})`}
                                </Reviews>
                            </DetailsWrapper>
                           </Row>
                        </CardWrapper>
                    </Container>)
                })}
            </Row>
        </Container>
       </Container>
      )
}

export default Featured