import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto ;
    @media (min-width:586px) {
        width: 100% ;
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
const Input = styled.input`
    
`
const Button = styled.button`
    
`
const Form = styled.form`
    
`
const Label = styled.label``

const SignIn = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Please provide email").email("Email is invalid"),
        password: Yup.string()
          .required("Please provide password")
      });

      const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit: (data) => {
          console.log(JSON.stringify(data, null, 2));
        },
      });

  return (
    <Container className="p-5">
        <h1 className="text-center mb-4">Sign In</h1>
        <Box className="register-form">
      <Form onSubmit={formik.handleSubmit}>
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
          <Label htmlFor="password"> Password </Label>
          <Input
            name="password"
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Box className="text-danger">
            {formik.errors.password ? formik.errors.password : null}
          </Box>
        </Box>
       
        
        <Box className="form-group">
          <Button type="submit" className="btn btn-primary">
            Sign In
          </Button>
        </Box>
      </Form>
    </Box>
    </Container>
  )
}

export default SignIn
