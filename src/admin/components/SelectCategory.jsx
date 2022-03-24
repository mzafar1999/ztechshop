import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Box, Label } from '../../components/styledComponents';
import Select from "react-select";
import { selectCategory } from '../../redux/adminSlice';
import styled from 'styled-components';
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
    width: 100%;
    margin-left: -100px;
  }
`;
const SelectCategory = () => {
    const categoriesOptions = [
        { value: "smartPhone", label: "Smart Phone" },
        { value: "laptop", label: "Laptop" },
        { value: "console", label: "Console" },
        { value: "tv", label: "TV" },
      ];
      //Set Categoris Options
      const [categories, setCategories] = useState({
        value: "smartPhone",
        label: "Smart Phone",
      });

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(selectCategory(categories));
    }, [categories,dispatch]);
  return (
    <Container>
          <Box>
    <Label htmlFor="category">Category</Label>
    <Select
      defaultValue={categories}
      onChange={setCategories}
      options={categoriesOptions}
    />
  </Box>
    </Container>
    )
}

export default SelectCategory