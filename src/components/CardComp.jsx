import React from 'react'
import styled from 'styled-components'
const Title = styled.h1``
const Text = styled.p``
const ImageWrapper = styled.div``
const StarDiv = styled.div``
const Card = styled.div`
    cursor: pointer;
   
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`

const CardComp = ({img,title,gpu}) => {
  return (
    <Card className='card mx-2 mb-5 shadow p-1'>
                <ImageWrapper>
                    <Image src={img}/>
                </ImageWrapper>
                <Text>
                    {title}
                </Text>
                <Text>
                    {gpu}
                </Text>
                <StarDiv className='text-center'>
                    *****
                </StarDiv>
                <Text className='text-center'>
                    250$
                </Text>
            </Card>
  )
}

export default CardComp