import React from 'react'
import styled from 'styled-components'
import { catagroydata } from './categoriesdata'
import { Container,Row,Col,TitleWrapper,Title,SubTitle,CardWrapper,ImageWrapper,Button, GreenStyledButton } from './styledComponents'




export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #cccccc;
`

const Categories = () => {
  return (
    <Container className='container py-5'>
        <Row className='row '>
            <TitleWrapper className='col-md-6 text-center mx-auto'>
                <Title>Categories of The Month</Title>
                <SubTitle>Explore products by categories.</SubTitle>
            </TitleWrapper>
        </Row>
        <Row className='row'>
            {catagroydata.map((cat,i) => {
                return (<Col key={i} className=' d-flex column align-items-center col-md-4 col-12 p-5'>
                    <CardWrapper>
                        <ImageWrapper>
                            <Image src={cat.img} />
                        </ImageWrapper>
                        <TitleWrapper className='d-flex flex-column align-items-center'>
                            <Title  className='text-center my-3 h4'> {cat.title} </Title>
                            <GreenStyledButton className='d-block'>Shop Now</GreenStyledButton>
                        </TitleWrapper>
                    </CardWrapper>
                </Col>)
            })}
        </Row>
    </Container>
  )
}

export default Categories