import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import CarouselComp from '../components/CarouselComp'
import { Button, Col, Container, Row } from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RelatedProducts from '../components/RelatedProducts'
import {  selectCurretProduct } from '../redux/productSlice'

import {TiStarFullOutline,TiStarHalfOutline,TiStarOutline} from 'react-icons/ti'


const ContainerSmall = styled.div`
  
`

const Title = styled.h1`
  
`
const Text = styled.p`
  
`
const Box = styled.div`
  
`
const StarDiv = styled.div`
  
`
const SingleProductView = () => {
    const allProducts = useSelector(state=>state.products.allProducts)
    const location = useLocation()
    let productId = location.pathname.split('/')[2] * 1
    const dispatch = useDispatch()
   
    //First get all product from state
    //Find product and dispatch it to the reducer
    useEffect(() => {
      let product = allProducts.find((product)=>{
        return product.id===productId
      })
      dispatch(selectCurretProduct(product))
    }, [dispatch])
    
    //My Product Info
    let currentProduct = useSelector(state=>state.products.currentProduct)
    let imagesOfProduct = currentProduct?currentProduct.images : null

    let oldPrice = currentProduct.price;
    let newPrice = parseInt(Math.round(currentProduct.price - (oldPrice * 0.2)))
    return (
    <Container style={{backgroundColor:'#eeeded'}}>
          <ContainerSmall className='container mb-5 mt-5' >
        <Row className='row'>
          <Col className='col-lg-5 col-md-5' >
            <CarouselComp images={imagesOfProduct}/>
          </Col>
          <Col className='col-lg-6 col-md-5 mx-4' style={{backgroundColor:'#ffffff'}}>
            <Title> {currentProduct.name} </Title>
            <Text> <strong>Condition</strong> : {currentProduct.condition} </Text>
            <Title className='h3'> $ {newPrice} </Title>
            
            <StarDiv className='mb-3'>
                   <TiStarFullOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarFullOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarFullOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarHalfOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarOutline style={{color:'#FFEB00'}} size={25}/>
                </StarDiv> Rating 4.8 | 36 Comments
            <strong>Brand</strong> : <Text className='d-inline text-capitalize'>{currentProduct.brand}</Text>
            <Box>
              <Title className='h2'>Description</Title>
              <Text>
                {currentProduct.description}
              </Text>
            </Box>
            <Box className='mb-3'>
              <strong>Color </strong>:<Text className='d-inline text-capitalize'>{currentProduct.color}</Text>

            </Box>
            <div><strong>Spectification: </strong>
              <ul>
                <li>Model: <Text className='d-inline text-capitalize'>{currentProduct.model_name}</Text></li>
                <li>Storage:  <Text className='d-inline text-capitalize'>{currentProduct.storage} GB</Text></li>
                <li>Operating System:  <Text className='d-inline text-capitalize'>{currentProduct.os}</Text></li>
                <li>Screen Size:  <Text className='d-inline text-capitalize'>{currentProduct.size}</Text></li>
              </ul>
            </div>
            <div className='d-flex'>
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
    </Container>
  )
}

export default SingleProductView