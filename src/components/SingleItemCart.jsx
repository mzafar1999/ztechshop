import React from 'react'
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { Box, Button, Title } from "../components/styledComponents";

const Card = styled.div`
  height: 120px;
  width: 100%;
`;
const ImageWrapper = styled.div`
  height: 110px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const SingleItemCart = ({name,model_name,price,images}) => {


  return (
    <Card className="d-flex border-bottom align-items-center justify-content-between">
    <Box className="d-flex align-items-center ">
      <ImageWrapper>
        <Image src={images[0].imageLink}></Image>
      </ImageWrapper>
      <Box>
        <Title className="mx-4 h4 text-capitalize" small noPadding noBorder>
          {model_name}
        </Title>
        <Title className="h6 mx-4 text-capitalize" noPadding noBorder>
          {name}
        </Title>
      </Box>
    </Box>

    <Box className="d-flex align-items-baseline justify-content-center">
      <Button className="btn btn-light">-</Button>
      <Title className="h5 mx-2" noBorder>
        1
      </Title>
      <Button className="btn btn-light">+</Button>
    </Box>
    <Box>
      <Title className="h5" noBorder>
        ${price}
      </Title>
    </Box>
  </Card>
  )
}

export default SingleItemCart