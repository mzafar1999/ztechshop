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

const SignUp = () => {

    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required("Fullname is required"),
        username: Yup.string()
          .required("Username is required")
          .min(6, "Username must be at least 6 characters")
          .max(20, "Username must not exceed 20 characters"),
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string()
          .required("Password is required")
          .min(6, "Password must be at least 6 characters")
          .max(40, "Password must not exceed 40 characters"),
        confirmPassword: Yup.string()
          .required("Confirm Password is required")
          .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
      });

      const formik = useFormik({
        initialValues: {
          fullname: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        },
        validationSchema,
        validateOnBlur: false,
        onSubmit: (data) => {
          console.log(JSON.stringify(data, null, 2));
        },
      });

  return (
    <Container className="p-5">
              <h1 className="text-center mb-4">Sign Up</h1>

        <Box className="register-form">
      <Form onSubmit={formik.handleSubmit}>
        <Box className="form-group">
          <Label>Full Name</Label>
          <Input
            name="fullname"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.fullname}
          />
          <Box className="text-danger">
            {formik.errors.fullname ? formik.errors.fullname : null}
          </Box>
        </Box>
        <Box className="form-group">
          <Label htmlFor="username"> Username </Label>
          <Input
            name="username"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <Box className="text-danger">
            {formik.errors.username ? formik.errors.username : null}
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
          <Label htmlFor="confirmPassword"> Confirm Password </Label>
          <Input
            name="confirmPassword"
            type="password"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <Box className="text-danger">
            {formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : null}
          </Box>
        </Box>
        
        <Box className="form-group">
          <Button type="submit" className="btn btn-primary">
            Register
          </Button>
          <Button
            type="button"
            className="btn btn-warning float-right"
            onClick={formik.handleReset}
          >
            Reset
          </Button>
        </Box>
      </Form>
    </Box>
    </Container>
  )
}

export default SignUp
