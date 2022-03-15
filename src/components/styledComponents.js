import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.div`

`

export const Box = styled.div`

`

export const Row = styled.div`

`

export const Col = styled.div`

`
export const StarDiv = styled.div`

`
export const TitleWrapper = styled.div``
export const SubTitle = styled.p``
export const CardWrapper = styled.div`
    
`
export const ImageWrapper = styled.div``
export const Button = styled.button`
    
`
export const Title = styled.h1`

`
export const Text = styled.p`

`
export const Label = styled.label`
`

export const GreenStyledButton = styled.button`
    color: ${props=>props.checkout?'white':'#08f26a'} ;
    font-weight: bold;
	font-size: 12px;
	text-transform: uppercase;
	background: ${props=>props.checkout?'#08f26a':'white'} none;

	border: 1px solid #08f26a;
	padding: 10px 10px;
	margin-top: 5px;
	line-height: 16px;
	border-radius: ${props=>props.smallBorder? '5px'  :  '20px'};
	border-radius: ${props=>props.noBorder? '0px'  :  '20px'};

    width:200px ;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
    @media (min-width:486px) {
        width:130px ;
    }
    &:hover{
        color: black;
        background: #08f26a;
        border: 1px solid #08f26a;

    }&:active{
        color: black;
        background: #06c556;
        border: 1px solid #08f26a;

    }   
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #11855e;
  font-weight: bold;
  color:black;
  &:hover{
    text-decoration: none;
    color:black;
    
  }
`;
//Form
export const Form = styled.form``
export const Input = styled.div`

`
