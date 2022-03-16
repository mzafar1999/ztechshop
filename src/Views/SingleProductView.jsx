import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CarouselComp from "../components/CarouselComp";
import {
  Col,
  Container,
  GreenStyledButton,
  NavLink,
  Row,
} from "../components/styledComponents";

import RelatedProducts from "../components/RelatedProducts";
import { selectCurretProduct } from "../redux/productSlice";
import ReactStars from "react-rating-stars-component";
import { Title, Text, Box, StarDiv } from "../components/styledComponents";
import { addProduct } from "../redux/cartSlice";
import { BiMinusCircle } from "react-icons/bi";
import { MdOutlineAddCircleOutline } from "react-icons/md";
const ContainerSmall = styled.div``;
const BuyNowBox = styled.div`
  display: flex;

  @media (max-width: 476px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const SingleProductView = () => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const location = useLocation();
  let productId = location.pathname.split("/")[2] * 1;
  const dispatch = useDispatch();

  //First get all product from state
  //Find product and dispatch it to the reducer
  useEffect(() => {
    let product = allProducts.find((product) => {
      return product.id === productId;
    });
    dispatch(selectCurretProduct(product));
  }, [dispatch, productId, allProducts]);

  //My Product Info
  let currentProduct = useSelector((state) => state.products.currentProduct);
  let imagesOfProduct = currentProduct ? currentProduct.images : null;
  let oldPrice = currentProduct.price;
  let newPrice = parseInt(Math.round(currentProduct.price - oldPrice * 0.2));

  let lessDescription = currentProduct.description
    ? currentProduct.description.substring(0, 150)
    : null;
  const [moreDescription, setMoreDescription] = useState(false);
  let [qauntity, setQauntity] = useState(1);
  //Add product to cart
  const addProductToCart = () => {
    dispatch(addProduct({ ...currentProduct,qauntity }));
  };
  const increaseQty = () => {
    setQauntity((qauntity += 1));
    console.log(qauntity);
  };
  const decreaseQty = () => {
    qauntity > 0 && setQauntity((qauntity -= 1));
  };

  return (
    <Container style={{ backgroundColor: "#eeeded" }}>
      <ContainerSmall className="container mb-5">
        <Row className="row py-5">
          <Col className="col-lg-5  ">
            <CarouselComp images={imagesOfProduct} />
          </Col>
          <Col
            className="col-lg-6 col-lg-5 mx-md-4"
            style={{ backgroundColor: "#ffffff" }}
          >
            <Title className="h2"> {currentProduct.name} </Title>
            <Text>
              <strong>Condition</strong> : {currentProduct.condition}{" "}
            </Text>
            <Title className="h4"> $ {newPrice} </Title>
            <StarDiv className="">
              <ReactStars
                edit={false}
                size={30}
                value={currentProduct.rating}
              />
            </StarDiv>
            Rating {currentProduct.rating} | 36 Comments
            <Box>
              <strong>Brand</strong> :
              <Text className="d-inline text-capitalize">
                {currentProduct.brand}
              </Text>
            </Box>
            <Box>
              <Title className="h3">Description</Title>
              <Title className="h6">
                {moreDescription ? currentProduct.description : lessDescription}{" "}
                <Text
                  className="text-success"
                  role="button"
                  onClick={() => setMoreDescription(!moreDescription)}
                >
                  <u>{moreDescription ? "See less" : "Read More"}</u>
                </Text>
              </Title>
            </Box>
            <Box className="mb-1">
              <strong>Color </strong>:
              <Text className="d-inline text-capitalize">
                {currentProduct.color}
              </Text>
            </Box>
            <Box>
              <strong>Spectification: </strong>
              <ul>
                <li>
                  Model:{" "}
                  <Text className="d-inline text-capitalize">
                    {currentProduct.model_name}
                  </Text>
                </li>
                <li>
                  Storage:{" "}
                  <Text className="d-inline text-capitalize">
                    {currentProduct.storage} GB
                  </Text>
                </li>
                <li>
                  Operating System:{" "}
                  <Text className="d-inline text-capitalize">
                    {currentProduct.os}
                  </Text>
                </li>
                <li>
                  Screen Size:{" "}
                  <Text className="d-inline text-capitalize">
                    {currentProduct.size}
                  </Text>
                </li>
              </ul>
            </Box>
            <BuyNowBox className="">
              <Title className="text-bold h4 mx-2">Quantitiy</Title>
              <Box className="d-flex align-items-center">
                <MdOutlineAddCircleOutline
                  className="mx-2"
                  size={30}
                  role="button"
                  onClick={increaseQty}
                />
                <Box className="border px-3 py-1 border-success rounded font-weight-bold">
                  {qauntity}
                </Box>
                <BiMinusCircle
                  onClick={decreaseQty}
                  className="mx-2"
                  size={30}
                  role="button"
                />
              </Box>
            </BuyNowBox>
            <BuyNowBox className="my-3">
              <NavLink btn to={`/cart`}>
                <Box className="my-1 mx-1">
                  <GreenStyledButton onClick={addProductToCart}>
                    Buy Now
                  </GreenStyledButton>
                </Box>
              </NavLink>
              <Box className="my-1 mx-1">
                <GreenStyledButton onClick={addProductToCart}>
                  Add to Cart
                </GreenStyledButton>
              </Box>
            </BuyNowBox>
          </Col>
        </Row>
      </ContainerSmall>
      <RelatedProducts />
    </Container>
  );
};

export default SingleProductView;
