import React from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {GreenStyledButton} from './styledComponents'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Row,Col } from './styledComponents';
const FooterDiv = styled.div`
	background-color: #29E78E;
`;

const Container = styled.div`

`;
const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
	&:hover{
    text-decoration: none;
    color:black; 
  }
    
`;

const Title = styled.h2`
	color: white;
	border-bottom: 1px solid #2d343f;
`;
const TextAndIconWrapper = styled.div`
	color: white;
	font-size: 1.1rem;
`;

const Line = styled.div`
	border-top: 1px solid #2d343f;
	`;
const Input = styled.input`
	color: white;
	background-color: #fff;
	&:focus{
		border-color: #29E78E !important;
		box-shadow: 0 0 0 0.25rem rgb(14 248 115 / 50%) !important;
	}
`;

const SocialIconWrapper = styled.div`
	border: 1px solid #2d343f;
	border-radius: 50%;
	padding: 10px;
`;
const ALink = styled.a`
    text-decoration: none;
    color:white;
	&:hover{
        color: #08f26a;

    }
`
const SubTitle = styled.p`color: white;`;

const Footer = () => {
	const productsLinks = [
		'Gaming',
		'PC',
		"Console",
		"Laptop",
		'Controller',
		'Tech Accessories',
		
	];
	const furtherInfoLinks = [ 'Home', 'About Us', 'Shop Locations', 'FAQs', 'Contact' ];
	const socialIcons = [
		{
			id: 1,
			icon: <FaFacebookF size={30} />,
			to: '/facebook'
		},
		{
			id: 1,
			icon: <FaInstagram size={30} />,
			to: '/Instagram'
		},
		{
			id: 1,
			icon: <FaTwitter size={30} />,
			to: '/twitter'
		},
		{
			id: 1,
			icon: <FaLinkedin size={30} />,
			to: '/linkedIn'
		}
	];
	return (
		<FooterDiv >
			<Container className="container">
				<Row className="row">
					<Col className="col-md-4 pt-5">
						<Title className=" pb-3 logo">Z-Shop</Title>
						<TextAndIconWrapper className="my-2">
							<MdLocationOn />Aurillac, France, 15000
						</TextAndIconWrapper>
						<TextAndIconWrapper className="my-2">
							<AiFillPhone /> <NavLink to={`/`}> 0780 43 46 2121</NavLink>{' '}
						</TextAndIconWrapper>
						<TextAndIconWrapper className="my-2">
							<MdEmail /> <NavLink to={`/`}>ze-commerce@gmail.com </NavLink>{' '}
						</TextAndIconWrapper>
					</Col>
					<Col className="col-md-4 pt-5">
						<Title className=" pb-3 logo">Products</Title>
						{productsLinks.map((item,i) => {
							return (
								<TextAndIconWrapper key={i} className="my-2">
									<NavLink to={`/`}>{item}</NavLink>
								</TextAndIconWrapper>
							);
						})}
					</Col>
					<Col className="col-md-4 pt-5">
						<Title className=" pb-3 logo">Further Info</Title>
						{furtherInfoLinks.map((item,i) => {
							return (
								<TextAndIconWrapper key={i} className="my-2">
									<NavLink to={`/`}>{item}</NavLink>
								</TextAndIconWrapper>
							);
						})}
					</Col>
				</Row>
				<Row className="row mb-4">
					<Col className="col-12 my-4">
						<Line className="" />
					</Col>
					<Col className=" me-auto mt-2 d-flex justify-content-center">
						{socialIcons.map((social,i) => {
							return (
								<SocialIconWrapper key={i} className="mx-sm-2 mx-3 p-1 p-md-2">
									<NavLink to={social.link}>{social.icon}</NavLink>
								</SocialIconWrapper>
							);
						})}
					</Col>
					<Col className="col-lg-4 col-md-6 mx-auto d-flex mt-2 align-items-center"  >
						<Input className="form-control border-light" placeholder="Email Address" />
						<GreenStyledButton smallBorder className=" mx-sm-1">Subscribe</GreenStyledButton>
					</Col>
				</Row>
			</Container>
			<Container className="w-100 bg-black py-3">
				<Container className="container">
					<Row className="row">
						<Col className="col-12 d-flex justify-content-center">
							
                            <SubTitle className='text-center'>
                            Developed by M.Zafar with MERN Stack
                            </SubTitle>   
                            <ALink className='mx-2' target='_blank'  href='http://github.com/mzafar1999'>
                                <FaGithub size={25}/>
                            </ALink>                            
						</Col>
					</Row>
				</Container>
			</Container>
		</FooterDiv>
	);
};

export default Footer;
