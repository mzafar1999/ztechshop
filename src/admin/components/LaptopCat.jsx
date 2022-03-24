import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import {
  Box,
  Col,
  Form,
  GreenStyledButton,
  Input,
  Label,
} from "../../components/styledComponents";
import {
  laptopBrandOptions,
  laptopColorOptions,
  laptopOSOptions,
  laptopStorageOptions,
} from "./laptop";
import { Textarea } from "../../components/Forms/Contact";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../redux/adminSlice";
import { Container } from './PhoneCat';
const UploadBox = styled.div`
  height: 300px;
  width: 700px;
  margin-bottom: 30px;
`;

const LaptopCat = () => {
  
  const categoriesOptions = [
    { value: "smartPhone", label: "Smart Phone" },
    { value: "laptop", label: "Laptop" },
    { value: "console", label: "Console" },
    { value: "tv", label: "TV" },
  ];
  //Set Categoris Options
  const [categories, setCategories] = useState({
    value: "laptop",
    label: "Laptop",
  });
  
  //Laptop
  const [laptopStorage, setLaptopStorage] = useState({
    value: "512GB",
    label: "512GB",
  });
  const [laptopOS, setlaptopOS] = useState({ value: "MacOS", label: "MacOS" });
  const [laptopBrand, setLaptopBrand] = useState({
    value: "apple",
    label: "Apple",
  });
  //Color
  const [laptopColor, setLaptopColor] = useState({
    value: "Black",
    label: "Black",
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let product = {
      laptopStorage: laptopStorage.value,
      laptopBrand: laptopBrand.value,
      laptopOS: laptopOS.value,
      laptopColor: laptopColor.value,
    };
    console.log(product);
  };
  
  
  
  
  return (
    <Container className="">
      <Box className="register-form">
        <Form onSubmit={handleSubmit}>
          <Box className="form-group row">
            <Col className="col-sm-6">
             
              <Box>
                <Label htmlFor="name"> Product Full Name </Label>
                <Input
                  name="name"
                  type="text"
                  className="form-control"
                
                />
             
              </Box>

              {/* Start of Storage selection */}
            
         
                <Box>
                  <Label htmlFor="laptop">Laptop Storage</Label>
                  <Select
                    defaultValue={laptopStorage}
                   onChange={setLaptopStorage}
                    options={laptopStorageOptions}
                  />
                </Box>
            

              {/* Brand Selection */}
           
                <Box>
                  <Label htmlFor="brand">Brand</Label>
                  <Select
                    defaultValue={laptopBrand}
                    options={laptopBrandOptions}
                   onChange={setLaptopBrand}
                  />
                </Box>
           

              {/* Start of OS Selection */}
            
                <Box>
                  <Label htmlFor="os">OS</Label>
                  <Select
                    defaultValue={laptopOS}
                    options={laptopOSOptions}
                    name="os"
                    onChange={setlaptopOS}
                  />
                </Box>
          
              <Box className="mt-4">
                  {/* <input type="file" name="file" multiple onChange={uploadImages} /> */}
                  {/* <button onClick={uploadImages}>Upload</button> */}

              </Box>

              {/* Size Selection */}

           
            </Col>
            <Col className="col-sm-6">
              {/* Start of Color */}
            
           
                <Box>
                  <Label htmlFor="laptopcolor">Laptop Color</Label>
                  <Select
                    defaultValue={laptopColor}
                    options={laptopColorOptions}
                    onChange={setLaptopColor}
                    name="color"
                  />
                </Box>
          
              <Box>
                <Label htmlFor="model_name"> Model Name </Label>
                <Input
                  name="model_name"
                  type="model_name"
                  className="form-control"
               
                />
              
              </Box>
            

              <Box>
                <Label htmlFor="price"> Price </Label>
                <Input
                  name="price"
                  type="text"
                  className="form-control"
               
                />
              </Box>
              <Box className="form-group">
                <Label htmlFor="description"> Product Description </Label>
                <Textarea
                  rows="6"
                  name="description"
                  type="text"
                  className="form-control"
               
                />
              
              </Box>
            </Col>
          </Box>

          <Box className="form-group">
            <GreenStyledButton smallBorder type="submit">
              Add Product
            </GreenStyledButton>
          </Box>
        </Form>
        <Box></Box>
      </Box>
    </Container>
  );
}

export default LaptopCat