import React from "react";
import styled from "styled-components";
import { Button, Row } from "../components/styledComponents";

const ContainerFuild = styled.div`
  background-color: #a8a8a8;
  height: 100%;
  padding: 100px;
  @media (min-width: 1186px) {
    padding: 20px 250px;
  }
  @media (max-width: 786px) {
    padding: 24px;
  }
`;

const CheckOutBtn = styled.button`
  background-color: #000;
    border-color: #000;
    color: white;
    width: 100%;
    font-size: 16px;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 0
`

const Col = styled.div`
  border-top-right-radius: ${(props) => props.summery && "16px"};
  border-bottom-right-radius: ${(props) => props.summery && "16px"};
  background-color: white;
  border-top-right-radius: ${(props) => props.items && "16px"};
  border-top-left-radius: ${(props) => props.items && "16px"};
  background-color: ${(props) => props.summery && "#808080"};
  color: ${(props) => props.summery && "#ffffff"};
  border-bottom-left-radius: ${(props) => props.items && "16px"};
  min-height: 30 rem;
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
  padding-bottom: ${(props) => props.summery && "1rem"};
  padding-bottom: ${(props) => props.noPadding && "0px"};
  font-size: ${(props) => props.small && "14px"};
  font-size: ${(props) => props.medium && "18px"};

  color: ${(props) => props.small && "#a8a8a8"};

  margin-bottom: 0;
  border-bottom: 1px solid #999999;
  border: ${(props) => props.noBorder && "none"};
  @media (max-width: 586px) {
    font-size: 14px !important;
  }
`;
const Select = styled.select`
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1.2vh 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
`;
const Option = styled.option``;
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

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
`;

const CartView = () => {
  return (
    <>
      <ContainerFuild className="container-fluid">
        <Container className="">
          <Row className="row">
            <Col className="col-md-8" items>
              <Title className="h3 mt-2 py-3">Shopping Cart</Title>
              <Card className="d-flex border-bottom align-items-center justify-content-between">
                <Box className="d-flex align-items-center ">
                  <ImageWrapper>
                    <Image src="https://i.imgur.com/1GrakTl.jpg"></Image>
                  </ImageWrapper>
                  <Box>
                    <Title className="mx-4" small noPadding noBorder>
                      Shirt
                    </Title>
                    <Title className="h5 mx-4" noPadding noBorder>
                      Cotton T-shirt
                    </Title>
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
                    <Image src="https://i.imgur.com/1GrakTl.jpg"></Image>
                  </ImageWrapper>
                  <Box>
                    <Title className="mx-4" small noPadding noBorder>
                      Shirt
                    </Title>
                    <Title className="h5 mx-4" noPadding noBorder>
                      Cotton T-shirt
                    </Title>
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
            <Col className="col-md-4 p-4" summery>
              <Title className="h3 mt-4" summery>
                Summery
              </Title>
              <Box className="d-flex flex-column justify-content-between">
                <Box className="d-flex justify-content-between">
                  <Title className="my-2" medium noBorder>
                    ITEMS 3
                  </Title>
                  <Title className="my-2" medium noBorder>
                    $134
                  </Title>
                </Box>
                <Box className="my-2">
                  <Title className="mt-2 mb-4" medium noBorder>
                    Shipping
                  </Title>
                  <Select>
                    <Option>Standard-Delivery- &euro;5.00</Option>
                    <Option>Fast - &euro;15.00</Option>
                    <Option>DHL- &euro;30.00</Option>
                  </Select>
                </Box>
                <Box>
                  <Title noBorder medium className="my-3">
                    GIVE CODE
                  </Title>
                  <Input id="code" placeholder="Enter your code"></Input>
                </Box>
                <Box className="d-flex justify-content-between border-top">
                  <Title className="my-3" medium noBorder>
                    TOTAL PRICE
                  </Title>
                  <Title className="my-3" medium noBorder>
                    $140
                  </Title>
                </Box>
              </Box>
              <CheckOutBtn className=" mt-5 mb-4">Checkout</CheckOutBtn>
            </Col>
          </Row>
        </Container>
      </ContainerFuild>
    </>
  );
};

export default CartView;
