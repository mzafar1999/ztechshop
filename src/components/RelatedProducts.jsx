import { useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Row,Title,Text,ImageWrapper,StarDiv, Box } from "./styledComponents";
import {TiStarFullOutline,TiStarHalfOutline,TiStarOutline} from 'react-icons/ti'

const Card = styled.div`
  cursor: pointer;

  @media (min-width:491px) {
    min-height: 420px;
  }

  @media (max-width:490px) {
    height: 320px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  
`;


const Col = styled.div`
 
`
const RelatedProducts = () => {
  const allProducts = useSelector(state=>state.products.allProducts)
  const currentProductCat = useSelector(state=>state.products.currentProduct.category)
  let relatedProducts = allProducts.filter((product)=>product.category===currentProductCat).slice(1,5)

  return (
    <Container className="container-fluid" style={{ backgroundColor: "#fff" }}>
      <Container className="container">
        <Row className="row">
          <Col className="col-12">
            <Title className="h4 mt-5 mb-3 mx-3">Related Products</Title>
          </Col>
        </Row>
        <Row className="row g-2">
            {relatedProducts.map((product,i) => {
              return (
               <Box className="col-6 col-lg-3 mb-5 h-50">
                  <Card key={i} className="p-3 shadow p-1">
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
               </Box>
              );
            })}
        </Row>
      </Container>
    </Container>
  );
};

export default RelatedProducts;
