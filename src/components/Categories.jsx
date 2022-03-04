import React from 'react'
import styled from 'styled-components'
import { catagroydata } from './categoriesdata'


export const Container = styled.section`
`
export const Row = styled.div`
    
`
export const Col = styled.div`
`
export const TitleWrapper = styled.div``
export const Title = styled.h1``
export const SubTitle = styled.p``
export const CardWrapper = styled.div`
    
`
export const ImageWrapper = styled.div``
export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #cccccc;
`
export const Button = styled.button`
    
`
const Categories = () => {
  return (
    <Container className='container py-5'>
        <Row className='row '>
            <TitleWrapper className='col-md-6 text-center mx-auto'>
                <Title>Categories of The Month</Title>
                <SubTitle>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SubTitle>
            </TitleWrapper>
        </Row>
        <Row className='row'>
            {catagroydata.map((cat) => {
                return (<Col className=' d-flex column align-items-center col-md-4 col-12 p-5'>
                    <CardWrapper>
                        <ImageWrapper>
                            <Image src={cat.img} />
                        </ImageWrapper>
                        <TitleWrapper className='d-flex flex-column align-items-center'>
                            <Title  className='text-center my-3 h4'> {cat.title} </Title>
                            <Button className='btn btn-success d-block'>Shop Now</Button>
                        </TitleWrapper>
                    </CardWrapper>
                </Col>)
            })}
        </Row>
    </Container>
  )
}

export default Categories