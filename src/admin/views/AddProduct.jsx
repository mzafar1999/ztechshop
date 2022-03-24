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

import Select from "react-select";
import {
  phoneBrandOptions,
  phoneColorOptions,
  phoneOSOptions,
  phoneStorageOptionos,
} from "../components/smartphone";
import {
  laptopBrandOptions,
  laptopColorOptions,
  laptopOSOptions,
  laptopStorageOptions,
} from "../components/laptop";
import {
  consoleBrandOptions,
  consoleColorOptions,
  consoleStorageOptions,
} from "../components/console";
import {
  TVBrandOptions,
  TVColorOptions,
  TVSizeOptions,
} from "../components/tv";
import { Textarea } from "../../components/Forms/Contact";
import axios from "axios";
import PhoneCat from "../components/PhoneCat";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../redux/adminSlice";
import LaptopCat from "../components/LaptopCat";
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

const UploadBox = styled.div`
  height: 300px;
  width: 700px;
  margin-bottom: 30px;
`;



const AddProduct = () => {

  const [imageUrl, setImageUrl] = useState('');
  const uploadImages = (e) => {
  

    let files = e.target.files

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      formData.append("file", file);
      formData.append("upload_preset", "dmdxb6ix");
    }

    axios.post(
      "https://api.cloudinary.com/v1_1/dghtzvam5/image/upload",
      formData
    ).then((res) => {
      setImageUrl(res.data.url);
    })
  };

  // console.log(imageUrl);
  


  const [productPictures, setProductPictures] = useState([]);
  const [product, setProduct] = useState({});


  //Categories Options
  const categoriesOptions = [
    { value: "smartPhone", label: "Smart Phone" },
    { value: "laptop", label: "Laptop" },
    { value: "console", label: "Console" },
    { value: "tv", label: "TV" },
  ];
 

  //Console
  const [consoleStorage, setConsoleStorage] = useState({
    value: "512GB",
    label: "512GB",
  });
  const [consoleBrand, setConsoleBrand] = useState({
    value: "microsoft",
    label: "Microsoft",
  });

  
  //TV
  const [tvBrand, setTVBrand] = useState({ value: "sony", label: "Sony" });
  const [tvSize, setTVSize] = useState({ value: "32 in", label: "32 in" });

  //Color
  const [laptopColor, setLaptopColor] = useState({
    value: "Black",
    label: "Black",
  });
  const [consoleColor, setConsoleColor] = useState({
    value: "Black",
    label: "Black",
  });
  const [TVColor, setTVColor] = useState({ value: "Black", label: "Black" });
  const PickerOptions = {
    maxFiles: 15,
  };

  
  
  //useSelector 
  //select category
  //render component
  
  const currentCategory = useSelector(state=>state.admin.currentCategory.value)
  if(currentCategory === 'smartPhone') {
    return (
      <PhoneCat/>
    );
  }else if (currentCategory === 'laptop'){
    return (
      <LaptopCat/>
    );
  }else{
    return <PhoneCat/>
  }
  
  
};

export default AddProduct;
