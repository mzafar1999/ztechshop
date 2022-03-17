import React from 'react'
import { Box, Title, Text } from "../../components/styledComponents";
import styled from "styled-components";


const Card = styled.div`
  min-height: 120px;
  width: 100%;
  @media (max-width:768px) {
    justify-content: center !important;
    align-items: center !important;
  }
`;
const ImageWrapper = styled.div`
  height: 110px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const PriceBox = styled.div`
  @media (max-width:768px) {
    margin: 10px auto;
    text-align: center;
  }
`
const ItemDetailsBox = styled.div`
  @media (max-width:768px) {
    margin: 10px auto;
    justify-content: center;
  }
`


const SingleProduct = ({image,name,stock,images,qauntity,price,}) => {
    console.log(images);
  return (
    (
        <Card className="row d-flex border-bottom align-items-center">
          <ItemDetailsBox className="d-flex align-items-center col-md-5 col-sm-12">
            <ImageWrapper>
              <Image src='https://itechpk.com/mu/2021/11/iPhone-13-Pro-Max-Main-Image-1.png'></Image>
            </ImageWrapper>
            <Box className="w100">
              <Title className="h6 mx-4 text-capitalize w-100" noPadding noBorder>
                {name}
              </Title>
              <Text className="mx-4">${price}</Text>
            </Box>
          </ItemDetailsBox>
    
          <PriceBox className="col-md-2 mt-sm-3 col-sm-12  text-center">
            <Title className="h5">${200}</Title>
          </PriceBox>
          <Box className="col-1 mb-2">
          </Box>
        </Card>
      )
  )
}

export default SingleProduct

