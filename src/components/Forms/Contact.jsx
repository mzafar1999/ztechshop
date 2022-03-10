import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import styled from "styled-components";

const Container = styled.div`
margin: 0 auto ;
    @media (min-width:286px) {
        width: 80% ;
    }

    @media (min-width:686px) {
        width: 70% ;
    }
   
    @media (min-width:786px) {
        width: 50% ;
    }
     @media (min-width:960px) {
        width: 50% ;
    }
    
`
const Box = styled.div`
`
const Title = styled.h1`
    
`
const Text = styled.p`
    
`
const Image = styled.image`
    
`
const Input = styled.input`
    
`
const Button = styled.button`
    
`
const Form = styled.form`
    
`
const Label = styled.label``

const Contact = () => {
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("Please provide your name"),
        lastName: Yup.string().required("Please provide lastname"),
        email: Yup.string().required("Please provide your name").email('Email is invalid'),
        message: Yup.string().required("Please write your message"),

      });

      const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email:"",
          message:""
        },
        validationSchema,
        validateOnBlur: false,
        onSubmit: (data) => {
          console.log(JSON.stringify(data, null, 2));
        },
      });
  return (
    <Container>
        <Box>
            <Image></Image>
            <Title className="my-4">CONTACT US</Title>
            <Text>Fill out below form to learn more!</Text>
        </Box>
        <Box>
        <Box className="register-form">
      <Form onSubmit={formik.handleSubmit}>
        <Box className="form-group d-flex justify-content-between">
         <Box className="w-100"> 
         <Label htmlFor="firstName"> First Name </Label>
          <Input
            name="firstName"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        <Box className="text-danger">
            {formik.errors.firstName ? formik.errors.firstName : null}
          </Box>
         </Box>
        <Box className="w-100">
          <Label htmlFor="lastName"> Last Name </Label>
          <Input
            name="lastName"
            type="text"
            className="form-control mx-1 w-100"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <Box className="text-danger">
            {formik.errors.lastName ? formik.errors.lastName : null}
          </Box>
        </Box>
        </Box>
       
        
        <Box className="form-group">
          <Label htmlFor="email"> Email </Label>
          <Input
            name="email"
            type="email"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Box className="text-danger">
            {formik.errors.email ? formik.errors.email : null}
          </Box>
        </Box>

        <Box className="form-group">
          <Label htmlFor="message"> Message </Label>
          <textarea rows='6'
            name="message"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <Box className="text-danger">
            {formik.errors.message ? formik.errors.message : null}
          </Box>
        </Box>
        
        <Box className="form-group">
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </Box>
      </Form>
    </Box>
        </Box>
        <Box>

        </Box>
        <Box>

        </Box>
    </Container>
  )
}

export default Contact
