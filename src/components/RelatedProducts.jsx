import React from "react";
import styled from "styled-components";
import { Col, Container, Row } from "./Categories";

const Title = styled.h1``;
const Text = styled.p``;
const ImageWrapper = styled.div``;
const StarDiv = styled.div``;
const Card = styled.div`
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const reletedProduct = [
  { id: 1, img: "/images/r1.jpg", title: "Dell Inspiron", gpu: "i3/i5/i7" },
  { id: 2, img: "/images/r2.jpg", title: "Dell Inspiron", gpu: "i3/i5/i7" },
  { id: 3, img: "/images/r3.jpg", title: "Dell Inspiron", gpu: "i3/i5/i7" },
  { id: 4, img: "/images/r4.jpg", title: "Dell Inspiron", gpu: "i3/i5/i7" },
];

const RelatedProducts = () => {
  return (
    <Container className="container-fluid" style={{ backgroundColor: "#fff" }}>
      <Container className="container">
        <Row className="row">
          <Col className="col-12">
            <Title className="h4 mt-5 mb-3 mx-3">Related Products</Title>
          </Col>
        </Row>
        <Row className="row">
          <Col className="col-12 d-flex p-5">
            {reletedProduct.map((product) => {
              return (
                <Card className="card mx-2 mb-5 shadow p-1">
                  <ImageWrapper>
                    <Image src={product.img} />
                  </ImageWrapper>
                  <Text>{product.title}</Text>
                  <Text>{product.gpu}</Text>
                  <StarDiv className="text-center">*****</StarDiv>
                  <Text className="text-center">250$</Text>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default RelatedProducts;
