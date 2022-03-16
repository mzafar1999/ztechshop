import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CardComp from "../components/CardComp";
import { RiArrowDownSLine } from "react-icons/ri";
import { Box } from "../components/styledComponents";
export const ContainerFluid = styled.section``;
export const Container = styled.section``;
export const Row = styled.div``;
export const Col = styled.div``;
export const TitleWrapper = styled.div``;

export const Title = styled.p`
  font-size: ${(props) => (props.big ? "30px" : "22px")};
  font-size: ${(props) => (props.subheading ? "15px" : "22px")};

  cursor: ${(props) => (props.noCursor ? "default" : "pointer")};

  &:hover {
    color: ${(props) => (props.noCursor ? "black" : "#67bbff")};
  }
`;
export const SubTitle = styled.p``;
export const CardWrapper = styled.div``;
export const ImageWrapper = styled.div``;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #cccccc;
`;
export const Button = styled.button`
  height: 54px;
  width: 58px;
  border-radius: 0 !important;
  font-size: 22px !important;
  border-left: 1px solid #e4e4e4;
  background-color: ${(props) => (props.active ? "black" : "white")};
  color: ${(props) => (props.active ? "white" : "black")};

  &:hover {
    background-color: ${(props) => (props.active ? "white" : "#3f3f3f")};
    color: ${(props) => (props.active ? "black" : "white")};
    border: none;
  }
`;
const SortBox = styled.div`
  width: 18.5rem;
`;
const Select = styled.select``;
const Option = styled.option``;
const Heading = styled.p`
  font-size: 24px;
`;
const CategoryBox = styled.div`
  margin-bottom: 10px;
  height: ${(props) => (props.expand ? "240px" : "50px")};
  overflow: hidden;
  transition: height 500ms;
`;
const FiltersBox = styled.div`
  transition: height 500ms;
  height: ${(props) => (props.expand ? "720px" : "50px")};
  overflow: hidden;
`;

const ShopView = () => {
  let allProducts = useSelector((state) => state.products.allProducts);

  const [expandCategory, setexpandCategory] = useState(false);
  const expandCategoryHandler = () => {
    setexpandCategory(!expandCategory);
  };
  const [expandFilters, setexpandFilters] = useState(false);
  const expandFiltersHandler = () => {
    setexpandFilters(!expandFilters);
  };

  return (
    <>
      <ContainerFluid className="container-fluid">
        <Container className="container pt-3">
          <Row className="row d-flex align-items-baseline">
            <Col className="col-md-3 d-flex flex-column">
              <Title className="h1 mb-4 mt-2 mx-2 " noCursor big>
                <strong>Shop by Category</strong>
              </Title>

              <CategoryBox
                expand={expandCategory ? "expand" : null}
                className={
                  expandCategory
                    ? " border px-2 mt-2 border py-2"
                    : " border border px-2 mt-2 py-2"
                }
              >
                <Box
                  onClick={expandCategoryHandler}
                  className="d-flex align-items-baseline justify-content-between"
                >
                  <Heading className="mb-2">All Categories</Heading>
                  <Box className="">
                    <RiArrowDownSLine
                      style={{ fontSize: "25px" }}
                      role="button"
                    />
                  </Box>
                </Box>
                <Title> Smart Phone </Title>
                <Title> Laptop </Title>
                <Title> Console </Title>
                <Title> TV </Title>
              </CategoryBox>
              <FiltersBox
                className="border px-2 mt-4 mb-4"
                expand={expandFilters ? "expand" : null}
              >
                <Box
                  onClick={expandFiltersHandler}
                  className=" d-flex align-items-baseline justify-content-between"
                >
                  <Heading className="mt-1">Filters</Heading>
                  <Box className="">
                    <RiArrowDownSLine
                      onClick={expandFiltersHandler}
                      style={{ fontSize: "25px" }}
                      role="button"
                    />
                  </Box>
                </Box>
                <Col className={"mx-2 "}>
                  <Title noCursor> Color </Title>
                  <Title subheading> Gold </Title>
                  <Title subheading> White </Title>
                  <Title subheading> Silver </Title>
                  <Title subheading> Black </Title>
                  <Title noCursor> Size </Title>
                  <Title subheading> Small </Title>
                  <Title subheading> Medium </Title>
                  <Title subheading> Large </Title>

                  <Title noCursor> Brand </Title>
                  <Title subheading> Apple </Title>
                  <Title subheading> Samsung </Title>
                  <Title noCursor> Price </Title>
                  <Title subheading> 100-999 </Title>
                  <Title subheading> 1000-1999 </Title>
                  <Title subheading> 2000-more </Title>
                </Col>
              </FiltersBox>
            </Col>
            <Col className="col-md-9">
              <Row className="d-flex justify-content-between mb-4 ">
                <SortBox>
                  <Select className="form-select w-100">
                    <Option>A-Z</Option>
                    <Option>Z-A</Option>
                    <Option>Lower Price to Higher</Option>
                    <Option>Higher Price to Lower</Option>☻
                  </Select>
                </SortBox>
              </Row>
              <Row className="row">
                {allProducts.map((product) => {
                  return (
                    <Col className="col-xl-4 col-md-6">
                      <CardComp
                        {...product}
                        thumbnail={product.images[0].imageLink}
                      />
                    </Col>
                  );
                })}
              </Row>
              <Row className="d-flex my-2">
                <Col className="ms-auto mb-5 shadow">
                  <Button className="btn " active>
                    1
                  </Button>
                  <Button className="btn btn-light  ">2</Button>
                  <Button className="btn btn-light  ">3</Button>
                  <Button className="btn btn-light  ">4</Button>
                  <Button className="btn btn-light  ">5</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </ContainerFluid>
    </>
  );
};

export default ShopView;
