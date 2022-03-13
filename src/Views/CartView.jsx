import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SingleItemCart from "../components/SingleItemCart";
import {
  Box,
  Button,
  GreenStyledButton,
  NavLink,
  Row,
} from "../components/styledComponents";
import { calculateTotalPrice } from "../redux/cartSlice";

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
  @media (max-width: 990px) {
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
  @media (max-width: 990px) {
    padding-left: 0;
  }
  @media (max-width: 940px) {
    flex-direction: column !important;
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

const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.137);
  padding: 1vh;
  margin-bottom: 4vh;
  outline: none;
  width: 100%;
  background-color: rgb(247, 247, 247);
`;

const CartView = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const [shippingCost, setShippingCost] = useState(5);
  let totalPrice = useSelector((state) => state.cart.totalPrice);
  let finalPrice = parseInt(totalPrice + parseFloat(shippingCost));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [cartProducts]);

  const changeShippingCost = (cost) => {
    setShippingCost(cost);
  };

  return (
    <>
      <ContainerFuild className="container-fluid">
        <Container className="">
          <Row className="row">
            <Col className="col-lg-8" items>
              <Title className="h3 mt-2 py-3">Shopping Cart</Title>

              {cartProducts.length === 0
                ? "no item"
                : cartProducts.map((item, i) => {
                    return <SingleItemCart key={i} {...item} />;
                  })}
              <Box>
                <NavLink to={"/shop"}>
                  <Button className="btn btn-light my-3">Back to shop</Button>
                </NavLink>
              </Box>
            </Col>
            <Col className="col-lg-4 p-4" summery>
              <Title className="h3 mt-4" summery>
                Summery
              </Title>
              <Box className="d-flex flex-column justify-content-between">
                <Box className="d-flex justify-content-between">
                  <Title className="my-2" medium noBorder>
                    ITEMS 3
                  </Title>
                  <Title className="my-2" medium noBorder>
                    $ {totalPrice}
                  </Title>
                </Box>
                <Box className="my-2">
                  <Title className="mt-2 mb-4" medium noBorder>
                    Shipping
                  </Title>
                  <Select
                    onChange={(e) => changeShippingCost(e.target.value)}
                    value={shippingCost}
                  >
                    <Option value="5">
                      Standard-Delivery- ${parseInt(5.0)}
                    </Option>
                    <Option value="15"> Fast- {15.0}</Option>
                    <Option value="30">DHL- ${30.0}</Option>
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
                    $ {finalPrice}
                  </Title>
                </Box>
              </Box>
              <GreenStyledButton checkout className=" mt-5 mb-4 w-100">
                Checkout
              </GreenStyledButton>
            </Col>
          </Row>
        </Container>
      </ContainerFuild>
    </>
  );
};

export default CartView;
