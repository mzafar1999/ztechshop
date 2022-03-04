import React from "react";
import styled from "styled-components";
import { Button, Row } from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const ContainerFuild = styled.div`
  background-color: #a8a8a8;
  height: 100%;
  padding: 100px;
  @media (min-width: 1186px) {
    padding: 100px 250px;
  }
  @media (max-width: 786px) {
    padding: 24px;
  }
`;

const Col = styled.div`
  border-top-right-radius: ${(props) => props.summery && "16px"};
  border-bottom-right-radius: ${(props) => props.summery && "16px"};
  background-color: white;
  border-top-right-radius: ${(props) => props.items && "16px"};
  border-top-left-radius: ${(props) => props.items && "16px"};
  background-color: ${(props) => props.summery && "#808080"};
  color: ${(props) => props.summery && "#ffffff"};
  border-bottom-left-radius: ${(props) => props.items && "16px"};

  @media (max-width: 767px) {
    border-top-right-radius: ${(props) => props.summery && "0px"};
    border-bottom-left-radius: ${(props) => props.summery && "16px"};
    border-bottom-right-radius: ${(props) => props.summery && "16px"};
    border-bottom-left-radius: ${(props) => props.items && "0px"};
  }
`;

const Container = styled.div`
  background-color: white;
  border-radius: 16px;
  padding-left: 20px;
  @media (max-width: 767px) {
    padding-left: 0;
  }
`;
const Title = styled.h1`
  padding-bottom: ${props=>props.summery && '1rem'};
  padding-bottom: ${props=>props.noPadding && '0px'};
  font-size: ${props=>props.small && '14px'};
  color: ${props=>props.small && '#a8a8a8'};

  margin-bottom: 0;
  border-bottom: 1px solid #999999;
  border: ${(props) => props.noBorder && "none"};
  @media (max-width:586px) {
    font-size: 14px !important;
  }

`;
const Text = styled.p``;
const ImageWrapper = styled.div`
    height: 110px;

`;
const Box = styled.div``;
const Card = styled.div`
  height: 120px;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CartView = () => {
  return (
    <>
      <Navbar />
      <ContainerFuild className="container-fluid">
        <Container className="">
          <Row className="row">
            <Col className="col-md-8" items>
              <Title className="h3 mt-2 py-3" >Shopping Cart</Title>
              <Card className="d-flex border-bottom align-items-center justify-content-between">
                <Box className="d-flex align-items-center ">
                 <ImageWrapper>
                  <Image
                    src="https://i.imgur.com/1GrakTl.jpg">
                  </Image>
                 </ImageWrapper>
                 <Box>
                 <Title className="mx-4" small noPadding noBorder>Shirt</Title>
                  <Title className="h5 mx-4" noPadding noBorder>Cotton T-shirt</Title>
                 </Box>
                </Box>
              
                <Box className="d-flex align-items-baseline justify-content-center">
                  <Button className="btn btn-light">-</Button>
                  <Title className="h5 mx-2" noBorder>
                    2
                  </Title>
                  <Button className="btn btn-light">+</Button>
                </Box>
                <Box>
                  <Title className="h5" noBorder>
                  $44.00
                  </Title>
                </Box>
              </Card>
              <Card className="d-flex border-bottom align-items-center justify-content-between">
                <Box className="d-flex align-items-center ">
                 <ImageWrapper>
                  <Image
                    src="https://i.imgur.com/1GrakTl.jpg">
                  </Image>
                 </ImageWrapper>
                 <Box>
                 <Title className="mx-4" small noPadding noBorder>Shirt</Title>
                  <Title className="h5 mx-4" noPadding noBorder>Cotton T-shirt</Title>
                 </Box>
                </Box>
              
                <Box className="d-flex align-items-baseline justify-content-center">
                  <Button className="btn btn-light">-</Button>
                  <Title className="h5 mx-2" noBorder>
                    2
                  </Title>
                  <Button className="btn btn-light">+</Button>
                </Box>
                <Box>
                  <Title className="h5" noBorder>
                  $44.00
                  </Title>
                </Box>
              </Card>
              <Button className="btn btn-light my-3">Back to shop</Button>
            </Col>
            <Col className="col-md-4" summery>
              <Title className="h3 mt-4" summery>Summery</Title>

            </Col>
          </Row>
        </Container>
      </ContainerFuild>
      <Footer />
    </>
  );
};

export default CartView;
