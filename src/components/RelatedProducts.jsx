import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Row } from "./Categories";
import {TiStarFullOutline,TiStarHalfOutline,TiStarOutline} from 'react-icons/ti'

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

const Col = styled.div`
  display:grid ;
  grid-template-columns:repeat(4,1fr) ;
  @media (max-width:786px) {
    grid-template-columns:repeat(2,1fr) ;
  }
  @media (max-width:586px) {
    grid-template-columns:repeat(1,1fr) ;
  }
`
const RelatedProducts = () => {
  const allProducts = useSelector(state=>state.products.allProducts)
  const currentProductCat = useSelector(state=>state.products.currentProduct.category)
  let relatedProducts = allProducts.filter((product)=>product.category===currentProductCat).slice(1,5)
  console.log(relatedProducts);

  return (
    <Container className="container-fluid" style={{ backgroundColor: "#fff" }}>
      <Container className="container">
        <Row className="row">
          <Col className="col-12">
            <Title className="h4 mt-5 mb-3 mx-3">Related Products</Title>
          </Col>
        </Row>
        <Row className="">
          <Col className="">
            {relatedProducts.map((product) => {
              return (
                <Card className="card mx-2 mb-5 shadow p-1">
                  <ImageWrapper>
                    <Image src={product.images[0].imageLink} />
                  </ImageWrapper>
                  <Text className="text-center">{product.name}</Text>
                  <Text>{product.gpu}</Text>
                  <StarDiv className='mb-3 text-center'>
                   <TiStarFullOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarFullOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarFullOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarHalfOutline style={{color:'#FFEB00'}} size={25}/>
                   <TiStarOutline style={{color:'#FFEB00'}} size={25}/>
                </StarDiv>
                  <Text className="text-center">{product.price-(product.price*0.2)}$</Text>
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
