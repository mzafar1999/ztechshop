import React, { useState } from "react";
import styled from "styled-components";
import {
  Box,
  Col,
  Form,
  GreenStyledButton,
  Input,
  Label,
} from "../../components/styledComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import { colorOptions, phoneOSOptions, phoneStorageOptionos } from "../components/smartphone";
import { laptopOSOptions, laptopStorageOptions } from "../components/laptop";
import { consoleStorageOptions } from "../components/console";

const Container = styled.div`
  margin: 0 auto;
  @media (min-width: 586px) {
    width: 100%;
  }

  @media (min-width: 686px) {
    width: 70%;
  }

  @media (min-width: 786px) {
    width: 50%;
  }
  @media (min-width: 960px) {
    width: 50%;
  }
`;

const AddProduct = () => {
  const validationSchema = Yup.object().shape({
    id: Yup.number().required("Please write id"),
    name: Yup.string().required("Please write product name"),
    model_name: Yup.string().required("Please write model name"),
    storage: Yup.number(),
    os: Yup.string().required("Please write product os"),
    color: Yup.string().required("Please write product color"),
    size: Yup.string().required("Please write product size"),
    brand: Yup.string().required("Please select product brand"),
    condition: Yup.string().required("Please select product condition"),
    price: Yup.number().required("Please write product price"),
    image: Yup.array().required("Please upload product images"),
  });

  const formik = useFormik({
    initialValues: {
      id: 0,
      productName: "",
    },
    validationSchema,

    onSubmit: (data) => {
      console.log(JSON.stringify(data, null, 2));
    },
  });

  const categoriesOptions = [
    { value: "smartPhone", label: "Smart Phone" },
    { value: "laptop", label: "Laptop" },
    { value: "console", label: "Console" },
    { value: "tv", label: "TV" },
  ];

  const [categories, setCategories] = useState({
    value: "smartPhone",
    label: "Smart Phone",
  });

  //Phone
  const [phoneStorage, setPhoneStorage] = useState({
    value: "16GB",
    label: "16GB",
  });
  const [phoneOS, setPhoneOS] = useState({ value: "iOS", label: "iOS" });

  //Console
  const [consoleStorage, setConsoleStorage] = useState({
    value: "512GB",
    label: "512GB",
  });

  //Laptop
  const [laptopStorage, setLaptopStorage] = useState({
    value: "512GB",
    label: "512GB",
  });
  const [laptopOS, setlaptopOS] = useState({ value: "MacOS", label: "MacOS" });

  //TV


  //Color
  const [deviceColor, setDeviceColor] = useState({value:'Black',label:'Black'})

  return (
    <Container className="p-5">
      <h1 className="text-center mb-4">Add Product</h1>
      <Box className="register-form">
        <Form onSubmit={formik.handleSubmit}>
          <Box className="form-group row">
            <Col className="col-sm-6">
              <Box>
                <Label htmlFor="name"> Product Name </Label>
                <Input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <Box className="text-danger">
                  {formik.errors.name ? formik.errors.name : null}
                </Box>
              </Box>

              <Box>
                <Label htmlFor="category">Category</Label>
                <Select
                  defaultValue={categories}
                  onChange={setCategories}
                  options={categoriesOptions}
                />
              </Box>
              {/* Start of Storage selection */}
              {categories.value === "smartPhone" && (
                <Box>
                  <Label htmlFor="storage">Storage</Label>
                  <Select
                    defaultValue={phoneStorage}
                    onChange={setPhoneStorage}
                    options={phoneStorageOptionos}
                  />
                </Box>
              )}
              {categories.value === "laptop" && (
                <Box>
                  <Label htmlFor="laptop">Laptop Storage</Label>
                  <Select
                    defaultValue={laptopStorage}
                    onChange={setLaptopStorage}
                    options={laptopStorageOptions}
                  />
                </Box>
              )}
              {categories.value === "console" && (
                <Box>
                  <Label htmlFor="console">Console Storage</Label>
                  <Select
                    defaultValue={consoleStorage}
                    onChange={setConsoleStorage}
                    options={consoleStorageOptions}
                  />
                </Box>
              )}

              {/* Start of OS Selection */}
              {categories.value === "smartPhone" && (
                <Box>
                  <Label htmlFor="os">OS</Label>
                  <Select
                    defaultValue={phoneOS}
                    onChange={setPhoneOS}
                    options={phoneOSOptions}
                  />
                </Box>
              )}
               {categories.value === "laptop" && (
                <Box>
                  <Label htmlFor="os">OS</Label>
                  <Select
                    defaultValue={laptopOS}
                    onChange={setlaptopOS}
                    options={laptopOSOptions}
                  />
                </Box>
              )}

              {/* Brand Selection */}


              {/* Size Selection */}




            </Col>
            <Col className="col-sm-6">
              <Box>
                <Label htmlFor="model_name"> Model Name </Label>
                <Input
                  name="model_name"
                  type="model_name"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.model_name}
                />
                <Box className="text-danger">
                  {formik.errors.model_name ? formik.errors.model_name : null}
                </Box>
              </Box>
              {/* Start of Color */}
             {
               categories.value==='smartPhone' && <Box>
               <Label htmlFor="os">Phone Color</Label>
               <Select
                 defaultValue={deviceColor}
                 onChange={setDeviceColor}
                 options={colorOptions}
               />
             </Box>
             }

            </Col>
          </Box>

          <Box className="form-group">
            <GreenStyledButton
              smallBorder
              type="submit"
              className="btn btn-primary"
            >
              Add Product
            </GreenStyledButton>
          </Box>
        </Form>
      </Box>
    </Container>
  );
};

export default AddProduct;
