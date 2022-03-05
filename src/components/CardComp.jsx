import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {TiStarFullOutline,TiStarHalfOutline,TiStarOutline} from 'react-icons/ti'
import '../App.css'
const Text = styled.p`
    font-size: ${props=>props.medium && '14px'};
    font-weight: ${props=>props.bold && 'bold'} ;
    font-family: 'Open Sans', sans-serif;
    color: #898e96;
`
const ImageWrapper = styled.div`
    display: flex;
    justify-content: center ;
    cursor: pointer;

`
const StarDiv = styled.div``
const Card = styled.div`
    border-radius: 12px;
    margin-left:0 !important ;
    margin-right: 0 !important ;
    @media (min-width: 786px) {
        max-width:300px ;
        min-height: 434px ;

    max-height: 434px ;
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit:contain ;
`
const Strike = styled.del`
    color: #cc3b3b;
    stroke:black ;
`
const AddToCartBtn = styled.button`
    color: #08f26a;
	font-size: 12px;
	text-transform: uppercase;
	font-weight: bold;
	background: none;
	border: 1px solid #08f26a;
	padding: 10px 10px;
	margin-top: 5px;
	line-height: 16px;
	border-radius: 20px;
    width:200px ;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
    @media (min-width:486px) {
        width:130px ;
    }
    &:hover{
        color: #ffffff;
        background: #08f26a;
        border: 1px solid #08f26a;

    }&:active{
        color: #ffffff;
        background: #06c556;
        border: 1px solid #08f26a;

    }


    
`
const LinkComp = styled(Link)`
    text-decoration:none ;
    color:#06d35b;
    font-size:16px ;
    &:hover{
        color:#05ac4a
    }
`
    const CardComp = ({images,thumbnail,name,price,gpu}) => {
    let oldPrice = price;
    let newPrice = parseInt(Math.round(price - (oldPrice * 0.2)))
    return (
    <Card className='card mx-2 mb-5 shadow-sm p-1 d-flex flex-column justify-content-around'>
                <ImageWrapper className='my-auto'>
                    <Image className='w-75 my-auto mt-4' src={thumbnail}/>
                </ImageWrapper>
                <Text className='h5 text-center mt-3 mb-1'>
                   <LinkComp>
                   {name}
                   </LinkComp>
                </Text>
                <Text className='text-center mt-2 mb-2'>
                    {gpu}
                </Text>
                <StarDiv className='text-center'>
                   <TiStarFullOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarFullOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarFullOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarHalfOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarOutline style={{color:'#FFEB00'}} size={25}/>

                </StarDiv>
                <Text className='text-center mt-2' bold>
                <Strike>${oldPrice}</Strike> {" "} {newPrice}$
                </Text>
                <AddToCartBtn className='mb-3'>add to cart</AddToCartBtn>
            </Card>
  )
}

export default CardComp