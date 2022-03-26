import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./productModal.css";

import {
  Box,
  Col,
  Form,
  GreenStyledButton,
  Input,
  Label,
  UploadInput,
} from "../../components/styledComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  phoneBrandOptions,
  phoneColorOptions,
  phoneOSOptions,
  phoneStorageOptionos,
} from "../components/smartphone";
import axios from "axios";
import { Textarea } from "../../components/Forms/Contact";
import Select from "react-select";
import Modal from "./Modal";
import ProductUploadModal from "./ProductUploadModal";

export const Container = styled.div`
  margin: 0 auto;
  @media (min-width: 586px) {
    width: 100%;
  }

  @media (min-width: 686px) {
    width: 70%;
  }

  @media (min-width: 786px) {
    width: 90%;
  }
  @media (min-width: 960px) {
    width: 100%;
    margin-left: -100px;
  }
`;

const UploadBox = styled.div`
  height: 300px;
  width: 700px;
  margin-bottom: 30px;
`;

const PhoneCat = () => {
  //Phone
  const [phoneStorage, setPhoneStorage] = useState({
    value: "16GB",
    label: "16GB",
  });
  const [phoneBrand, setPhoneBrand] = useState({
    value: "Apple",
    label: "Apple",
  });
  const [phoneOS, setPhoneOS] = useState({ value: "iOS", label: "iOS" });
  const [deviceColor, setDeviceColor] = useState({
    value: "Black",
    label: "Black",
  });
  const [productFullName, setProductFullName] = useState("");
  const [productModelName, setProductModelName] = useState("");
  const [phonePrice, setPhonePrice] = useState(0);
  const [phoneScreenSize, setPhoneScreenSize] = useState(0);
  const [allPhoneImages, setAllPhoneImages] = useState([]);
  const [productDescription, setProductDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [productModalOpen, setIsProductModalOpen] = useState(false)
  const uploadImages = (e) => {
    let files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "dmdxb6ix");
    }


    axios.post("https://api.cloudinary.com/v1_1/dghtzvam5/image/upload", formData).then((res) => {
        setImageUrl(res.data.url);
        setIsOpen(true);
      });
  };
  if (imageUrl) {
    allPhoneImages.push(imageUrl);
    setImageUrl("")

  }
  function clearArray(array) {
    while (array.length) {
      array.pop();
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let product = {
      productFullName,
      productModelName,
      phonePrice,
      phoneScreenSize,
      phoneStorage: phoneStorage.value,
      phoneBrand: phoneBrand.value,
      phoneOS: phoneOS.value,
      deviceColor: deviceColor.value,
      images: allPhoneImages,
    };
    setIsProductModalOpen(true)
    setImageUrl("")
    setAllPhoneImages([])
    // allPhoneImages.splice(0, allPhoneImages.length)
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
                  value={productFullName}
                  onChange={(e) => {
                    setProductFullName(e.target.value);
                  }}
                />
              </Box>
              {/* Start of Storage selection */}
              <Box>
                <Label htmlFor="storage">Phone Storage</Label>
                <Select
                  defaultValue={phoneStorage}
                  options={phoneStorageOptionos}
                  onChange={setPhoneStorage}
                />
              </Box>
              {/* Brand Selection */}
              <Box>
                <Label htmlFor="brand">Brand</Label>
                <Select
                  defaultValue={phoneBrand}
                  onChange={setPhoneBrand}
                  options={phoneBrandOptions}
                />
              </Box>

              {/* Start of OS Selection */}

              <Box>
                <Label htmlFor="os">OS</Label>
                <Select
                  defaultValue={phoneOS}
                  options={phoneOSOptions}
                  onChange={setPhoneOS}
                  name="os"
                />
              </Box>

              <Box className="mt-4">
                <input
                  type="file"
                  onChange={uploadImages}
                  className="inputfile"
                  name="file" id="file"
                  hidden
                />
                <label htmlFor="file">Image to upload</label>
                <Box>
                  {modalIsOpen ? <Modal setIsOpen={setIsOpen} /> : null}
                </Box>

              </Box>
            </Col>
            <Col className="col-sm-6">
              <Box>
                <Label htmlFor="model_name"> Model Name </Label>
                <Input
                  name="model_name"
                  type="model_name"
                  className="form-control"
                  value={productModelName}
                  onChange={(e) => setProductModelName(e.target.value)}
                />
              </Box>
              {/* Start of Color */}

              <Box>
                <Label htmlFor="smartphonecolor">Phone Color</Label>
                <Select
                  defaultValue={deviceColor}
                  options={phoneColorOptions}
                  onChange={setDeviceColor}
                />
              </Box>

              <Box>
                <Label htmlFor="name"> Screen Size </Label>
                <Input
                  name="size"
                  type="text"
                  className="form-control"
                  value={phoneScreenSize}
                  onChange={(e) => setPhoneScreenSize(e.target.value)}
                />
              </Box>

              <Box>
                <Label htmlFor="price"> Price </Label>
                <Input
                  name="price"
                  type="text"
                  className="form-control"
                  value={phonePrice}
                  onChange={(e) => setPhonePrice(e.target.value)}
                />
              </Box>
              <Box className="form-group">
                <Label htmlFor="description"> Product Description </Label>
                <Textarea
                  rows="6"
                  name="description"
                  type="text"
                  className="form-control"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
              </Box>
            </Col>
          </Box>

          <Box className="form-group">
            <GreenStyledButton smallBorder type="submit">
              Add Product
           
            </GreenStyledButton>
            <Box>
              {productModalOpen ? <ProductUploadModal setIsProductModalOpen={setIsProductModalOpen} /> : null}

                </Box>
          </Box>
        </Form>
      </Box>
    </Container>
  );
};

export default PhoneCat;
