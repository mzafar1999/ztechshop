import React from "react";
import styled from "styled-components";
import { Row, Col } from "../components/styledComponents";
import SelectCategory from "./components/SelectCategory";
import Sidebar from "./components/Sidebar";
import AddProduct from "./views/AddProduct";
import AllProducts from "./views/AllProducts";

const Container = styled.div``;
const Right = styled.div``;
const Left = styled.div``;

const AdminFrontend = () => {
  return (
    <Container className="Container-fluid ">
      <Row className="row">
        <Col className="col-md-4 col-sm-3">
            <Sidebar/>
        </Col>
        <Col className="col-md-8 col-sm-9">
          <h1 className="mt-3">Add Product</h1>
          <Col>
            <SelectCategory />
          </Col>
          <Col>
            <AddProduct />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminFrontend;
