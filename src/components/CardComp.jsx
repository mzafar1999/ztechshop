import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component";
import '../App.css'
import { addProduct } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { GreenStyledButton } from './styledComponents';
export function newPriceCalculate(oldPrice,phonePrice) {
    oldPrice = phonePrice
    let newPrice = parseInt(Math.round(phonePrice - (oldPrice * 0.2)))
    return newPrice
} 

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

const LinkComp = styled(Link)`
    text-decoration:none ;
    color:#06d35b;
    font-size:16px ;
    &:hover{
        color:#05ac4a;
        text-decoration:none ;

    }
`
    const CardComp = ({_id,phoneImages,phoneFullName,phonePrice,phoneModelName,rating,qauntity}) => {
    let oldPrice = phonePrice;
    
    

    const dispatch = useDispatch();

  //Add product to cart
  const addProductToCart = () => {

    let qauntity = 1
    
    dispatch(addProduct({_id,phoneImages,phoneFullName,phonePrice,phoneModelName,rating,qauntity}));
  };
    let thumbnail
    if(phoneImages.length>0){
        thumbnail = phoneImages[0]
    }else{
        thumbnail = '/images/loading.jpg'
    }
    return (
    <Card className='card mx-2 mb-5 shadow-sm p-1 d-flex flex-column justify-content-around'>
                <LinkComp to={`/product/${_id}`}>
                <ImageWrapper className='my-auto'>
                    <Image className='w-75 my-auto mt-4' src={thumbnail}/>
                </ImageWrapper>
                    </LinkComp>
                <Text className='h5 text-center mt-3 mb-1 text-capitalize'>
                   <LinkComp to={`/product/${_id}`}>
                   {phoneFullName}
                   </LinkComp>
                </Text>
              
                <StarDiv className='text-center d-flex align-items-center justify-content-center'>
                <ReactStars  edit={false} size={30} value={rating} />
                </StarDiv>
                <Text className='text-center mt-2' bold>
                <Strike>${oldPrice}</Strike>  {newPriceCalculate(phonePrice,phonePrice)}$
                </Text>
                <GreenStyledButton onClick={addProductToCart} className='mb-3'>add to cart</GreenStyledButton>
            </Card>
  )
}

export default CardComp